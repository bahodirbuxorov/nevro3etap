// Bitrix24 enumeration ID → o'zbek nomi mapping
const REGION_LABELS: Record<string, string> = {
	'70': 'Toshkent shahri',
	'66': 'Toshkent viloyati',
	'60': 'Samarqand viloyati',
	'48': 'Buxoro viloyati',
	'46': 'Andijon viloyati',
	'50': "Farg'ona viloyati",
	'54': 'Namangan viloyati',
	'58': 'Qashqadaryo viloyati',
	'64': 'Surxondaryo viloyati',
	'68': 'Xorazm viloyati',
	'56': 'Navoiy viloyati',
	'62': 'Sirdaryo viloyati',
	'52': 'Jizzax viloyati',
	'44': "Qoraqalpog'iston Respublikasi",
};

const DOMAIN_TOPIC_MAP: Record<string, number> = {
	'1.nevroslim.uz': 4,
	'nevroslim.uz': 2,
	'2.nevroslim.uz': 7,
	'3.nevroslim.uz': 9,
	'4.nevroslim.uz': 11,
	'5.nevroslim.uz': 13,
};

export function normalizeOrderPayload(body: Record<string, unknown>) {
	const rawName = typeof body.name === 'string' ? body.name : '';
	const rawPhone = typeof body.phone_number === 'string' ? body.phone_number : '';
	const purifiedDigits = rawPhone.replace(/\D/g, '');
	const region = typeof body.region === 'string' ? body.region : '';
	const regionLabel = REGION_LABELS[region] || region;
	const purpose_label = typeof body.purpose_label === 'string' ? body.purpose_label : '';
	const problems = Array.isArray(body.problems) ? body.problems.filter((p): p is string => typeof p === 'string') : [];
	const utm_source = typeof body.utm_source === 'string' ? body.utm_source : undefined;
	const utm_medium = typeof body.utm_medium === 'string' ? body.utm_medium : undefined;
	const source_direction = typeof body.source_direction === 'string' ? body.source_direction : undefined;

	return {
		name: rawName.trim(),
		phone_number: `+${purifiedDigits}`,
		region,          // Bitrix24 ga yuboriladi (numeric ID)
		regionLabel,     // Telegram va kommentariya uchun (matn)
		purpose_label,
		problems,
		utm_source,
		utm_medium,
		source_direction,
	};
}

export async function sendToTelegram(
	payload: {
		name: string;
		phone_number: string;
		region: string;
		regionLabel: string;
		purpose_label: string;
		problems: string[];
		utm_source?: string;
		utm_medium?: string;
		source_direction?: string;
	},
	config: { telegramBotToken: string; telegramChatId: string; telegramChatIdNevroslim3?: string },
	host: string = '',
) {
	const hostname = host ? host.split(':')[0].toLowerCase() : 'nevroslim.uz';

	const lines = [
		'🟢 Nevroslim',
		`🔗 Manba: ${hostname}`,
		'📋 Янги мурожаат!',
		'',
	];

	if (payload.source_direction) {
		lines.push(`🔗 Istochnik: ${payload.source_direction}`);
		lines.push('');
	}

	lines.push(
		`👤 Исм: ${payload.name}`,
		`📞 Телефон: ${payload.phone_number}`,
	);

	if (payload.regionLabel) {
		lines.push(`📍 Вилоят: ${payload.regionLabel}`);
	}

	if (payload.purpose_label) {
		lines.push('', `📌 Мақсад: ${payload.purpose_label}`);
	}

	if (payload.problems && payload.problems.length > 0) {
		lines.push('', '❗️ Муаммолар:');
		payload.problems.forEach(p => lines.push(`   • ${p}`));
	}

	if (payload.utm_source || payload.utm_medium) {
		lines.push('');
	}

	if (payload.utm_source) {
		lines.push(`📱 Manba (Source): ${payload.utm_source}`);
	}

	if (payload.utm_medium) {
		lines.push(`✅ Kanal turi: ${payload.utm_medium}`);
	}

	const text = lines.join('\n');

	const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
	let chatId = Number(config.telegramChatId);

	if (hostname === 'nevroslim3.vercel.app') {
		chatId = Number(config.telegramChatIdNevroslim3 || '-1002573962693');
	}

	const messageThreadId = DOMAIN_TOPIC_MAP[hostname]; // Only use topic if defined mapping exists (it might not be needed for the new group if it's not a forum, but we keep it or default to undefined/2)

	const requestBody: any = {
		chat_id: chatId,
		text: text,
	};

	if (messageThreadId !== undefined) {
		requestBody.message_thread_id = messageThreadId;
	} else if (chatId === Number(config.telegramChatId)) {
        requestBody.message_thread_id = 2; // Default for the main group
    }

	return await $fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(requestBody),
	});
}

export async function sendToBitrix(
	payload: {
		name: string;
		phone_number: string;
		region: string;
		regionLabel: string;
		purpose_label: string;
		problems: string[];
		utm_source?: string;
		utm_medium?: string;
		source_direction?: string;
	},
	config: { bitrixWebhookUrl: string },
) {
	if (!config.bitrixWebhookUrl) {
		console.warn('[Bitrix] Webhook URL is missing in runtimeConfig');
		return;
	}

	let url = config.bitrixWebhookUrl.trim();

	if (!url.endsWith('/')) {
		url += '/';
	}

	const leadTitle = `Nervslim.uz - ${payload.name}`;

	const commentLines: string[] = [];
	if (payload.regionLabel) {
		commentLines.push(`Viloyat: ${payload.regionLabel}`);
	}
	if (payload.purpose_label) {
		commentLines.push(`Maqsad: ${payload.purpose_label}`);
	}
	if (payload.problems && payload.problems.length > 0) {
		commentLines.push(`Muammolar: ${payload.problems.join(', ')}`);
	}
	if (payload.utm_medium) {
		commentLines.push(`Kanal: ${payload.utm_medium}`);
	}
	if (payload.source_direction) {
		commentLines.push(`Istochnik: ${payload.source_direction}`);
	}

	try {
		// 1. Kontakt yaratamiz (Viloyat field Kontaktga tegishli bo'lgani uchun)
		const contactResponse = await $fetch<{ result?: number }>(`${url}crm.contact.add.json`, {
			method: 'POST',
			query: {
				'fields[NAME]': payload.name,
				'fields[PHONE][0][VALUE]': payload.phone_number,
				'fields[PHONE][0][VALUE_TYPE]': 'WORK',
				'fields[SOURCE_ID]': 'WEB',
				'fields[SOURCE_DESCRIPTION]': `nervslim.uz | ${payload.regionLabel}`,
				// Viloyat Kontakt kartochkasiga tushadi (UF maydoni)
				'fields[UF_CRM_1762061693]': payload.region,
			},
		});

		const contactId = contactResponse?.result;

		// 2. Lid yaratib, unga Kontaktni bog'laymiz
		const leadResponse = await $fetch(`${url}crm.lead.add.json`, {
			method: 'POST',
			query: {
				'fields[TITLE]': leadTitle,
				'fields[NAME]': payload.name,
				'fields[CONTACT_ID]': contactId ?? '',
				'fields[PHONE][0][VALUE]': payload.phone_number,
				'fields[PHONE][0][VALUE_TYPE]': 'WORK',
				'fields[SOURCE_ID]': 'WEB',
				'fields[SOURCE_DESCRIPTION]': `nervslim.uz | ${payload.regionLabel}`,
				'fields[COMMENTS]': commentLines.join('\n'),
				'params[REGISTER_SONET_EVENT]': 'Y',
			},
		});

		return leadResponse;
	} catch (error) {
		console.error('[Bitrix] Error sending lead/contact:', error);
	}
}
