<template>
	<section class="fear" id="belgilar">
		<div class="nv-wrap">
			<header class="fear__head">
				<span class="fear__eyebrow"><NvIcon name="alert" :size="16" :stroke="2.4" /> Огоҳлантириш</span>
				<h2 class="fear__title">
					Бугунги кичик белгилар —
					<span>эртанги жиддий муаммо</span>
				</h2>
				<p class="fear__lead">
					Асаб тизимидаги зўриқиш бирдан пайдо бўлмайди. У кичик белгилардан бошланади ва эътиборсиз қолса,
					вақт ўтиши билан жиддий муаммоларга айланиши мумкин.
				</p>
			</header>

			<!-- today -> tomorrow -->
			<div class="fear-row fear-row--now">
				<p class="fear-row__label">Бугун: сезилаётган белгилар</p>
				<ul class="fear-row__grid">
					<li v-for="s in signs" :key="s.img" class="fear-tile">
						<img :src="fearImg(s.img)" width="800" height="600" alt="" loading="lazy" />
						<span>{{ s.title }}</span>
					</li>
				</ul>
			</div>

			<div class="fear__arrow" aria-hidden="true">
				<span class="fear__arrow-ic"><NvIcon name="arrow" :size="24" :stroke="2.6" /></span>
				<span class="fear__arrow-txt">Эътиборсиз қолса…</span>
			</div>

			<div class="fear-row fear-row--later">
				<p class="fear-row__label">Эртага: жиддий оқибатлар</p>
				<ul class="fear-row__grid">
					<li v-for="c in consequences" :key="c.img" class="fear-tile">
						<img :src="fearImg(c.img)" width="640" height="640" alt="" loading="lazy" />
						<span>{{ c.title }}</span>
					</li>
				</ul>
			</div>

			<div class="fear__cta">
				<p>
					<b>Олдини олиш — кейин даволашдан анча осон.</b>
					Белгилар кучаймасидан олдин мутахассис маслаҳатини олинг.
				</p>
				<button type="button" id="fear-btn" data-meta="order-open" class="nv-btn" @click="openOrder">
					Маслаҳат олиш <NvIcon name="arrow" :size="18" :stroke="2.5" />
				</button>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const { open: openOrder } = useOrderModal();

const fearAssets = import.meta.glob('../assets/images/v2/fear/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const fearImg = (name: string) => fearAssets[`../assets/images/v2/fear/${name}.webp`];

const signs = [
	{ img: 'fear-card-irritable', title: 'Тез-тез асабийлашиш' },
	{ img: 'fear-card-anxiety', title: "Сабабсиз хавотир ва қўрқув" },
	{ img: 'fear-card-sleep', title: 'Уйқусизлик' },
	{ img: 'fear-card-focus', title: 'Диққат ва хотира сусайиши' },
	{ img: 'fear-card-tension', title: "Доимий руҳий зўриқиш" },
	{ img: 'fear-card-headache', title: "Бош оғриғи ва таранглик" },
];

const consequences = [
	{ img: 'fear-cons-stress', title: 'Сурункали стресс ва тушкунлик' },
	{ img: 'fear-cons-insomnia', title: 'Доимий уйқусизлик' },
	{ img: 'fear-cons-memory', title: 'Хотира ва диққатнинг пасайиши' },
	{ img: 'fear-cons-heart', title: 'Юрак-қон томир тизимига юклама' },
	{ img: 'fear-cons-work', title: 'Иш ва ҳаёт сифатининг пасайиши' },
];
</script>

<style scoped lang="scss">
$md: 768px;
$sm: 560px;

// Site palette; red is only the "tomorrow" accent.
.fear {
	--f-red: #d63a2f;
	--f-red-soft: #fdecea;
	--f-amber: #c27a0e;
	--f-amber-soft: #fff5e1;

	padding: 64px 0;
	background: linear-gradient(180deg, #fff 0%, var(--nv-green-50) 100%);

	&__head {
		text-align: center;
		max-width: 780px;
		margin: 0 auto;
	}

	&__eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 14px;
		border-radius: 999px;
		background: var(--f-red-soft);
		color: var(--f-red);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	&__title {
		margin-top: 14px;
		font-family: var(--nv-serif);
		font-weight: 700;
		font-size: clamp(28px, 3.6vw, 44px);
		line-height: 1.15;
		color: var(--nv-green-900);

		span {
			display: block;
			color: var(--f-red);
		}
	}

	&__lead {
		margin: 14px auto 0;
		max-width: 60ch;
		font-size: clamp(15px, 1.5vw, 17px);
		line-height: 1.6;
		color: var(--nv-muted);
	}

	&__arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin: 18px 0;
	}

	&__arrow-ic {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--nv-gold-2), var(--f-red));
		color: #fff;
		box-shadow: 0 10px 22px rgba(214, 58, 47, 0.3);
		transform: rotate(90deg);
	}

	&__arrow-txt {
		font-size: 15px;
		font-weight: 800;
		color: var(--f-red);
	}

	&__cta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px 28px;
		margin-top: 32px;
		padding: 20px 26px;
		border-radius: 20px;
		background: linear-gradient(135deg, var(--nv-green-700), var(--nv-green-900));
		box-shadow: 0 18px 40px rgba(11, 61, 34, 0.22);
		color: #d9eed0;
		font-size: 15px;
		line-height: 1.5;

		b {
			display: block;
			font-family: var(--nv-serif);
			font-size: clamp(18px, 2vw, 22px);
			color: #fff;
		}

		.nv-btn {
			flex-shrink: 0;
		}
	}

	@media (max-width: $md) {
		padding: 48px 0;

		&__cta {
			flex-direction: column;
			text-align: center;

			.nv-btn {
				width: 100%;
			}
		}
	}
}

// ── today / tomorrow rows of photo tiles (same idea as the ingredient cards)
.fear-row {
	margin-top: 32px;

	&__label {
		display: table;
		margin: 0 auto 14px;
		padding: 7px 16px;
		border-radius: 999px;
		font-size: 15px;
		font-weight: 800;
	}

	&__grid {
		display: grid;
		gap: 14px;
	}

	&--now {
		.fear-row__label {
			background: var(--f-amber-soft);
			color: var(--f-amber);
		}

		.fear-row__grid {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	&--later {
		margin-top: 0;

		.fear-row__label {
			background: var(--f-red-soft);
			color: var(--f-red);
		}

		.fear-row__grid {
			grid-template-columns: repeat(5, 1fr);
		}

		.fear-tile {
			border-color: rgba(214, 58, 47, 0.35);
			box-shadow: 0 10px 24px rgba(214, 58, 47, 0.1);

			span {
				color: #8f2019;
			}
		}
	}

	@media (max-width: 1024px) {
		&--now .fear-row__grid {
			grid-template-columns: repeat(3, 1fr);
		}

		&--later .fear-row__grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: $sm) {
		&--now .fear-row__grid,
		&--later .fear-row__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		// 5 tiles in 2 columns: centre the last one
		&--later .fear-tile:last-child {
			grid-column: 1 / -1;
			justify-self: center;
			width: calc(50% - 5px);
		}
	}
}

.fear-tile {
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	overflow: hidden;
	background: #fff;
	border: 1.5px solid var(--nv-line);
	box-shadow: 0 6px 18px rgba(18, 74, 40, 0.07);

	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
	}

	span {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 8px 12px;
		text-align: center;
		font-size: 14px;
		font-weight: 800;
		line-height: 1.3;
		color: var(--nv-green-900);
	}

	@media (max-width: 560px) {
		span {
			font-size: 13px;
		}
	}
}
</style>
