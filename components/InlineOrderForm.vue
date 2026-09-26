<template>
	<div class="nv-form" id="order-form">
		<div>
			<h3 class="nv-form__title">Ariza qoldiring</h3>
			<p class="nv-form__sub">Mutaxassisimiz tez orada siz bilan bog'lanadi.</p>

			<form @submit.prevent="submitForm" class="nv-form__form">
				<label class="nv-form__field">
					<span class="nv-form__label">Ismingiz</span>
					<input required v-model="name" type="text" autocomplete="given-name" class="nv-form__input" placeholder="Ismingizni kiriting" />
				</label>

				<label class="nv-form__field">
					<span class="nv-form__label">Telefon raqam</span>
					<input
						pattern="\+998\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}"
						required
						autocomplete="off"
						inputmode="tel"
						v-model="phone"
						type="text"
						class="nv-form__input"
						v-maska
						data-maska="+998(##) ### ## ##"
						placeholder="+998(__) ___ __ __"
					/>
				</label>

				<!-- Keep "lead" out of id/data attrs: Meta's codeless matcher latches onto it (git fb58435).
				     Lead is counted by Meta's URL rule on /thanks, reached only after /api/order succeeds. -->
				<button
					id="inline-order-submit"
					data-meta="order-submit"
					type="submit"
					class="nv-btn nv-form__submit"
					:disabled="isSubmitting"
				>
					{{ isSubmitting ? 'YUBORILMOQDA...' : 'YUBORISH' }}
					<NvIcon v-if="!isSubmitting" name="arrow" :size="18" :stroke="2.5" />
				</button>
				<p class="nv-form__note">Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.</p>
			</form>
		</div>

		<!-- Duplicate modal -->
		<div class="duplicate-overlay" v-if="isDuplicateModal" @click.self="isDuplicateModal = false">
			<div class="duplicate-popup">
				<button class="duplicate-popup__close" @click="isDuplicateModal = false" aria-label="Yopish">&times;</button>
				<div class="duplicate-popup__icon">
					<NvIcon name="check" :size="30" :stroke="2.5" />
				</div>
				<h3 class="duplicate-popup__title">Siz avval ham murojaat qoldirgansiz!</h3>
				<p class="duplicate-popup__text">
					Menejerlarimiz tez orada siz bilan bog'lanadi. Iltimos, kutib turing!
				</p>
				<div class="duplicate-popup__actions">
					<a href="https://t.me/NEVROSLIM" data-meta="contact-telegram" target="_blank" rel="noopener" class="duplicate-popup__btn duplicate-popup__btn--primary">
						Telegram orqali bog'lanish
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const emit = defineEmits<{
	(e: 'submitted'): void;
}>();

const { capture: captureUtm, get: getUtm } = useUtmParams()
const { dismiss: dismissModal } = useOrderModal();
onMounted(() => captureUtm())

const name = ref('');
const phone = ref('+998');
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
				...getUtm(),
			},
		});

		if (!validateResult.success) {
			toast.error(`❌ ${validateResult.message}`);
			return;
		} else {
			savePhone(normalizedPhone);

			name.value = '';
			phone.value = '+998';
			emit('submitted');
			await navigateTo('/thanks');
			dismissModal();
		}
	} catch (error) {
		console.error('Xatolik:', error);
		toast.error('❌ Tizimda xatolik yuz berdi!');
	} finally {
		isSubmitting.value = false;
	}
}
</script>

<style scoped lang="scss">
.nv-form {
	background: #fff;
	border-radius: 22px;
	padding: clamp(22px, 3vw, 32px);
	box-shadow: 0 20px 50px rgba(11, 61, 34, 0.18);
	scroll-margin-top: 90px;

	&__title {
		font-family: var(--nv-serif);
		font-size: clamp(22px, 2.4vw, 28px);
		color: var(--nv-green-800);
		line-height: 1.2;
	}

	&__sub {
		margin-top: 6px;
		font-size: 14px;
		color: var(--nv-muted);
		line-height: 1.5;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin-top: 18px;
	}

	&__field {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	&__label {
		font-size: 13px;
		font-weight: 700;
		color: var(--nv-green-800);
	}

	&__input {
		width: 100%;
		min-height: 52px;
		padding: 14px 18px;
		border-radius: 14px;
		border: 1.5px solid var(--nv-line);
		background: var(--nv-green-50);
		font: 500 16px/1.2 var(--nv-font);
		color: var(--nv-ink);
		outline: none;
		transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;

		&:focus {
			border-color: var(--nv-green-500);
			background: #fff;
			box-shadow: 0 0 0 4px rgba(44, 154, 72, 0.15);
		}
	}

	&__select {
		appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
		padding-right: 44px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2316623a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 18px center;

		&.is-placeholder {
			color: #8a9a8f;
		}
	}

	&__submit {
		width: 100%;
		margin-top: 4px;

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
			transform: none;
		}
	}

	&__note {
		text-align: center;
		font-size: 12px;
		color: var(--nv-muted);
	}
}

/* ── Duplicate overlay ── */
.duplicate-overlay {
	position: fixed;
	inset: 0;
	background: rgba(6, 30, 16, 0.55);
	z-index: 1100;
	display: grid;
	place-items: center;
	padding: 16px;
	animation: popupIn 0.25s ease;
}

.duplicate-popup {
	position: relative;
	width: min(460px, 100%);
	background: #fff;
	border-radius: 22px;
	padding: clamp(24px, 4vw, 36px);
	text-align: center;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

	&__close {
		position: absolute;
		top: 10px;
		right: 14px;
		font-size: 28px;
		line-height: 1;
		color: #8a9a8f;
		padding: 6px;
	}

	&__icon {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		margin: 0 auto 14px;
		border-radius: 50%;
		background: var(--nv-green-100);
		color: var(--nv-green-600);
	}

	&__title {
		font-family: var(--nv-serif);
		font-size: clamp(19px, 2.4vw, 23px);
		color: var(--nv-green-800);
		margin-bottom: 8px;
	}

	&__text {
		font-size: 14px;
		color: var(--nv-muted);
		margin: 0 auto 20px;
		max-width: 40ch;
	}

	&__actions {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
	}

	&__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 46px;
		padding: 12px 24px;
		border-radius: 999px;
		font-weight: 800;
		font-size: 14px;

		&--primary {
			background: linear-gradient(180deg, var(--nv-green-500), var(--nv-green-700));
			color: #fff;
		}

		&--ghost {
			background: var(--nv-green-100);
			color: var(--nv-green-700);
		}
	}
}

@keyframes popupIn {
	from {
		opacity: 0;
		transform: scale(0.96);
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
	}
}
</style>
