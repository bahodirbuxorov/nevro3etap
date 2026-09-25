<template>
	<section class="fear" id="belgilar">
		<div class="nv-wrap">
			<header class="fear__head">
				<span class="fear__eyebrow"><NvIcon name="alert" :size="16" :stroke="2.4" /> Ogohlantirish</span>
				<h2 class="fear__title">
					Bugungi kichik belgilar —
					<span>ertangi jiddiy muammo</span>
				</h2>
				<p class="fear__lead">
					Asab tizimidagi zo'riqish birdan paydo bo'lmaydi. U kichik belgilardan boshlanadi va e'tiborsiz qolsa,
					vaqt o'tishi bilan jiddiy muammolarga aylanishi mumkin.
				</p>
			</header>

			<!-- today -> tomorrow -->
			<div class="fear__flow">
				<div class="fear-col fear-col--now">
					<p class="fear-col__label">Bugun: sezilayotgan belgilar</p>
					<ul class="fear-col__list">
						<li v-for="s in signs" :key="s.img">
							<img :src="fearImg(s.img)" width="800" height="600" alt="" loading="lazy" />
							<span>{{ s.title }}</span>
						</li>
					</ul>
				</div>

				<div class="fear__arrow" aria-hidden="true">
					<span class="fear__arrow-ic"><NvIcon name="arrow" :size="24" :stroke="2.6" /></span>
					<span class="fear__arrow-txt">E'tiborsiz qolsa…</span>
				</div>

				<div class="fear-col fear-col--later">
					<p class="fear-col__label">Ertaga: jiddiy oqibatlar</p>
					<ul class="fear-col__list">
						<li v-for="c in consequences" :key="c.img">
							<img :src="fearImg(c.img)" width="640" height="640" alt="" loading="lazy" />
							<span>{{ c.title }}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="fear__cta">
				<p>
					<b>Oldini olish — keyin davolashdan ancha oson.</b>
					Belgilar kuchaymasidan oldin mutaxassis maslahatini oling.
				</p>
				<button type="button" id="fear-btn" data-meta="order-open" class="nv-btn" @click="openOrder">
					Maslahat olish <NvIcon name="arrow" :size="18" :stroke="2.5" />
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
	{ img: 'fear-card-irritable', title: 'Tez-tez asabiylashish' },
	{ img: 'fear-card-anxiety', title: "Sababsiz xavotir va qo'rquv" },
	{ img: 'fear-card-sleep', title: 'Uyqusizlik' },
	{ img: 'fear-card-focus', title: 'Diqqat va xotira susayishi' },
	{ img: 'fear-card-tension', title: "Doimiy ruhiy zo'riqish" },
	{ img: 'fear-card-headache', title: "Bosh og'rig'i va taranglik" },
];

const consequences = [
	{ img: 'fear-cons-stress', title: 'Surunkali stress va tushkunlik' },
	{ img: 'fear-cons-insomnia', title: 'Doimiy uyqusizlik' },
	{ img: 'fear-cons-memory', title: 'Xotira va diqqatning pasayishi' },
	{ img: 'fear-cons-heart', title: 'Yurak-qon tomir tizimiga yuklama' },
	{ img: 'fear-cons-work', title: 'Ish va hayot sifatining pasayishi' },
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

	&__flow {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 20px;
		margin-top: 36px;
	}

	&__arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		width: 110px;
		text-align: center;
	}

	&__arrow-ic {
		display: grid;
		place-items: center;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--nv-gold-2), var(--f-red));
		color: #fff;
		box-shadow: 0 10px 22px rgba(214, 58, 47, 0.3);
	}

	&__arrow-txt {
		font-size: 13px;
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

	@media (max-width: 900px) {
		&__flow {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		&__arrow {
			width: auto;
			flex-direction: row;
			justify-content: center;

			.fear__arrow-ic {
				width: 44px;
				height: 44px;
				transform: rotate(90deg);
			}
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

// ── today / tomorrow columns
.fear-col {
	height: 100%;
	padding: 20px;
	border-radius: 20px;
	background: #fff;
	border: 1.5px solid var(--nv-line);
	box-shadow: var(--nv-shadow);

	&__label {
		display: inline-block;
		padding: 6px 12px;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 800;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 14px;

		li {
			display: flex;
			align-items: center;
			gap: 12px;
			padding: 6px;
			border-radius: 12px;
			background: var(--nv-green-50);
		}

		img {
			flex-shrink: 0;
			width: 52px;
			height: 52px;
			border-radius: 10px;
			object-fit: cover;
		}

		span {
			font-size: 15px;
			font-weight: 700;
			line-height: 1.3;
			color: var(--nv-green-900);
		}
	}

	&--now &__label {
		background: var(--f-amber-soft);
		color: var(--f-amber);
	}

	&--later {
		border-color: rgba(214, 58, 47, 0.35);
		box-shadow: 0 14px 34px rgba(214, 58, 47, 0.12);

		.fear-col__label {
			background: var(--f-red-soft);
			color: var(--f-red);
		}

		.fear-col__list li {
			background: #fff7f6;
		}

		.fear-col__list span {
			color: #8f2019;
		}
	}

	@media (max-width: $sm) {
		padding: 16px 14px;

		// "today" signs as a compact 2-column grid to keep the block short
		&--now .fear-col__list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 6px;

			img {
				width: 40px;
				height: 40px;
			}

			span {
				font-size: 12.5px;
			}
		}

		&__list {
			img {
				width: 46px;
				height: 46px;
			}

			span {
				font-size: 14px;
			}
		}
	}
}
</style>
