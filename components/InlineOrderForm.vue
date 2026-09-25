<template>
	<div class="nv-form" id="order-form">
		<!-- Progress: 2 question steps, then contacts -->
		<div class="nv-form__progress" aria-hidden="true">
			<span v-for="n in 3" :key="n" :class="{ 'is-done': step > n, 'is-current': step === n }"></span>
		</div>
		<p class="nv-form__stepno">{{ step }}-qadam / 3</p>

		<!-- Step 1: purpose (single choice, advances on tap) -->
		<div v-if="step === 1" class="nv-form__step">
			<h3 class="nv-form__title">Bizga murojaat qilishingizdan maqsadingiz nima?</h3>
			<div class="nv-form__options">
				<button
					v-for="p in purposeOptions"
					:key="p.key"
					type="button"
					class="nv-form__option"
					:class="{ 'is-selected': purpose === p.key }"
					@click="selectPurpose(p.key)"
				>
					<span class="nv-form__check"><NvIcon v-if="purpose === p.key" name="check" :size="14" :stroke="3" /></span>
					{{ p.label }}
				</button>
			</div>
		</div>

		<!-- Step 2: problems (multiple choice) -->
		<div v-else-if="step === 2" class="nv-form__step">
			<h3 class="nv-form__title">Sizni qanday muammo bezovta qiladi?</h3>
			<p class="nv-form__sub">Bir nechta variantni tanlashingiz mumkin</p>
			<div class="nv-form__options">
				<button
					v-for="p in problemOptions"
					:key="p.key"
					type="button"
					class="nv-form__option"
					:class="{ 'is-selected': problems.includes(p.key) }"
					:aria-pressed="problems.includes(p.key)"
					@click="toggleProblem(p.key)"
				>
					<span class="nv-form__check"><NvIcon v-if="problems.includes(p.key)" name="check" :size="14" :stroke="3" /></span>
					{{ p.label }}
				</button>
			</div>
			<div class="nv-form__nav">
				<button type="button" class="nv-form__back" @click="step = 1">Orqaga</button>
				<button type="button" data-meta="quiz-next" class="nv-btn nv-form__next" :disabled="!problems.length" @click="step = 3">
					Davom etish <NvIcon name="arrow" :size="18" :stroke="2.5" />
				</button>
			</div>
		</div>

		<!-- Step 3: contacts -->
		<div v-else class="nv-form__step">
			<h3 class="nv-form__title">Ariza qoldiring va sog'liq sari qadam tashlang</h3>
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
					{{ isSubmitting ? 'YUBORILMOQDA...' : 'MASLAHAT OLISH' }}
					<NvIcon v-if="!isSubmitting" name="arrow" :size="18" :stroke="2.5" />
				</button>
				<p class="nv-form__note">Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.</p>
			</form>
			<button type="button" class="nv-form__back nv-form__back--center" @click="step = 2">Orqaga</button>
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

// Quiz answers go to /api/order as purpose_label + problems; server/utils/gateway.ts
// already prints them in Telegram and the Bitrix comment. No region step any more.
const purposeOptions = [
	{ key: 'treatment', label: 'Davolanib shifo topishim kerak' },
	{ key: 'order', label: 'Buyurtma bermoqchiman' },
];

const problemOptions = [
	{ key: 'headache', label: "Bosh og'rig'i, migren" },
	{ key: 'depression', label: 'Depressiya' },
	{ key: 'memory', label: 'Zehn va xotiraning pastligi' },
	{ key: 'fatigue', label: 'Asab toliqishi' },
	{ key: 'insomnia', label: 'Uyqusizlik, vahima' },
	{ key: 'apathy', label: 'Tushkun holatda yurish' },
	{ key: 'heart', label: "Yurak sohasida og'riq va yurak o'ynashi" },
	{ key: 'fear', label: "Qo'rquv" },
	{ key: 'stress', label: 'Stress — ichki siqilishlar' },
	{ key: 'neurosis', label: 'Nevroz' },
];

const step = ref(1);
const purpose = ref<string | null>(null);
const problems = ref<string[]>([]);
const name = ref('');
const phone = ref('+998');
const isSubmitting = ref(false);
const isDuplicateModal = ref(false);

// The card changes height between steps; keep its top in view on mobile.
watch(step, async () => {
	await nextTick();
	const el = document.getElementById('order-form');
	if (el && el.getBoundingClientRect().top < 70) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
});

function selectPurpose(key: string) {
	purpose.value = key;
	// single choice: move on right away, with a beat so the tick is visible
	setTimeout(() => { if (step.value === 1) step.value = 2; }, 220);
}

function toggleProblem(key: string) {
	const i = problems.value.indexOf(key);
	if (i === -1) problems.value.push(key);
	else problems.value.splice(i, 1);
}

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
				purpose: purpose.value,
				purpose_label: purposeOptions.find((p) => p.key === purpose.value)?.label || '',
				problems: problemOptions.filter((p) => problems.value.includes(p.key)).map((p) => p.label),
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

	&__progress {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 6px;

		span {
			height: 6px;
			border-radius: 999px;
			background: var(--nv-line);
			transition: background 0.25s;

			&.is-done,
			&.is-current {
				background: var(--nv-green-500);
			}
		}
	}

	&__stepno {
		margin: 8px 0 14px;
		font-size: 12px;
		font-weight: 700;
		color: var(--nv-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	&__step {
		animation: nvStepIn 0.25s ease;
	}

	&__options {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 16px;
	}

	&__option {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		min-height: 50px;
		padding: 12px 14px;
		border-radius: 14px;
		border: 1.5px solid var(--nv-line);
		background: var(--nv-green-50);
		font: 600 15px/1.3 var(--nv-font);
		color: var(--nv-ink);
		text-align: left;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;

		&:hover {
			border-color: var(--nv-green-500);
		}

		&.is-selected {
			border-color: var(--nv-green-500);
			background: #fff;
			box-shadow: 0 0 0 3px rgba(44, 154, 72, 0.12);
		}
	}

	&__check {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 22px;
		height: 22px;
		border-radius: 6px;
		border: 2px solid var(--nv-green-500);
		background: #fff;
		color: #fff;

		.is-selected & {
			background: var(--nv-green-500);
		}
	}

	&__nav {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 18px;
	}

	&__next {
		flex: 1;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			transform: none;
		}
	}

	&__back {
		padding: 10px 6px;
		font: 700 14px var(--nv-font);
		color: var(--nv-muted);
		cursor: pointer;

		&:hover {
			color: var(--nv-green-700);
		}

		&--center {
			display: block;
			margin: 8px auto 0;
		}
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

@keyframes nvStepIn {
	from {
		opacity: 0;
		transform: translateY(6px);
	}
	to {
		opacity: 1;
		transform: none;
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
