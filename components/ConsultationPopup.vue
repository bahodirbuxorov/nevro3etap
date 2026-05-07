<template>
	<div class="consult-overlay" v-if="isOpen">
		<div class="consult-popup">
			<button class="consult-popup__close" @click="close">&times;</button>

			<!-- Step indicators -->
			<div class="consult-popup__progress">
				<div
					class="consult-popup__progress-dot"
					:class="{ 'consult-popup__progress-dot--active': step >= 1, 'consult-popup__progress-dot--current': step === 1 }"
				></div>
				<div class="consult-popup__progress-line" :class="{ 'consult-popup__progress-line--active': step >= 2 }"></div>
				<div
					class="consult-popup__progress-dot"
					:class="{ 'consult-popup__progress-dot--active': step >= 2, 'consult-popup__progress-dot--current': step === 2 }"
				></div>
				<div class="consult-popup__progress-line" :class="{ 'consult-popup__progress-line--active': step >= 3 }"></div>
				<div
					class="consult-popup__progress-dot"
					:class="{ 'consult-popup__progress-dot--active': step >= 3, 'consult-popup__progress-dot--current': step === 3 }"
				></div>
			</div>

			<!-- Step 1: Purpose -->
			<div class="consult-popup__step" v-if="step === 1">
				<h2 class="consult-popup__title">Бизга мурожаат қилишингиздан мақсадингиз нима?</h2>
				<div class="consult-popup__options">
					<button
						class="consult-popup__option"
						:class="{ 'consult-popup__option--selected': selectedPurpose === 'treatment' }"
						@click="selectPurpose('treatment')"
					>
						<span class="consult-popup__check">
							<IconsCheck v-if="selectedPurpose === 'treatment'" />
						</span>
						Даъволаниб шифо топишим керак
					</button>
					<button
						class="consult-popup__option"
						:class="{ 'consult-popup__option--selected': selectedPurpose === 'price' }"
						@click="selectPurpose('price')"
					>
						<span class="consult-popup__check">
							<IconsCheck v-if="selectedPurpose === 'price'" />
						</span>
						Буюртма бермокчиман
					</button>
				</div>
				<button
					class="consult-popup__next btn--main"
					:disabled="!selectedPurpose"
					@click="step = 2"
				>
					ДАВОМ ЭТИШ
				</button>
			</div>

			<!-- Step 2: Problems (multiple) -->
			<div class="consult-popup__step" v-if="step === 2">
				<h2 class="consult-popup__title">Сизни нима муаммо безовта қилади?</h2>
				<p class="consult-popup__subtitle">Бир нечта вариантни танлашингиз мумкин</p>
				<div class="consult-popup__options">
					<button
						v-for="problem in problemOptions"
						:key="problem.key"
						class="consult-popup__option"
						:class="{ 'consult-popup__option--selected': selectedProblems.includes(problem.key) }"
						@click="toggleProblem(problem.key)"
					>
						<span class="consult-popup__check">
							<IconsCheck v-if="selectedProblems.includes(problem.key)" />
						</span>
						{{ problem.label }}
					</button>
				</div>
				<div class="consult-popup__nav">
					<button class="consult-popup__back" @click="step = 1">
						Орқага
					</button>
					<button
						class="consult-popup__next btn--main"
						:disabled="selectedProblems.length === 0"
						@click="step = 3"
					>
						ДАВОМ ЭТИШ
					</button>
				</div>
			</div>

			<!-- Step 3: Contact form -->
			<div class="consult-popup__step" v-if="step === 3">
				<h2 class="consult-popup__title">Ариза қолдиринг ва соғлиқ сари қадам ташланг</h2>
				<form @submit.prevent="submitForm" class="consult-popup__form">
					<div class="consult-popup__field">
						<label class="consult-popup__field-label">Исмингиз</label>
						<div class="consult-popup__field-wrap">
							<input
								required
								v-model="name"
								type="text"
								class="consult-popup__input"
								placeholder="Исмингизни киритинг"
							/>
						</div>
					</div>
					<div class="consult-popup__field">
						<label class="consult-popup__field-label">Телефон рақам</label>
						<div class="consult-popup__field-wrap">
							<input
								pattern="\+998\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}"
								required
								autocomplete="off"
								v-model="phone"
								type="text"
								class="consult-popup__input"
								v-maska
								data-maska="+998(##) ### ## ##"
								placeholder="+998(__) ___ __ __"
							/>
						</div>
					</div>
					<button id="submit-lead-btn" data-meta="lead-submit" type="submit" class="consult-popup__submit btn--main" :disabled="isSubmitting">
						{{ isSubmitting ? 'ЮБОРИЛМОҚДА...' : 'ЮБОРИШ' }}
					</button>
				</form>
				<button class="consult-popup__back" @click="step = 2">
					Орқага
				</button>
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
	</div>
</template>

<script lang="ts" setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps<{
	isOpen: boolean;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
	(e: 'submitted'): void;
}>();

const { capture: captureUtm, get: getUtm } = useUtmParams()
onMounted(() => captureUtm())

const problemOptions = [
	{ key: 'headache', label: 'Бош оғриғи, Мигрень' },
	{ key: 'depression', label: 'Депрессия' },
	{ key: 'memory', label: 'Зеҳн ва Хотиранинг пастлиги' },
	{ key: 'fatigue', label: 'Асаб толиқиши' },
	{ key: 'insomnia', label: 'Уйқусизлик, ваҳима' },
	{ key: 'apathy', label: 'Тушкун ҳолатда юриш' },
	{ key: 'heart', label: 'Юрак соҳасида оғриқ ва юрак ўйнаши' },
	{ key: 'fear', label: 'Қўрқув' },
	{ key: 'stress', label: 'Стресс - ички сиқилишлар' },
	{ key: 'neurosis', label: 'Невроз' },
];

const step = ref(1);
const selectedPurpose = ref<string | null>(null);
const selectedProblems = ref<string[]>([]);
const name = ref('');
const phone = ref('+998');
const isSubmitting = ref(false);
const isDuplicateModal = ref(false);

function close() {
	step.value = 1;
	selectedPurpose.value = null;
	selectedProblems.value = [];
	name.value = '';
	phone.value = '+998';
	isDuplicateModal.value = false;
	emit('close');
}

function selectPurpose(purpose: string) {
	selectedPurpose.value = purpose;
}

function toggleProblem(key: string) {
	const idx = selectedProblems.value.indexOf(key);
	if (idx === -1) {
		selectedProblems.value.push(key);
	} else {
		selectedProblems.value.splice(idx, 1);
	}
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
	if (isSubmitting.value || !selectedPurpose.value) return;

	const normalizedPhone = `+${rinseDigits(phone.value)}`;

	if (isPhoneSubmitted(normalizedPhone)) {
		isDuplicateModal.value = true;
		return;
	}

	isSubmitting.value = true;

	try {
		const purposeLabels: Record<string, string> = {
			treatment: 'Даъволаниб шифо топишим керак',
			price: 'Буюртма бермокчиман',
		};

		const problemLabels = problemOptions
			.filter(p => selectedProblems.value.includes(p.key))
			.map(p => p.label);

		const validateResult = await $fetch('/api/order', {
			method: 'POST',
			body: {
				name: name.value,
				phone_number: normalizedPhone,
				purpose: selectedPurpose.value,
				purpose_label: purposeLabels[selectedPurpose.value!] || '',
				problems: problemLabels,
			...getUtm(),
			},
		});

		if (!validateResult.success) {
			toast.error(`❌ ${validateResult.message}`);
			return;
		} else {
			savePhone(normalizedPhone);

			// fbq('track', 'Lead') — olib tashlandi.
			// Sabab: Meta o'zi avtomatik (codeless) 1 ta Lead event yuboradi.
			// Agar biz ham qo'shsak → 2 ta Lead chiqadi.
			// Yechim: faqat Meta'ning codeless eventiga tayanamiz.

			name.value = '';
			phone.value = '+998';
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
/* ── Main overlay (full-screen) ── */
.consult-overlay {
	position: fixed;
	inset: 0;
	z-index: 1000;
}

/* ── Popup container (full width, adaptive height) ── */
.consult-popup {
	position: relative;
	width: 100%;
	height: 100%;
	background: #fff;
	overflow-y: auto;
	animation: popupIn 0.3s ease;
}

.consult-popup__close {
	position: fixed;
	top: 16px;
	right: 20px;
	background: rgba(0, 0, 0, 0.06);
	border: none;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	font-size: 24px;
	color: #555;
	cursor: pointer;
	line-height: 1;
	transition: all 0.2s;
	z-index: 1002;
	display: flex;
	align-items: center;
	justify-content: center;
}

.consult-popup__close:hover {
	background: rgba(0, 0, 0, 0.1);
	color: #333;
}

/* ── Progress bar ── */
.consult-popup__progress {
	position: fixed;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	gap: 0;
	z-index: 1002;
}

.consult-popup__progress-dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #d0d5dd;
	transition: all 0.3s;
}

.consult-popup__progress-dot--active {
	background: #1f5afe;
}

.consult-popup__progress-dot--current {
	box-shadow: 0 0 0 4px rgba(31, 90, 254, 0.2);
}

.consult-popup__progress-line {
	width: 48px;
	height: 3px;
	background: #d0d5dd;
	transition: background 0.3s;
}

.consult-popup__progress-line--active {
	background: #1f5afe;
}

/* ── Step wrapper ── */
.consult-popup__step {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	max-width: 640px;
	margin: 0 auto;
	padding: clamp(60px, 8vh, 100px) clamp(20px, 4vw, 48px) clamp(32px, 6vh, 80px);
	min-height: 100vh;
	min-height: 100dvh;
	justify-content: center;
}

.consult-popup__title {
	text-align: center;
	font-size: clamp(26px, 3.2vw, 30px);
	font-weight: 800;
	color: #1a1a2e;
	margin: 0;
	line-height: 1.3;
}

.consult-popup__subtitle {
	margin: -12px 0 0;
	font-size: 15px;
	color: #888;
	font-weight: 500;
}

/* ── Purpose / Problem options ── */
.consult-popup__options {
	display: flex;
	flex-direction: column;
	gap: 14px;
	width: 100%;
	max-width: 480px;
}

.consult-popup__option {
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 18px 24px;
	border: 2px solid #e0e0e0;
	border-radius: 14px;
	background: #fafbff;
	font-size: 17px;
	font-weight: 600;
	color: #333;
	cursor: pointer;
	transition: all 0.2s;
	text-align: left;
}

.consult-popup__option:hover {
	border-color: #1f5afe;
	background: #f0f4ff;
}

.consult-popup__option--selected {
	border-color: #1f5afe;
	background: linear-gradient(135deg, #e8efff, #f0f4ff);
	color: #0f4cf5;
	box-shadow: 0 2px 12px rgba(31, 90, 254, 0.15);
}

/* ── Checkbox circle ── */
.consult-popup__check {
	width: 26px;
	height: 26px;
	min-width: 26px;
	border: 2px solid #ccc;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;
}

.consult-popup__option--selected .consult-popup__check {
	border-color: #1f5afe;
	background: #1f5afe;
	color: #fff;
}

.consult-popup__check svg {
	width: 14px;
	height: 14px;
}

/* ── Navigation buttons ── */
.consult-popup__next {
	width: 100%;
	max-width: 480px;
	border: none;
	animation: none;
	border-radius: 12px;
	padding: 18px;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
}

.consult-popup__next:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.consult-popup__nav {
	display: flex;
	align-items: center;
	gap: 16px;
	width: 100%;
	max-width: 480px;
}

.consult-popup__nav .consult-popup__next {
	flex: 1;
}

.consult-popup__back {
	background: none;
	border: 2px solid #e0e0e0;
	border-radius: 12px;
	padding: 16px 24px;
	font-size: 16px;
	font-weight: 600;
	color: #666;
	cursor: pointer;
	transition: all 0.2s;
	white-space: nowrap;
}

.consult-popup__back:hover {
	border-color: #1f5afe;
	color: #1f5afe;
}

/* ── Contact form ── */
.consult-popup__form {
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 440px;
	background: #fafbff;
	border-radius: 20px;
	padding: clamp(24px, 4vw, 40px);
	border: 1px solid #eef1f8;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.consult-popup__field {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.consult-popup__field-label {
	font-size: 14px;
	font-weight: 600;
	color: #555;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.consult-popup__field-wrap {
	position: relative;
}

.consult-popup__input {
	width: 100%;
	padding: 16px 20px;
	border-radius: 12px;
	outline: none;
	border: 2px solid #e0e0e0;
	font-size: 16px;
	font-weight: 400;
	background: #fff;
	transition: all 0.2s;
}

.consult-popup__input:focus {
	border-color: #1f5afe;
	box-shadow: 0 0 0 3px rgba(31, 90, 254, 0.1);
}

.consult-popup__submit {
	width: 100%;
	border: none;
	animation: none;
	border-radius: 12px;
	padding: 18px;
	font-size: 18px;
}

.consult-popup__submit:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

/* ── Duplicate overlay (on top of main overlay) ── */
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
	.consult-popup__step {
		justify-content: flex-start;
		padding-top: clamp(56px, 10vh, 100px);
	}

	.consult-popup__nav {
		flex-direction: column-reverse;
	}

	.consult-popup__nav .consult-popup__next {
		width: 100%;
	}

	.consult-popup__back {
		width: 100%;
		text-align: center;
	}

	.duplicate-popup__actions {
		flex-direction: column;
	}

	.duplicate-popup__btn {
		width: 100%;
		text-align: center;
	}
}
</style>
