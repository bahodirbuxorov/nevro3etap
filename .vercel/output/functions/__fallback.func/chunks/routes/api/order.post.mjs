import { d as defineEventHandler, r as readBody, a as getRequestHeader, c as createError, b as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const REGION_LABELS = {
  "70": "Toshkent shahri",
  "66": "Toshkent viloyati",
  "60": "Samarqand viloyati",
  "48": "Buxoro viloyati",
  "46": "Andijon viloyati",
  "50": "Farg'ona viloyati",
  "54": "Namangan viloyati",
  "58": "Qashqadaryo viloyati",
  "64": "Surxondaryo viloyati",
  "68": "Xorazm viloyati",
  "56": "Navoiy viloyati",
  "62": "Sirdaryo viloyati",
  "52": "Jizzax viloyati",
  "44": "Qoraqalpog'iston Respublikasi"
};
const DOMAIN_TOPIC_MAP = {
  "1.nevroslim.uz": 4,
  "nevroslim.uz": 2,
  "2.nevroslim.uz": 7,
  "3.nevroslim.uz": 9,
  "4.nevroslim.uz": 11,
  "5.nevroslim.uz": 13
};
function normalizeOrderPayload(body) {
  const rawName = typeof body.name === "string" ? body.name : "";
  const rawPhone = typeof body.phone_number === "string" ? body.phone_number : "";
  const purifiedDigits = rawPhone.replace(/\D/g, "");
  const region = typeof body.region === "string" ? body.region : "";
  const regionLabel = REGION_LABELS[region] || region;
  const purpose_label = typeof body.purpose_label === "string" ? body.purpose_label : "";
  const problems = Array.isArray(body.problems) ? body.problems.filter((p) => typeof p === "string") : [];
  const utm_source = typeof body.utm_source === "string" ? body.utm_source : void 0;
  const utm_medium = typeof body.utm_medium === "string" ? body.utm_medium : void 0;
  const source_direction = typeof body.source_direction === "string" ? body.source_direction : void 0;
  return {
    name: rawName.trim(),
    phone_number: `+${purifiedDigits}`,
    region,
    // Bitrix24 ga yuboriladi (numeric ID)
    regionLabel,
    // Telegram va kommentariya uchun (matn)
    purpose_label,
    problems,
    utm_source,
    utm_medium,
    source_direction
  };
}
async function sendToTelegram(payload, config, host = "") {
  const hostname = host ? host.split(":")[0].toLowerCase() : "nevroslim.uz";
  const lines = [
    "\u{1F7E2} Nevroslim",
    `\u{1F517} Manba: ${hostname}`,
    "\u{1F4CB} \u042F\u043D\u0433\u0438 \u043C\u0443\u0440\u043E\u0436\u0430\u0430\u0442!",
    ""
  ];
  if (payload.source_direction) {
    lines.push(`\u{1F517} Istochnik: ${payload.source_direction}`);
    lines.push("");
  }
  lines.push(
    `\u{1F464} \u0418\u0441\u043C: ${payload.name}`,
    `\u{1F4DE} \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${payload.phone_number}`
  );
  if (payload.regionLabel) {
    lines.push(`\u{1F4CD} \u0412\u0438\u043B\u043E\u044F\u0442: ${payload.regionLabel}`);
  }
  if (payload.purpose_label) {
    lines.push("", `\u{1F4CC} \u041C\u0430\u049B\u0441\u0430\u0434: ${payload.purpose_label}`);
  }
  if (payload.problems && payload.problems.length > 0) {
    lines.push("", "\u2757\uFE0F \u041C\u0443\u0430\u043C\u043C\u043E\u043B\u0430\u0440:");
    payload.problems.forEach((p) => lines.push(`   \u2022 ${p}`));
  }
  if (payload.utm_source || payload.utm_medium) {
    lines.push("");
  }
  if (payload.utm_source) {
    lines.push(`\u{1F4F1} Manba (Source): ${payload.utm_source}`);
  }
  if (payload.utm_medium) {
    lines.push(`\u2705 Kanal turi: ${payload.utm_medium}`);
  }
  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  let chatId = Number(config.telegramChatId);
  if (hostname === "nevroslim3.vercel.app") {
    chatId = Number(config.telegramChatIdNevroslim3 || "-1002573962693");
  }
  const messageThreadId = DOMAIN_TOPIC_MAP[hostname];
  const requestBody = {
    chat_id: chatId,
    text
  };
  if (messageThreadId !== void 0) {
    requestBody.message_thread_id = messageThreadId;
  } else if (chatId === Number(config.telegramChatId)) {
    requestBody.message_thread_id = 2;
  }
  return await $fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });
}
async function sendToBitrix(payload, config, host = "") {
  const hostname = host ? host.split(":")[0].toLowerCase() : "nevroslim.uz";
  if (hostname !== "nevroslim3.vercel.app") {
    console.log(`[Bitrix] Domain ${hostname} is currently ignored for Bitrix leads`);
    return;
  }
  if (!config.bitrixWebhookUrl) {
    console.warn("[Bitrix] Webhook URL is missing in runtimeConfig");
    return;
  }
  let url = config.bitrixWebhookUrl.trim();
  if (!url.endsWith("/")) {
    url += "/";
  }
  const leadTitle = `Nervslim.uz - ${payload.name}`;
  const commentLines = [];
  if (payload.regionLabel) {
    commentLines.push(`Viloyat: ${payload.regionLabel}`);
  }
  if (payload.purpose_label) {
    commentLines.push(`Maqsad: ${payload.purpose_label}`);
  }
  if (payload.problems && payload.problems.length > 0) {
    commentLines.push(`Muammolar: ${payload.problems.join(", ")}`);
  }
  if (payload.utm_medium) {
    commentLines.push(`Kanal: ${payload.utm_medium}`);
  }
  if (payload.source_direction) {
    commentLines.push(`Istochnik: ${payload.source_direction}`);
  }
  try {
    const contactResponse = await $fetch(`${url}crm.contact.add.json`, {
      method: "POST",
      query: {
        "fields[NAME]": payload.name,
        "fields[PHONE][0][VALUE]": payload.phone_number,
        "fields[PHONE][0][VALUE_TYPE]": "WORK",
        "fields[SOURCE_ID]": "WEB",
        "fields[SOURCE_DESCRIPTION]": `nervslim.uz | ${payload.regionLabel}`,
        // Viloyat Kontakt kartochkasiga tushadi (UF maydoni)
        "fields[UF_CRM_1762061693]": payload.region
      }
    });
    const contactId = contactResponse == null ? void 0 : contactResponse.result;
    const leadResponse = await $fetch(`${url}crm.lead.add.json`, {
      method: "POST",
      query: {
        "fields[TITLE]": leadTitle,
        "fields[NAME]": payload.name,
        "fields[CONTACT_ID]": contactId != null ? contactId : "",
        "fields[PHONE][0][VALUE]": payload.phone_number,
        "fields[PHONE][0][VALUE_TYPE]": "WORK",
        "fields[SOURCE_ID]": "WEB",
        "fields[SOURCE_DESCRIPTION]": `nervslim.uz | ${payload.regionLabel}`,
        "fields[COMMENTS]": commentLines.join("\n"),
        "params[REGISTER_SONET_EVENT]": "Y"
      }
    });
    return leadResponse;
  } catch (error) {
    console.error("[Bitrix] Error sending lead/contact:", error);
  }
}

const order_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const packet = normalizeOrderPayload(body != null ? body : {});
  const config = useRuntimeConfig();
  const host = getRequestHeader(event, "host") || "";
  if (!packet.name || packet.phone_number.length < 5) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid order payload",
      data: {
        success: false,
        message: "Ma'lumotlar noto'g'ri yuborildi"
      }
    });
  }
  const results = await Promise.allSettled([
    sendToTelegram(packet, config, host),
    sendToBitrix(packet, config, host)
  ]);
  results.forEach((res, index) => {
    if (res.status === "rejected") {
      const type = index === 0 ? "Telegram" : "Bitrix";
      console.error(`[Order API] ${type} integration failed:`, res.reason);
    }
  });
  return { success: true, message: "Murojaat qabul qilindi!" };
});

export { order_post as default };
//# sourceMappingURL=order.post.mjs.map
