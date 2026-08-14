<template>
	<section class="inline-order" id="order-form">
		<div class="container">
			<div class="inline-order__card">
				<h2 class="inline-order__title">Буюртма қолдиринг</h2>
				<p class="inline-order__subtitle">
					Маълумотларингизни қолдиринг — малакали маслаҳатчиларимиз тез орада сиз билан боғланади
				</p>

				<form @submit.prevent="submitForm" class="inline-order__form">
					<div class="inline-order__field">
						<label class="inline-order__label">Исмингиз</label>
						<input
							required
							v-model="name"
							type="text"
							class="inline-order__input"
							placeholder="Исмингизни киритинг"
						/>
					</div>

					<div class="inline-order__field">
						<label class="inline-order__label">Телефон рақам</label>
						<input
							pattern="\+998\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}"
							required
							autocomplete="off"
							v-model="phone"
							type="text"
							class="inline-order__input"
							v-maska
							data-maska="+998(##) ### ## ##"
							placeholder="+998(__) ___ __ __"
						/>
					</div>

					<div class="inline-order__field">
						<label class="inline-order__label">Вилоят</label>
						<select
							required
							v-model="region"
							class="inline-order__input inline-order__select"
							:class="{ 'inline-order__select--placeholder': !region }"
						>
							<option value="" disabled>Вилоятни танланг</option>
							<option v-for="r in regionOptions" :key="r.value" :value="r.value">
								{{ r.label }}
							</option>
						</select>
					</div>

					<button
						id="submit-lead-inline"
						data-meta="lead-submit"
						type="submit"
						class="inline-order__submit btn--main"
						:disabled="isSubmitting"
					>
						{{ isSubmitting ? 'ЮБОРИЛМОҚДА...' : 'ЮБОРИШ' }}
					</button>
				</form>
			</div>
		</div>

		<!-- Duplicate modal -->
		<div class="duplicate-overlay" v-if="isDuplicateModal" @click.self="isDuplicateModal = false">
			<div class="duplicate-popup">
				<button class="duplicate-popup__close" @click="isDuplicateModal = false">&times;</button>
				<div class="duplicate-popup__icon">
					<IconsPhone />
				</div>
				<h1 class="duplicate-popup__title">Сиз олдин ҳам мурожаат қолдиргансиз!</h1>
				<p class="duplicate-popup__text">
					Менежерларимиз тез орада siz билан боғланади. Илтимос, кутиб туринг!
				</p>
				<div class="duplicate-popup__actions">
					<a href="tel:+998712021818" data-meta="contact-phone" class="duplicate-popup__btn duplicate-popup__btn--primary">
						Қўнғироқ қилиш
					</a>
					<a href="https://t.me/NEVROSLIM" data-meta="contact-telegram" target="_blank" rel="noopener" class="duplicate-popup__btn duplicate-popup__btn--ghost">
						Telegram
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const emit = defineEmits<{
	(e: 'submitted'): void;
}>();

const { capture: captureUtm, get: getUtm } = useUtmParams()
onMounted(() => captureUtm())

// Bitrix24 enumeration ID → o'zbek nomi (server/utils/gateway.ts bilan mos)
const regionOptions = [
	{ value: '70', label: 'Toshkent shahri' },
	{ value: '66', label: 'Toshkent viloyati' },
	{ value: '60', label: 'Samarqand viloyati' },
	{ value: '48', label: 'Buxoro viloyati' },
	{ value: '46', label: 'Andijon viloyati' },
	{ value: '50', label: "Farg'ona viloyati" },
	{ value: '54', label: 'Namangan viloyati' },
	{ value: '58', label: 'Qashqadaryo viloyati' },
	{ value: '64', label: 'Surxondaryo viloyati' },
	{ value: '68', label: 'Xorazm viloyati' },
	{ value: '56', label: 'Navoiy viloyati' },
	{ value: '62', label: 'Sirdaryo viloyati' },
	{ value: '52', label: 'Jizzax viloyati' },
	{ value: '44', label: "Qoraqalpog'iston Respublikasi" },
];

const name = ref('');
const phone = ref('+998');
const region = ref('');
const isSubmitting = ref(false);
const isDuplicateModal = ref(false);

function rinseDigits(raw: string) {
	return raw.replace(/\D/g, '');
}

function isPhoneSubmitted(phoneNumber: string) {
	try {
		const phones = JSON.parse(localStorage.getItem('submitted_phones') || '[]');
		return phones.includes(phoneNumber);
	} catch {}
	return false;
}

function savePhone(phoneNumber: string) {
	try {
		const phones = JSON.parse(localStorage.getItem('submitted_phones') || '[]');
		if (!phones.includes(phoneNumber)) {
			phones.push(phoneNumber);
			localStorage.setItem('submitted_phones', JSON.stringify(phones));
		}
	} catch {}
}

// Meta Lead — FAQAT /api/order muvaffaqiyatli javob qaytargandan keyin.
// Tugma bosilishi (codeless) hisoblanmaydi: nuxt.config.ts da autoConfig=false.
function trackLead(phoneNumber: string) {
	if (typeof window === 'undefined' || !window.fbq) return;
	// eventID — kelajakda server-side (CAPI) dedup uchun barqaror kalit
	window.fbq('track', 'Lead', { content_name: 'inline-order-form' }, { eventID: `lead-${phoneNumber}` });
}

async function submitForm() {
	if (isSubmitting.value) return;

	const normalizedPhone = `+${rinseDigits(phone.value)}`;

	if (isPhoneSubmitted(normalizedPhone)) {
		isDuplicateModal.value = true;
		return;
	}

	isSubmitting.value = true;

	try {
		const validateResult = await $fetch('/api/order', {
			method: 'POST',
			body: {
				name: name.value,
				phone_number: normalizedPhone,
				region: region.value,
				...getUtm(),
			},
		});

		if (!validateResult.success) {
			toast.error(`❌ ${validateResult.message}`);
			return;
		} else {
			savePhone(normalizedPhone);
			trackLead(normalizedPhone);

			name.value = '';
			phone.value = '+998';
			region.value = '';
			emit('submitted');
			navigateTo('/thanks');
		}
	} catch (error) {
		console.error('Xatolik:', error);
		toast.error('❌ Tizimda xatolik yuz berdi!');
	} finally {
		isSubmitting.value = false;
	}
}
</script>

<style scoped>
.inline-order {
	position: relative;
	padding: clamp(40px, 6vw, 72px) 0;
	background: #e4f1ff;
}

.inline-order__card {
	width: min(560px, 100%);
	margin: 0 auto;
	background: #fff;
	border-radius: 24px;
	padding: clamp(28px, 5vw, 48px);
	box-shadow: 0 10px 40px rgba(31, 90, 254, 0.1);
}

.inline-order__title {
	text-align: center;
	font-size: clamp(26px, 3.4vw, 34px);
	font-weight: 800;
	color: #1a1a2e;
	margin: 0 0 10px;
	line-height: 1.25;
}

.inline-order__subtitle {
	text-align: center;
	font-size: clamp(14px, 1.8vw, 16px);
	color: #7a8699;
	font-weight: 500;
	margin: 0 auto 28px;
	max-width: 42ch;
	line-height: 1.5;
}

.inline-order__form {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

.inline-order__field {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.inline-order__label {
	font-size: 14px;
	font-weight: 600;
	color: #555;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.inline-order__input {
	width: 100%;
	padding: 16px 20px;
	border-radius: 12px;
	outline: none;
	border: 2px solid #e0e0e0;
	font-size: 16px;
	font-weight: 400;
	background: #fff;
	transition: all 0.2s;
	color: #1a1a2e;
}

.inline-order__input:focus {
	border-color: #1f5afe;
	box-shadow: 0 0 0 3px rgba(31, 90, 254, 0.1);
}

.inline-order__select {
	appearance: none;
	-webkit-appearance: none;
	cursor: pointer;
	padding-right: 44px;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 18px center;
}

.inline-order__select--placeholder {
	color: #999;
}

.inline-order__submit {
	width: 100%;
	border: none;
	animation: none;
	border-radius: 12px;
	padding: 18px;
	font-size: 18px;
	margin-top: 6px;
	cursor: pointer;
}

.inline-order__submit:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

/* ── Duplicate overlay ── */
.duplicate-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1100;
	display: grid;
	place-items: center;
	padding: 16px;
	animation: popupIn 0.25s ease;
}

.duplicate-popup {
	position: relative;
	width: min(480px, 100%);
	background: #fff;
	border-radius: 20px;
	padding: clamp(24px, 4vw, 40px);
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.duplicate-popup__close {
	position: absolute;
	top: 12px;
	right: 16px;
	background: none;
	border: none;
	font-size: 28px;
	color: #999;
	cursor: pointer;
	line-height: 1;
	transition: color 0.2s;
}

.duplicate-popup__close:hover {
	color: #333;
}

.duplicate-popup__icon {
	width: 64px;
	height: 64px;
	margin: 0 auto 16px;
	svg {
		width: 100%;
		height: 100%;
		color: #2e8b57;
	}
}

.duplicate-popup__title {
	text-align: center;
	font-size: clamp(18px, 2.4vw, 24px);
	font-weight: 800;
	color: #163321;
	margin: 0 0 8px;
}

.duplicate-popup__text {
	text-align: center;
	font-size: 14px;
	color: #587a66;
	margin: 0 auto 20px;
	max-width: 44ch;
}

.duplicate-popup__actions {
	display: flex;
	gap: 10px;
	justify-content: center;
	flex-wrap: wrap;
}

.duplicate-popup__btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	border-radius: 10px;
	font-weight: 700;
	font-size: 14px;
	text-decoration: none;
	transition: transform 0.12s, filter 0.2s;
}

.duplicate-popup__btn:active {
	transform: translateY(1px);
}

.duplicate-popup__btn--primary {
	background: linear-gradient(180deg, #2e8b57, #1b6e44);
	color: #fff;
}

.duplicate-popup__btn--primary:hover {
	filter: brightness(1.05);
}

.duplicate-popup__btn--ghost {
	background: rgba(46, 139, 87, 0.08);
	color: #1b6e44;
}

.duplicate-popup__btn--ghost:hover {
	background: rgba(46, 139, 87, 0.14);
}

@keyframes popupIn {
	from {
		opacity: 0;
		transform: scale(0.95);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}

@media (max-width: 480px) {
	.duplicate-popup__actions {
		flex-direction: column;
	}

	.duplicate-popup__btn {
		width: 100%;
		text-align: center;
	}
}
</style>
