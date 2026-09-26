<template>
	<main class="nv">
		<!-- ═════ Hero ═════ -->
		<section class="hero" id="top">
			<img class="hero__bg" src="~/assets/images/v2/hero-bg.webp" alt="" aria-hidden="true" fetchpriority="high" />
			<img class="hero__leaf hero__leaf--l" src="~/assets/images/v2/leaves-left.webp" alt="" aria-hidden="true" />

			<div class="nv-wrap hero__in">
				<div class="hero__copy">
					<span class="hero__eyebrow">
						<NvIcon name="leaf" :size="16" /> Asab tizimi uchun
					</span>
					<h1 class="hero__title">
						Xotirjam hayot va sifatli uyqu sari <span>birinchi qadam!</span>
					</h1>
					<p class="hero__text">
						Nevroslim — asab tizimini qo'llab-quvvatlash, stressni kamaytirish va umumiy xotirjamlik
						uchun tabiiy komponentlar majmuasi.
					</p>

					<ul class="hero__feats">
						<li v-for="f in heroFeatures" :key="f.label">
							<span class="hero__feat-ic"><NvIcon :name="f.icon" :size="24" /></span>
							<span v-html="f.label"></span>
						</li>
					</ul>

					<div class="hero__actions">
						<button type="button" id="hero-btn" data-meta="order-open" class="nv-btn" @click="openOrder">
							Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
						</button>
					</div>
					<p class="hero__note">Ariza qoldiring — konsultantimiz siz bilan bog'lanadi.</p>
				</div>

				<div class="hero__visual">
					<img
						class="hero__decor"
						src="~/assets/images/v2/hero-decor-static.png"
						width="1327"
						height="1186"
						alt=""
						aria-hidden="true"
						fetchpriority="high"
					/>
					<img
						class="hero__side-bottle hero__side-bottle--left"
						src="~/assets/images/v2/hero-bottle-left.png"
						width="625"
						height="1097"
						alt=""
						aria-hidden="true"
						fetchpriority="high"
					/>
					<img
						class="hero__side-bottle hero__side-bottle--right"
						src="~/assets/images/v2/hero-bottle-right.png"
						width="639"
						height="1095"
						alt=""
						aria-hidden="true"
						fetchpriority="high"
					/>
					<img
						class="hero__bottle"
						src="~/assets/images/v2/hero-bottle.webp"
						width="1024"
						height="1536"
						alt="Nevroslim siropi, 200 ml"
						fetchpriority="high"
					/>
					<img class="hero__badge" src="~/assets/images/v2/badge-100.webp" width="331" height="357" alt="100% tabiiy komponentlar" />

					<ul class="hero__chips" aria-label="Nevroslim yordam beradigan holatlar">
						<li v-for="c in heroChips" :key="c.label">
							<span><NvIcon :name="c.icon" :size="16" /></span>{{ c.label }}
						</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- ═════ Warning / self-check block ═════ -->
		<FearBlock />

		<!-- ═════ About ═════ -->
		<section class="about" id="mahsulot">
			<img class="about__leaf" src="~/assets/images/v2/leaves-corner.webp" alt="" aria-hidden="true" loading="lazy" />
			<div class="nv-wrap about__in">
				<div class="about__col">
					<h2 class="nv-title about__title">Nevroslim nima?</h2>
					<p class="about__text">
						Nevroslim — asabiylik, stress, vahima va qo'rquv hissi, ruhiy zo'riqish hamda nevrozga xos
						bezovtalik holatlarida umumiy xotirjamlikni qo'llab-quvvatlashga mo'ljallangan tabiiy o'simlik
						komponentlari asosidagi sirop.
					</p>
					<ul class="about__icons">
						<li v-for="a in aboutIcons" :key="a.label">
							<span><NvIcon :name="a.icon" :size="26" /></span>
							<b v-html="a.label"></b>
						</li>
					</ul>
				</div>

				<div class="about__product">
					<img src="~/assets/images/v2/about-bottles.webp" width="1299" height="1211" alt="Nevroslim siropi" loading="lazy" />
				</div>
			</div>
		</section>

		<!-- ═════ Ingredients ═════ -->
		<section class="ing" id="tarkibi">
			<div class="nv-wrap">
				<figure class="ing__poster">
					<img
						src="~/assets/images/v2/ingredients-poster.webp"
						width="1122"
						height="1402"
						alt="Nevroslimning tarkibi: ginkgo biloba, amarant, yalpiz, do'lana, valeriana"
						loading="lazy"
					/>
				</figure>

				<h2 class="nv-title">Mahsulot tarkibidagi «ekstrakt»larning tabiiy xususiyatlari</h2>
				<p class="nv-sub">Tabiatning eng yaxshi ne’matlari</p>

				<div class="ing__grid">
					<article v-for="(i, k) in ingredients" :key="i.img" class="ing__card" :style="{ '--i': k }">
						<div class="ing__img">
							<img :src="img(i.img)" :alt="i.name" loading="lazy" />
						</div>
						<h3>{{ i.name }}</h3>
						<p>{{ i.text }}</p>
					</article>
				</div>

				<div class="nv-center">
					<button type="button" id="ing-btn" data-meta="order-open" class="nv-btn" @click="openOrder">
						Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
					</button>
				</div>
			</div>
		</section>

		<!-- ═════ Reviews ═════ -->
		<section class="rev" id="fikrlar">
			<div class="nv-wrap">
				<div class="rev__head">
					<div>
						<h2 class="nv-title rev__title">Mijozlarimiz fikrlari</h2>
						<p class="rev__sub">Haqiqiy odamlar, haqiqiy natijalar. Nevroslimni tanlagan mijozlarimizning video fikrlari.</p>
					</div>
					<a href="https://www.instagram.com/nevroslim.uz/" target="_blank" rel="noopener" data-meta="contact-instagram" class="nv-btn nv-btn--green nv-btn--sm">
						Barcha fikrlarni ko'rish <NvIcon name="arrow" :size="16" :stroke="2.5" />
					</a>
				</div>

				<div class="rev__row">
					<a
						v-for="(v, n) in videos"
						:key="v"
						class="rev__card"
						data-fancybox="reviews"
						:href="`https://www.youtube.com/watch?v=${v}`"
						:aria-label="`Mijoz fikri ${n + 1}`"
					>
						<img :src="`https://i.ytimg.com/vi/${v}/oardefault.jpg`" alt="" loading="lazy" width="270" height="480" />
						<span class="rev__play"><NvIcon name="play" :size="26" /></span>
					</a>
				</div>
			</div>
		</section>

		<!-- ═════ How to order ═════ -->
		<section class="steps" id="buyurtma">
			<div class="nv-wrap">
				<h2 class="nv-title">Buyurtma berish uchun:</h2>
				<p class="nv-sub">Nevroslimni olish uchun atigi 3 ta qadam yetarli.</p>

				<ol class="steps__row">
					<li v-for="(s, n) in steps" :key="s.title" class="steps__card">
						<span class="steps__ic"><NvIcon :name="s.icon" :size="28" /></span>
						<div>
							<em>0{{ n + 1 }}</em>
							<h3>{{ s.title }}</h3>
							<p>{{ s.text }}</p>
						</div>
					</li>
				</ol>
			</div>
		</section>

		<!-- ═════ Final CTA (form opens full screen) ═════ -->
		<section class="final">
			<img class="final__bg" src="~/assets/images/v2/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" />
			<div class="nv-wrap final__in">
				<img class="final__man" src="~/assets/images/v2/cta-man.webp" width="621" height="394" alt="" aria-hidden="true" loading="lazy" />
				<div class="final__copy">
					<h2 class="final__title">Xotirjam hayot <span>hozir boshlanadi!</span></h2>
					<p>Nevroslim — tabiiy komponentlar yordamida sizning kundalik xotirjamligingizni qo'llab-quvvatlaydi.</p>
					<ul>
						<li><NvIcon name="check" :size="18" :stroke="3" /> Mutaxassis maslahati</li>
						<li><NvIcon name="check" :size="18" :stroke="3" /> O'zbekiston bo'ylab yetkazib berish</li>
						<li><NvIcon name="check" :size="18" :stroke="3" /> Original mahsulot</li>
					</ul>
					<button type="button" id="final-btn" data-meta="order-open" class="nv-btn final__btn" @click="openOrder">
						Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
					</button>
				</div>
			</div>
		</section>
	</main>
</template>

<script lang="ts" setup>
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

useHead({
	title: 'Nevroslim — asab tizimi uchun tabiiy sirop',
	htmlAttrs: { lang: 'uz' },
	meta: [
		{ name: 'description', content: "Nevroslim — asab tizimini qo'llab-quvvatlash, stressni kamaytirish va sifatli uyqu uchun 15 xil tabiiy ekstraktli sirop. Mutaxassis maslahatini oling." },
	],
	link: [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=Manrope:wght@500;600;700;800&display=swap' },
	],
});

// All v2 assets are resolved through Vite so they get hashed URLs.
const assets = import.meta.glob('../assets/images/v2/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const img = (name: string) => assets[`../assets/images/v2/${name}.webp`];

const heroFeatures = [
	{ icon: 'leaf', label: 'Tabiiy<br>komponentlar' },
	{ icon: 'shield', label: 'Asab tizimini<br>mustahkamlash' },
	{ icon: 'brain', label: 'Stressni<br>kamaytirish' },
	{ icon: 'moon', label: 'Sifatli uyquni<br>qo\'llab-quvvatlash' },
];

const heroChips = [
	{ icon: 'frown', label: "Qo'rquv" },
	{ icon: 'alert', label: 'Vahima' },
	{ icon: 'zap', label: 'Stress' },
	{ icon: 'flame', label: 'Asabiylik' },
	{ icon: 'activity', label: "Bosh og'rig'i" },
	{ icon: 'brain', label: 'Xotira zaifligi' },
	{ icon: 'moon', label: 'Uyqusizlik' },
];

const aboutIcons = [
	{ icon: 'leaf', label: 'Tabiiy<br>komponentlar' },
	{ icon: 'shield', label: "Organizmni<br>qo'llab-quvvatlash" },
	{ icon: 'pill', label: 'Qulay<br>qabul qilish' },
	{ icon: 'heart', label: 'Kundalik<br>xotirjamlik' },
];

const ingredients = [
	{ img: 'ing-ginkgo', name: 'Ginkgo Biloba', text: "Miya qon aylanishi va diqqatni qo'llab-quvvatlaydi" },
	{ img: 'ing-amarant', name: 'Amarant', text: 'Organizmni foydali moddalar bilan boyitadi' },
	{ img: 'ing-steviya', name: 'Steviya', text: "Tabiiy shirinlik beruvchi o'simlik" },
	{ img: 'ing-dolana', name: "Do'lana mevalari va guli", text: "Yurak va asab tizimini qo'llab-quvvatlaydi" },
	{ img: 'ing-valeriana', name: 'Valeriana', text: 'Xotirjamlik va sokin uyquga yordam beradi' },
	{ img: 'ing-limon-ot', name: "Limon o't", text: 'Asabiy taranglikni yumshatishga yordam beradi' },
	{ img: 'ing-tograyhon', name: "Tog'rayhon", text: 'Tinchlantiruvchi xususiyatga ega' },
	{ img: 'ing-qora-andiz', name: 'Qora andiz', text: "Umumiy tetiklikni qo'llab-quvvatlaydi" },
	{ img: 'ing-dolchin', name: 'Dolchin', text: 'Organizmga quvvat va iliqlik beradi' },
	{ img: 'ing-arslonquyruq', name: 'Arslonquyruq', text: 'Asabni tinchlantirishga yordam beradi' },
	{ img: 'ing-zanjabil', name: 'Zanjabil', text: "Immunitet va ichki muvozanatni qo'llab-quvvatlaydi" },
	{ img: 'ing-nard', name: 'Nard', text: "Tinchlantiruvchi xushbo'y ildiz" },
	{ img: 'ing-yalpiz', name: 'Yalpiz', text: 'Tetiklik va yengillik baxsh etadi' },
	{ img: 'ing-propolis', name: 'Propolis', text: "Organizm himoyasini qo'llab-quvvatlaydi" },
	{ img: 'ing-mumiyo', name: 'Mumiyo', text: 'Ichki quvvatni tiklashga yordam beradi' },
];

// YouTube Shorts ids of real customer reviews
const videos = ['_tZkM6ZkBJY', 'JG9eIsaMxtE', 'n1kFxCCc_Ls', '2efcDJVr3uE'];

const steps = [
	{ icon: 'clipboard', title: 'Ariza qoldiring', text: 'Ismingiz va telefon raqamingizni qoldiring.' },
	{ icon: 'phone', title: 'Konsultatsiya oling', text: "Mutaxassisimiz siz bilan bog'lanib, savollaringizga javob beradi." },
	{ icon: 'truck', title: 'Yetkazib berishni kuting', text: 'Manzilingizni tasdiqlang va mahsulotni qulay usulda qabul qiling.' },
];

const { open: openOrder } = useOrderModal();

onMounted(() => {
	Fancybox.bind('[data-fancybox]', {});
});

onBeforeUnmount(() => {
	Fancybox.unbind('[data-fancybox]');
});
</script>

<style scoped lang="scss">
$lg: 1024px;
$md: 768px;
$sm: 560px;

.nv {
	overflow-x: clip;
}

.nv-center {
	display: flex;
	justify-content: center;
	margin-top: 32px;
}

section {
	position: relative;
}

// ───────── Hero
.hero {
	overflow: hidden;
	padding: 40px 0 56px;
	background: #eaf5e2;

	&__bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.9;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		background: linear-gradient(90deg, rgba(246, 251, 242, 0.97) 0%, rgba(246, 251, 242, 0.9) 38%, rgba(246, 251, 242, 0.25) 62%, rgba(246, 251, 242, 0) 100%);
	}

	&__leaf {
		position: absolute;
		z-index: 2;
		top: 0;
		width: 110px;
		opacity: 0.95;
		pointer-events: none;

		&--l {
			left: -18px;
		}
	}

	&__in {
		position: relative;
		z-index: 3;
		display: grid;
		grid-template-columns: 1fr 1.05fr;
		gap: 24px;
		align-items: center;
	}

	&__eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-radius: 999px;
		background: var(--nv-green-600);
		color: #fff;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	&__title {
		margin-top: 18px;
		font-family: var(--nv-serif);
		font-weight: 700;
		font-size: clamp(34px, 4.6vw, 58px);
		line-height: 1.08;
		letter-spacing: -0.015em;
		color: var(--nv-green-900);

		span {
			color: var(--nv-green-500);
		}
	}

	&__text {
		margin-top: 16px;
		max-width: 46ch;
		font-size: clamp(15px, 1.4vw, 17px);
		line-height: 1.6;
		color: var(--nv-muted);
	}

	&__feats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		margin-top: 24px;
		max-width: 540px;

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 8px;
			text-align: center;
			font-size: 12.5px;
			font-weight: 700;
			line-height: 1.3;
			color: var(--nv-green-800);
		}
	}

	&__feat-ic {
		display: grid;
		place-items: center;
		width: 54px;
		height: 54px;
		border-radius: 50%;
		background: linear-gradient(180deg, var(--nv-green-500), var(--nv-green-700));
		color: #fff;
		box-shadow: 0 6px 16px rgba(22, 98, 58, 0.28);
	}

	&__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 16px;
		margin-top: 28px;
	}

	&__note {
		margin-top: 12px;
		font-size: 13px;
		color: var(--nv-muted);
	}

	// visual
	&__visual {
		position: relative;
		isolation: isolate;
		min-height: 520px;
	}

	&__decor {
		position: absolute;
		z-index: 1;
		left: -4%;
		bottom: 0;
		width: 80%;
		max-width: 520px;
		height: auto;
		filter: drop-shadow(0 18px 24px rgba(11, 61, 34, 0.24));
		pointer-events: none;
	}

	&__side-bottle {
		position: absolute;
		z-index: 2;
		bottom: 7%;
		width: 34%;
		max-width: 220px;
		height: auto;
		will-change: transform;
		pointer-events: none;

		&--left {
			left: 5%;
			transform-origin: 50% 92%;
			animation: nv-side-bottle-left 3.1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
		}

		&--right {
			left: 35%;
			transform-origin: 50% 92%;
			animation: nv-side-bottle-right 3.35s cubic-bezier(0.45, 0, 0.55, 1) -0.9s infinite;
		}
	}

	&__bottle {
		position: absolute;
		z-index: 3;
		left: 8%;
		bottom: -2%;
		width: 55%;
		max-width: 355px;
		height: auto;
		filter: drop-shadow(0 24px 28px rgba(11, 61, 34, 0.3));
		will-change: transform;
		animation: nv-product-float 5.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
		pointer-events: none;
	}

	&__badge {
		position: absolute;
		z-index: 4;
		top: 0;
		left: 2%;
		width: 118px;
		height: auto;
		filter: drop-shadow(0 8px 14px rgba(120, 80, 0, 0.3));
		transform: rotate(-4deg);
	}

	&__chips {
		position: absolute;
		z-index: 5;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 10px;

		li {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 7px 16px 7px 7px;
			border-radius: 999px;
			background: rgba(11, 61, 34, 0.78);
			backdrop-filter: blur(6px);
			-webkit-backdrop-filter: blur(6px);
			color: #fff;
			font-size: 13px;
			font-weight: 700;
			white-space: nowrap;
		}

		span {
			display: grid;
			place-items: center;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			background: var(--nv-green-500);
		}
	}

	@media (max-width: $lg) {
		padding: 28px 0 40px;

		&::before {
			background: linear-gradient(180deg, rgba(246, 251, 242, 0.96) 0%, rgba(246, 251, 242, 0.85) 55%, rgba(246, 251, 242, 0.55) 100%);
		}

		&__in {
			grid-template-columns: 1fr;
		}

		&__copy {
			display: contents;
		}

		&__eyebrow {
			order: 1;
			justify-self: start;
		}

		&__title {
			order: 2;
			margin-top: 0;
		}

		&__text {
			order: 3;
			margin-top: 0;
		}

		&__visual {
			order: 4;
			min-height: 0;
			aspect-ratio: 1.1;
			width: 100%;
			max-width: 560px;
			margin: 0 auto;
		}

		// Product art reaches the chip column. Decor + bottle only line up in the
		// desktop proportion (bottle = 0.6875 × decor width, offset 0.15), so both
		// scale from one --nv-art width chosen so the bottle's right edge stops
		// 4px before the chips; the decor's stump then tucks under them.
		--nv-chips: 144px;
		--nv-art: calc((104% - var(--nv-chips) - 4px) / 0.8375);

		&__decor {
			left: -4%;
			width: var(--nv-art);
			max-width: none;
		}

		&__side-bottle {
			width: 34%;
			max-width: 220px;
		}

		&__side-bottle--left {
			left: 5%;
		}

		&__side-bottle--right {
			left: 35%;
		}

		&__bottle {
			left: calc(-4% + var(--nv-art) * 0.15);
			bottom: -2%;
			width: calc(var(--nv-art) * 0.6875);
			max-width: none;
		}

		&__actions {
			order: 5;
			margin-top: 0;
		}

		&__note {
			order: 6;
			margin-top: -12px;
		}

		&__feats {
			order: 7;
			margin-top: 4px;
			max-width: none;
		}

		&__leaf {
			display: none;
		}
	}

	@media (max-width: $sm) {
		&__title {
			font-size: 32px;
		}

		&__visual {
			aspect-ratio: 1.12;
		}

		--nv-chips: 110px;

		&__badge {
			width: 78px;
		}

		&__chips {
			gap: 6px;

			li {
				padding: 4px 9px 4px 4px;
				font-size: 11px;
				gap: 5px;
			}

			span {
				width: 22px;
				height: 22px;

				:deep(svg) {
					width: 13px;
					height: 13px;
				}
			}
		}

		&__actions {
			flex-direction: column;
			align-items: stretch;

			.nv-btn {
				width: 100%;
			}
		}

		&__feats {
			grid-template-columns: repeat(2, 1fr);
			gap: 14px 10px;

			li {
				flex-direction: row;
				text-align: left;
			}
		}

		&__feat-ic {
			width: 44px;
			height: 44px;
		}
	}
}

@keyframes nv-product-float {
	0%,
	100% {
		transform: translate3d(0, 0, 0);
	}

	50% {
		transform: translate3d(0, -10px, 0);
	}
}

@keyframes nv-side-bottle-left {
	0%,
	100% {
		transform: rotate(-0.55deg);
	}

	50% {
		transform: rotate(0.75deg);
	}
}

@keyframes nv-side-bottle-right {
	0%,
	100% {
		transform: rotate(0.55deg);
	}

	50% {
		transform: rotate(-0.75deg);
	}
}

@media (prefers-reduced-motion: reduce) {
	.hero__bottle,
	.hero__side-bottle {
		animation: none;
		transform: none;
	}
}

@media (max-width: 380px) {
	.hero__visual {
		aspect-ratio: 1.15;
	}

	.hero__title {
		font-size: 29px;
	}
}

// ───────── About
.about {
	padding: 72px 0;
	background: linear-gradient(180deg, var(--nv-green-50), #fff);
	overflow: hidden;

	&__leaf {
		position: absolute;
		right: -30px;
		top: -20px;
		width: 180px;
		opacity: 0.9;
		pointer-events: none;
	}

	&__in {
		position: relative;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 48px;
		align-items: center;
	}

	&__title {
		text-align: left;
		font-size: clamp(28px, 3vw, 38px);
	}

	&__text {
		margin-top: 14px;
		color: var(--nv-muted);
		line-height: 1.65;
	}

	&__icons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		margin-top: 24px;

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 8px;
			text-align: center;
		}

		span {
			display: grid;
			place-items: center;
			width: 56px;
			height: 56px;
			border-radius: 50%;
			background: var(--nv-green-100);
			color: var(--nv-green-600);
		}

		b {
			font-size: 12px;
			line-height: 1.3;
			color: var(--nv-green-800);
		}
	}

	&__product img {
		display: block;
		width: 100%;
		height: auto;
		filter: drop-shadow(0 22px 26px rgba(11, 61, 34, 0.25));
	}

	@media (max-width: $lg) {
		&__in {
			grid-template-columns: 1fr;
		}

		&__product {
			order: -1;
			max-width: 420px;
			margin: 0 auto;
		}

		&__title {
			text-align: center;
		}

		&__text {
			text-align: center;
		}
	}

	@media (max-width: $sm) {
		padding: 48px 0;

		&__icons {
			grid-template-columns: repeat(2, 1fr);
			gap: 16px;
		}

		&__leaf {
			display: none;
		}
	}
}

// ───────── Ingredients
.ing {
	padding: 72px 0;
	background: url('~/assets/images/v2/section-bg.webp') center / cover no-repeat, #f1f8ec;

	&__poster {
		max-width: 560px;
		margin: 0 auto 40px;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 18px 44px rgba(11, 61, 34, 0.18);

		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	&__grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 16px;
		margin-top: 32px;
	}

	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 14px 10px 16px;
		border-radius: 16px;
		background: #fff;
		box-shadow: 0 6px 18px rgba(18, 74, 40, 0.07);
		text-align: center;
		transition: transform 0.2s ease, box-shadow 0.2s ease;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 14px 28px rgba(18, 74, 40, 0.13);
		}

		h3 {
			margin-top: 10px;
			font-size: 14px;
			font-weight: 800;
			line-height: 1.25;
			color: var(--nv-green-800);
		}

		p {
			margin-top: 4px;
			font-size: 11.5px;
			line-height: 1.4;
			color: var(--nv-muted);
		}
	}

	&__img {
		display: grid;
		place-items: center;
		width: 100%;
		aspect-ratio: 1;

		img {
			max-width: 88%;
			max-height: 88%;
			object-fit: contain;
			// gentle idle float; --i staggers each card so they don't move in sync
			animation: nv-herb-float 4.6s ease-in-out infinite;
			animation-delay: calc(var(--i, 0) * -0.37s);
		}
	}

	@media (max-width: 860px) {
		&__grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: $sm) {
		padding: 48px 0;

		&__poster {
			margin-bottom: 28px;
			border-radius: 18px;
		}

		&__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		&__card {
			padding: 12px 10px 14px;

			h3 {
				font-size: 14px;
			}

			p {
				font-size: 12px;
			}

			// 15 cards in 2 columns: centre the last one
			&:last-child:nth-child(odd) {
				grid-column: 1 / -1;
				justify-self: center;
				width: calc(50% - 5px);
			}
		}

		&__img {
			width: 78%;
		}
	}
}

@keyframes nv-herb-float {
	0%,
	100% {
		transform: translateY(0) rotate(-2deg);
	}

	50% {
		transform: translateY(-7px) rotate(2deg);
	}
}

@media (prefers-reduced-motion: reduce) {
	.ing__img img {
		animation: none;
	}
}

// ───────── Reviews
.rev {
	padding: 72px 0;
	background: #fff;

	&__head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 16px 24px;
		flex-wrap: wrap;
	}

	&__title {
		text-align: left;
	}

	&__sub {
		margin-top: 8px;
		color: var(--nv-muted);
		font-size: 15px;
	}

	&__row {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: calc((100% - 3 * 20px) / 4);
		gap: 20px;
		margin-top: 28px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: 6px;
		scrollbar-width: thin;
	}

	&__card {
		position: relative;
		display: block;
		aspect-ratio: 9 / 16;
		border-radius: 18px;
		overflow: hidden;
		background: var(--nv-green-900);
		scroll-snap-align: start;
		box-shadow: var(--nv-shadow);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s ease;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.45));
		}

		&:hover img {
			transform: scale(1.04);
		}
	}

	&__play {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 1;
		display: grid;
		place-items: center;
		width: 60px;
		height: 60px;
		margin: -30px 0 0 -30px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.92);
		color: var(--nv-green-600);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
		padding-left: 3px;
	}

	@media (max-width: $lg) {
		&__row {
			grid-auto-columns: 38%;
		}
	}

	@media (max-width: $sm) {
		padding: 48px 0;

		&__row {
			grid-auto-columns: 62%;
		}
	}
}

// ───────── Steps
.steps {
	padding: 72px 0;
	background: linear-gradient(180deg, var(--nv-green-50), #eaf5e2);

	&__row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 32px;
		counter-reset: none;
	}

	&__card {
		position: relative;
		display: flex;
		gap: 16px;
		padding: 22px;
		border-radius: 20px;
		background: #fff;
		border: 1px solid var(--nv-line);

		em {
			font-style: normal;
			font-family: var(--nv-serif);
			font-weight: 700;
			font-size: 20px;
			color: var(--nv-green-500);
		}

		h3 {
			margin-top: 2px;
			font-size: 17px;
			font-weight: 800;
			color: var(--nv-green-800);
		}

		p {
			margin-top: 6px;
			font-size: 14px;
			line-height: 1.5;
			color: var(--nv-muted);
		}

		&:not(:last-child)::after {
			content: '';
			position: absolute;
			right: -17px;
			top: 50%;
			z-index: 1;
			width: 14px;
			height: 14px;
			border-top: 3px solid var(--nv-green-500);
			border-right: 3px solid var(--nv-green-500);
			transform: translateY(-50%) rotate(45deg);
		}
	}

	&__ic {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(180deg, var(--nv-green-500), var(--nv-green-700));
		color: #fff;
	}

	@media (max-width: $md) {
		padding: 48px 0;

		&__row {
			grid-template-columns: 1fr;
			gap: 14px;
		}

		&__card:not(:last-child)::after {
			display: none;
		}
	}
}

// ───────── Final CTA
.final {
	overflow: hidden;
	padding: 64px 0;
	background: #dff0d4;

	&__bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__in {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		align-items: center;
	}

	&__man {
		align-self: end;
		width: 100%;
		height: auto;
		margin-bottom: -64px;
		// the cutout is a photo crop — fade its hard side/top edges into the leaves
		-webkit-mask-image: linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%), linear-gradient(0deg, #000 70%, transparent 100%);
		-webkit-mask-composite: source-in;
		mask-image: linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%), linear-gradient(0deg, #000 70%, transparent 100%);
		mask-composite: intersect;
	}

	&__title {
		font-family: var(--nv-serif);
		font-weight: 700;
		font-size: clamp(30px, 3.4vw, 44px);
		line-height: 1.1;
		color: var(--nv-green-900);

		span {
			display: block;
			color: var(--nv-green-500);
		}
	}

	&__copy {
		> p {
			margin-top: 14px;
			line-height: 1.6;
			color: var(--nv-muted);
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
			margin-top: 18px;

			li {
				display: flex;
				align-items: center;
				gap: 10px;
				font-weight: 700;
				color: var(--nv-green-800);

				:deep(svg) {
					color: var(--nv-green-500);
				}
			}
		}
	}

	&__btn {
		margin-top: 26px;
		min-width: 280px;
	}

	@media (max-width: 1100px) {
		&__in {
			grid-template-columns: 1fr;
			max-width: 560px;
		}

		&__man {
			display: none;
		}
	}

	@media (max-width: $md) {
		padding: 48px 0;

		&__in {
			grid-template-columns: 1fr;
		}

		&__copy {
			text-align: center;

			ul {
				align-items: center;
			}
		}

		&__btn {
			width: 100%;
			min-width: 0;
		}
	}
}
</style>
