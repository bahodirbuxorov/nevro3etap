<template>
	<section class="fear" id="belgilar">
		<img class="fear__bg" src="~/assets/images/v2/fear/fear-bg.webp" alt="" aria-hidden="true" loading="lazy" />

		<div class="nv-wrap fear__in">
			<!-- ── Headline -->
			<header class="fear__head">
				<span class="fear__alert"><NvIcon name="alert" :size="30" :stroke="2.4" /></span>
				<h2 class="fear__title">
					Asab tizimingiz berayotgan
					<span>signallarni e'tiborsiz qoldirmang!</span>
				</h2>
				<p class="fear__lead">
					Doimiy stress, asabiylik, uyqusizlik va ichki bezovtalik kundalik hayotingizga sezilarli ta'sir
					qilishi va vaqt o'tishi bilan kuchayib borishi mumkin.
				</p>
			</header>

			<!-- ── Hero photo + self-check cards -->
			<div class="fear__main">
				<div class="fear__hero">
					<img src="~/assets/images/v2/fear/fear-hero.webp" width="1200" height="1500" alt="Kuchli bosh og'rig'i va asabiy zo'riqishdan qiynalayotgan odam" loading="lazy" />
				</div>

				<div class="fear__check">
					<p class="fear__ask">Qaysi belgilar sizda bor? Mos kelganlarini belgilang 👇</p>

					<div class="fear__cards">
						<button
							v-for="(s, k) in signs"
							:key="s.img"
							type="button"
							class="fear-card"
							:class="{ 'is-on': picked.includes(k) }"
							:aria-pressed="picked.includes(k)"
							@click="toggle(k)"
						>
							<span class="fear-card__img">
								<img :src="fearImg(s.img)" width="800" height="600" alt="" loading="lazy" />
								<span class="fear-card__mark"><NvIcon name="check" :size="14" :stroke="3.2" /> Menda bor</span>
							</span>
							<span class="fear-card__tag">
								<span class="fear-card__ic"><NvIcon :name="s.icon" :size="16" :stroke="2.4" /></span>
								{{ s.title }}
							</span>
							<span class="fear-card__q">{{ s.q }}</span>
						</button>
					</div>

					<!-- live result for the self-check -->
					<div class="fear__score" :class="`is-${level}`" aria-live="polite">
						<div class="fear__meter" aria-hidden="true">
							<span :style="{ width: `${(picked.length / signs.length) * 100}%` }"></span>
						</div>
						<p class="fear__verdict">
							<b v-if="picked.length">{{ picked.length }} ta belgi.</b>
							{{ verdict }}
						</p>
						<button
							v-if="picked.length"
							type="button"
							id="fear-btn"
							data-meta="order-open"
							class="nv-btn fear__cta"
							@click="openOrder"
						>
							Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
						</button>
					</div>
				</div>
			</div>

			<!-- ── Warning ribbon -->
			<div class="fear__warn">
				<span class="fear__warn-ic"><NvIcon name="alert" :size="34" :stroke="2.2" /></span>
				<h3 class="fear__warn-title">Bu belgilarni shunchaki «charchoq» deb e'tiborsiz qoldirmang!</h3>
				<p class="fear__warn-text">
					Agar ular tez-tez takrorlansa, kuchaysa yoki kundalik hayotingizga xalaqit bersa, asab tizimi bilan
					bog'liq jiddiyroq muammolarga olib kelishi mumkin.
				</p>
			</div>

			<!-- ── Consequences chain -->
			<h3 class="fear__sub">Vaqtida e'tibor bermaslik nimalarga olib kelishi mumkin?</h3>
			<ol class="fear__chain">
				<li v-for="c in consequences" :key="c.img" class="fear-cons">
					<img :src="fearImg(c.img)" width="640" height="640" alt="" loading="lazy" />
					<span>{{ c.title }}</span>
				</li>
			</ol>

			<!-- ── Way out -->
			<div class="fear__fix">
				<img class="fear__fix-img" src="~/assets/images/v2/about-bottles.webp" width="1008" height="940" alt="Nevroslim siropi" loading="lazy" />

				<div class="fear__fix-copy">
					<p class="fear__fix-eyebrow">Yaxshi xabar: bunga e'tibor berish hali kech emas</p>
					<p class="fear__fix-brand">NEVROSLIM</p>
					<p class="fear__fix-sub">Asab tizimini qo'llab-quvvatlash uchun tabiiy komponentlar majmuasi</p>
					<ul class="fear__fix-feats">
						<li><span><NvIcon name="leaf" :size="22" /></span>Tabiiy tarkib</li>
						<li><span><NvIcon name="smile" :size="22" /></span>Xotirjamlik va tinchlik</li>
						<li><span><NvIcon name="moon" :size="22" /></span>Sifatli uyqu</li>
					</ul>
				</div>

				<div class="fear__fix-act">
					<ul class="fear__fix-checks">
						<li><NvIcon name="check" :size="18" :stroke="3" /> O'zingiz va yaqinlaringizning xotirjam hayoti uchun</li>
						<li><NvIcon name="check" :size="18" :stroke="3" /> Bugunoq g'amxo'rlik qiling!</li>
					</ul>
					<button type="button" id="fear-fix-btn" data-meta="order-open" class="nv-btn fear__fix-btn" @click="openOrder">
						Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
					</button>
					<p class="fear__fix-note">Ariza qoldiring — mutaxassisimiz siz bilan bog'lanadi.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const { open: openOrder } = useOrderModal();

const fearAssets = import.meta.glob('../assets/images/v2/fear/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const fearImg = (name: string) => fearAssets[`../assets/images/v2/fear/${name}.webp`];

const signs = [
	{ img: 'fear-card-irritable', icon: 'flame', title: 'Tez-tez asabiylashish', q: 'Arzimagan narsaga ham jahlingiz chiqib ketyaptimi?' },
	{ img: 'fear-card-anxiety', icon: 'brain', title: "Qo'rquv va bezovtalik hissi", q: "Sababsiz xavotir yoki vahima tez-tez paydo bo'lyaptimi?" },
	{ img: 'fear-card-sleep', icon: 'moon', title: "Uyqu bilan bog'liq muammolar", q: "Uxlash qiyinmi, ertalab esa charchab uyg'onyapsizmi?" },
	{ img: 'fear-card-focus', icon: 'help', title: 'Diqqat va xotira bilan qiyinchilik', q: 'Diqqatni jamlash yoki kerakli narsalarni eslab qolish qiyinlashyaptimi?' },
	{ img: 'fear-card-tension', icon: 'battery', title: "Doimiy ruhiy zo'riqish", q: "Dam olayotganda ham o'zingizni xotirjam his qila olmayapsizmi?" },
	{ img: 'fear-card-headache', icon: 'zap', title: "Bosh og'riqlari va taranglik", q: "Boshda og'irlik, taranglik va doimiy charchoq sezilyaptimi?" },
];

const consequences = [
	{ img: 'fear-cons-stress', title: 'Surunkali stress va tushkun kayfiyat' },
	{ img: 'fear-cons-insomnia', title: 'Doimiy uyqusizlik' },
	{ img: 'fear-cons-memory', title: 'Xotira va diqqatning pasayishi' },
	{ img: 'fear-cons-heart', title: 'Yurak-qon tomir tizimiga qo\'shimcha yuklama' },
	{ img: 'fear-cons-work', title: "Ish va o'qish sifatining pasayishi" },
];

const picked = ref<number[]>([]);

function toggle(k: number) {
	const i = picked.value.indexOf(k);
	if (i === -1) picked.value.push(k);
	else picked.value.splice(i, 1);
}

const level = computed(() => {
	const n = picked.value.length;
	if (n === 0) return 'none';
	if (n === 1) return 'low';
	if (n <= 3) return 'mid';
	return 'high';
});

const verdict = computed(() => ({
	none: 'Belgilarni tanlang — natijani ko\'rasiz.',
	low: "Hozircha kichik signal, lekin uni e'tiborsiz qoldirmang.",
	mid: "Asab tizimingiz yordam so'rayapti. Mutaxassis bilan maslahatlashing.",
	high: 'Bu jiddiy signal. Kechiktirmasdan mutaxassis maslahatini oling.',
}[level.value]));
</script>

<style scoped lang="scss">
$md: 768px;
$sm: 560px;

.fear {
	--f-bg: #0b1426;
	--f-card: #111d36;
	--f-line: rgba(120, 160, 255, 0.18);
	--f-red: #e8342c;
	--f-red-2: #ff5a47;
	--f-text: #eef3ff;
	--f-muted: #a9b8d6;

	position: relative;
	overflow: hidden;
	padding: 72px 0 64px;
	background: var(--f-bg);
	color: var(--f-text);

	&__bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.9;
		pointer-events: none;
	}

	&__in {
		position: relative;
	}

	// ── headline
	&__head {
		text-align: center;
		max-width: 860px;
		margin: 0 auto;
	}

	&__alert {
		display: inline-grid;
		place-items: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(232, 52, 44, 0.15);
		color: var(--f-red-2);
		box-shadow: 0 0 0 0 rgba(232, 52, 44, 0.5);
		animation: fear-pulse 2s ease-out infinite;
	}

	&__title {
		margin-top: 16px;
		font-family: var(--nv-font);
		font-weight: 800;
		font-size: clamp(26px, 3.6vw, 44px);
		line-height: 1.12;
		letter-spacing: -0.01em;
		text-transform: uppercase;
		color: #fff;

		span {
			display: block;
			color: var(--f-red-2);
			text-shadow: 0 0 24px rgba(232, 52, 44, 0.45);
		}
	}

	&__lead {
		margin: 14px auto 0;
		max-width: 62ch;
		font-size: clamp(15px, 1.5vw, 17px);
		line-height: 1.6;
		color: var(--f-muted);
	}

	// ── hero + cards
	&__main {
		display: grid;
		grid-template-columns: 0.8fr 1.6fr;
		gap: 28px;
		margin-top: 40px;
		align-items: start;
	}

	&__hero {
		position: sticky;
		top: 90px;
		border-radius: 22px;
		overflow: hidden;
		box-shadow: 0 0 0 1px var(--f-line), 0 30px 60px rgba(0, 0, 0, 0.45);

		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	&__ask {
		font-weight: 800;
		font-size: 17px;
		color: #fff;
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
		margin-top: 14px;
	}

	// ── self-check result
	&__score {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 10px 18px;
		margin-top: 16px;
		padding: 16px 18px;
		border-radius: 16px;
		background: rgba(17, 29, 54, 0.85);
		border: 1px solid var(--f-line);
		transition: border-color 0.25s, box-shadow 0.25s;

		&.is-mid,
		&.is-high {
			border-color: rgba(232, 52, 44, 0.6);
			box-shadow: 0 0 30px rgba(232, 52, 44, 0.18);
		}
	}

	&__meter {
		grid-column: 1 / -1;
		height: 8px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.08);
		overflow: hidden;

		span {
			display: block;
			height: 100%;
			border-radius: inherit;
			background: linear-gradient(90deg, #f5b942, var(--f-red));
			transition: width 0.3s ease;
		}
	}

	&__verdict {
		font-size: 15px;
		line-height: 1.5;
		color: var(--f-muted);

		b {
			color: #fff;
		}
	}

	&__cta {
		white-space: nowrap;
	}

	// ── warning ribbon
	&__warn {
		display: grid;
		grid-template-columns: auto 1fr 1.2fr;
		align-items: center;
		gap: 18px 24px;
		margin-top: 40px;
		padding: 22px 26px;
		border-radius: 18px;
		background: linear-gradient(90deg, rgba(232, 52, 44, 0.28), rgba(17, 29, 54, 0.9) 60%);
		border: 1px solid rgba(255, 90, 71, 0.55);
		box-shadow: 0 0 40px rgba(232, 52, 44, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.03);
	}

	&__warn-ic {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: #fff;
		color: var(--f-red);
	}

	&__warn-title {
		font-weight: 800;
		font-size: clamp(18px, 2vw, 22px);
		line-height: 1.25;
		text-transform: uppercase;
		color: #fff;
	}

	&__warn-text {
		padding-left: 22px;
		border-left: 1px solid rgba(255, 255, 255, 0.18);
		font-size: 15px;
		line-height: 1.55;
		color: var(--f-muted);
	}

	// ── consequences
	&__sub {
		margin-top: 44px;
		text-align: center;
		font-weight: 800;
		font-size: clamp(20px, 2.4vw, 26px);
		color: #fff;
	}

	&__chain {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 22px;
		margin-top: 20px;
		counter-reset: none;
	}

	// ── way out
	&__fix {
		display: grid;
		grid-template-columns: 0.85fr 1.2fr 1fr;
		align-items: center;
		gap: 24px;
		margin-top: 52px;
		padding: 28px 32px;
		border-radius: 26px;
		background:
			radial-gradient(80% 120% at 0% 100%, rgba(76, 175, 80, 0.35), rgba(76, 175, 80, 0) 60%),
			linear-gradient(135deg, #0f3d24, #0a2a18);
		border: 1px solid rgba(143, 214, 114, 0.35);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
	}

	&__fix-img {
		width: 100%;
		height: auto;
		filter: drop-shadow(0 20px 26px rgba(0, 0, 0, 0.45));
	}

	&__fix-eyebrow {
		font-size: 14px;
		font-weight: 700;
		color: #b9e6a8;
	}

	&__fix-brand {
		margin-top: 4px;
		font-weight: 800;
		font-size: clamp(34px, 4vw, 52px);
		line-height: 1;
		letter-spacing: 0.02em;
		background: linear-gradient(180deg, #ffe7a0, var(--nv-gold-2));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	&__fix-sub {
		margin-top: 8px;
		font-size: 15px;
		line-height: 1.5;
		color: #d8ecd0;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	&__fix-feats {
		display: flex;
		gap: 18px;
		margin-top: 18px;

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 8px;
			text-align: center;
			font-size: 13px;
			font-weight: 700;
			color: #fff;
			max-width: 96px;
		}

		span {
			display: grid;
			place-items: center;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: 2px solid var(--nv-gold-2);
			color: var(--nv-gold-1);
			background: rgba(0, 0, 0, 0.2);
		}
	}

	&__fix-checks {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 16px 18px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(143, 214, 114, 0.3);

		li {
			display: flex;
			align-items: flex-start;
			gap: 10px;
			font-weight: 700;
			font-size: 14px;
			line-height: 1.4;
			color: #fff;

			:deep(svg) {
				flex-shrink: 0;
				color: #8fd672;
			}
		}
	}

	&__fix-btn {
		width: 100%;
		margin-top: 16px;
	}

	&__fix-note {
		margin-top: 10px;
		text-align: center;
		font-size: 12.5px;
		color: #b9d7ad;
	}

	// ── responsive
	@media (max-width: 1100px) {
		&__main {
			grid-template-columns: 1fr;
		}

		&__hero {
			position: relative;
			top: 0;
			max-width: 520px;
			margin: 0 auto;
			width: 100%;

			img {
				aspect-ratio: 4 / 3;
				object-fit: cover;
				object-position: 50% 20%;
			}
		}

		&__warn {
			grid-template-columns: auto 1fr;
		}

		&__warn-text {
			grid-column: 1 / -1;
			padding-left: 0;
			border-left: 0;
		}

		&__chain {
			grid-template-columns: repeat(3, 1fr);
		}

		&__fix {
			grid-template-columns: 1fr 1fr;
		}

		&__fix-act {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: $md) {
		padding: 52px 0 48px;

		&__cards {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		&__score {
			grid-template-columns: 1fr;
		}

		&__cta {
			width: 100%;
		}

		&__chain {
			grid-template-columns: 1fr;
			gap: 10px;
		}

		&__fix {
			grid-template-columns: 1fr;
			padding: 24px 18px;
			text-align: center;
		}

		&__fix-img {
			max-width: 300px;
			margin: 0 auto;
		}

		&__fix-feats {
			justify-content: center;
		}
	}

	@media (max-width: $sm) {
		&__ask {
			font-size: 15px;
		}

		&__warn {
			padding: 18px;
			gap: 12px 14px;
		}

		&__warn-ic {
			width: 48px;
			height: 48px;
			border-radius: 12px;
		}
	}
}

// ── sign card (toggle)
.fear-card {
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: left;
	border-radius: 16px;
	overflow: hidden;
	background: var(--f-card);
	border: 1.5px solid var(--f-line);
	color: var(--f-text);
	cursor: pointer;
	transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-3px);
		border-color: rgba(255, 90, 71, 0.6);
	}

	&:focus-visible {
		outline: 3px solid var(--f-red-2);
		outline-offset: 2px;
	}

	&.is-on {
		border-color: var(--f-red-2);
		box-shadow: 0 0 0 3px rgba(232, 52, 44, 0.25), 0 12px 30px rgba(232, 52, 44, 0.25);
	}

	&__img {
		position: relative;
		display: block;

		img {
			display: block;
			width: 100%;
			height: auto;
			aspect-ratio: 4 / 3;
			object-fit: cover;
		}
	}

	&__mark {
		position: absolute;
		top: 8px;
		right: 8px;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 5px 9px 5px 7px;
		border-radius: 999px;
		background: var(--f-red);
		color: #fff;
		font-size: 11.5px;
		font-weight: 800;
		opacity: 0;
		transform: scale(0.85);
		transition: opacity 0.2s ease, transform 0.2s ease;

		.is-on & {
			opacity: 1;
			transform: none;
		}
	}

	&__tag {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		margin: -20px 10px 0;
		padding: 7px 12px 7px 7px;
		border-radius: 12px;
		background: linear-gradient(90deg, #b3201a, #7d1612);
		border: 1px solid rgba(255, 120, 100, 0.55);
		font-size: 12.5px;
		font-weight: 800;
		line-height: 1.2;
		text-transform: uppercase;
		color: #fff;
	}

	&__ic {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #fff;
		color: var(--f-red);
	}

	&__q {
		display: block;
		padding: 10px 12px 14px;
		font-size: 13.5px;
		line-height: 1.45;
		color: var(--f-muted);
	}

	@media (max-width: 560px) {
		&__tag {
			margin: -16px 6px 0;
			padding: 5px 8px 5px 5px;
			gap: 6px;
			font-size: 10.5px;
		}

		&__ic {
			width: 22px;
			height: 22px;

			:deep(svg) {
				width: 13px;
				height: 13px;
			}
		}

		&__q {
			padding: 8px 9px 11px;
			font-size: 12px;
		}

		&__mark {
			font-size: 10px;
			padding: 4px 7px 4px 5px;
		}
	}
}

// ── consequence item (arrows between on desktop)
.fear-cons {
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	overflow: hidden;
	background: var(--f-card);
	border: 1px solid rgba(255, 90, 71, 0.4);
	box-shadow: 0 0 24px rgba(232, 52, 44, 0.12);

	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
	}

	span {
		padding: 12px 12px 14px;
		font-size: 13.5px;
		font-weight: 800;
		line-height: 1.3;
		text-transform: uppercase;
		color: #fff;
	}

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 38%;
		right: -17px;
		width: 12px;
		height: 12px;
		border-top: 3px solid #f5b942;
		border-right: 3px solid #f5b942;
		transform: rotate(45deg);
	}

	@media (max-width: 1100px) {
		&::after {
			display: none;
		}
	}

	@media (max-width: 768px) {
		flex-direction: row;
		align-items: center;

		img {
			width: 84px;
			flex-shrink: 0;
		}

		span {
			padding: 10px 14px;
			font-size: 13px;
		}
	}
}

@keyframes fear-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(232, 52, 44, 0.5);
	}

	80%,
	100% {
		box-shadow: 0 0 0 18px rgba(232, 52, 44, 0);
	}
}

@media (prefers-reduced-motion: reduce) {
	.fear__alert {
		animation: none;
	}

	.fear-card {
		transition: none;
	}
}
</style>
