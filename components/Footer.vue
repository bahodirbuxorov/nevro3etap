<template>
	<footer class="nv-foot">
		<div class="nv-wrap nv-foot__in">
			<div class="nv-foot__brand">
				<img src="~/assets/images/v2/logo-white.svg" width="176" height="36" alt="Nevroslim" />
				<p>Ishlab chiqaruvchi: AL-HAYAT-MED</p>
				<p>Sayohat ko'chasi, 2-uy, Toshkent shahri, Mirzo Ulug'bek tumani</p>
			</div>

			<nav class="nv-foot__nav" aria-label="Pastki menyu">
				<a href="/#top">Bosh sahifa</a>
				<a href="/#mahsulot">Mahsulot haqida</a>
				<a href="/#tarkibi">Tarkibi</a>
				<a href="/#fikrlar">Mijozlar fikri</a>
				<a href="/#sertifikat">Sertifikatlar</a>
			</nav>

			<div class="nv-foot__contact">
				<div class="nv-foot__socials">
					<a href="https://www.youtube.com/@Nevroslim" data-meta="contact-youtube" target="_blank" rel="noopener" aria-label="YouTube">
						<img src="~/assets/images/svg/youtube.svg" alt="" />
					</a>
					<a href="https://t.me/NEVROSLIM" data-meta="contact-telegram" target="_blank" rel="noopener" aria-label="Telegram">
						<img src="~/assets/images/svg/telegram.svg" alt="" />
					</a>
					<a href="https://www.instagram.com/nevroslim.uz/" data-meta="contact-instagram" target="_blank" rel="noopener" aria-label="Instagram">
						<img src="~/assets/images/svg/instagram.svg" alt="" />
					</a>
				</div>
			</div>
		</div>
		<div class="nv-wrap nv-foot__note">
			© Nevroslim. Qo'llashdan oldin mutaxassis bilan maslahatlashing.
		</div>
	</footer>
</template>

<style scoped lang="scss">
.nv-foot {
	background: var(--nv-green-900);
	color: rgba(255, 255, 255, 0.78);
	padding: 44px 0 20px;

	&__in {
		display: grid;
		grid-template-columns: 1.3fr 1fr auto;
		gap: 32px;
		align-items: start;
	}

	&__brand {
		img {
			width: 176px;
			height: auto;
			margin-bottom: 14px;
		}

		p {
			font-size: 14px;
			line-height: 1.6;
		}
	}

	&__nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px 24px;

		a {
			color: rgba(255, 255, 255, 0.85);
			font-size: 14px;
			font-weight: 600;

			&:hover {
				color: var(--nv-gold-1);
			}
		}
	}

	&__socials {
		display: flex;
		gap: 10px;

		a {
			display: grid;
			place-items: center;
			width: 42px;
			height: 42px;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.1);
			transition: background 0.15s;

			&:hover {
				background: rgba(255, 255, 255, 0.2);
			}
		}

		img {
			width: 22px;
			height: 22px;
		}
	}

	&__note {
		margin-top: 32px;
		padding-top: 18px;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
		font-size: 12px;
		color: rgba(255, 255, 255, 0.55);
	}

	@media (max-width: 860px) {
		&__in {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}
}
</style>
