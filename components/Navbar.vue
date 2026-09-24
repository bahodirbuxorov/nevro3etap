<template>
	<header class="nv-head" :class="{ 'is-scrolled': scrolled }">
		<div class="nv-wrap nv-head__in">
			<a href="/#top" class="nv-head__logo" aria-label="Nevroslim">
				<img src="~/assets/images/v2/logo.svg" width="176" height="36" alt="Nevroslim" />
			</a>

			<nav class="nv-head__nav" :class="{ 'is-open': open }" aria-label="Asosiy menyu">
				<a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
			</nav>

			<a href="/#order-form" data-meta="order-scroll" class="nv-btn nv-btn--sm nv-head__cta">Maslahat olish</a>

			<button type="button" class="nv-head__burger" :aria-expanded="open" aria-label="Menyu" @click="open = !open">
				<NvIcon :name="open ? 'close' : 'menu'" :size="26" />
			</button>
		</div>
	</header>
</template>

<script lang="ts" setup>
const links = [
	{ href: '/#top', label: 'Bosh sahifa' },
	{ href: '/#mahsulot', label: 'Mahsulot haqida' },
	{ href: '/#tarkibi', label: 'Tarkibi' },
	{ href: '/#fikrlar', label: 'Mijozlar fikri' },
	{ href: '/#sertifikat', label: 'Sertifikatlar' },
	{ href: '/#buyurtma', label: 'Buyurtma' },
];

const open = ref(false);
const scrolled = ref(false);

function onScroll() {
	scrolled.value = window.scrollY > 10;
}

onMounted(() => {
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped lang="scss">
.nv-head {
	position: sticky;
	top: 0;
	z-index: 50;
	background: rgba(255, 255, 255, 0.92);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	transition: box-shadow 0.2s ease;

	&.is-scrolled {
		box-shadow: 0 4px 20px rgba(15, 74, 40, 0.1);
	}

	&__in {
		display: flex;
		align-items: center;
		gap: 24px;
		min-height: 68px;
	}

	&__logo {
		display: flex;
		flex-shrink: 0;

		img {
			width: 168px;
			height: auto;
		}
	}

	&__nav {
		display: flex;
		gap: 22px;
		margin: 0 auto;

		a {
			color: var(--nv-ink);
			font-size: 14px;
			font-weight: 600;
			white-space: nowrap;
			transition: color 0.15s;

			&:hover {
				color: var(--nv-green-500);
			}
		}
	}

	&__cta {
		flex-shrink: 0;
	}

	&__burger {
		display: none;
		color: var(--nv-green-800);
		padding: 6px;
	}

	@media (max-width: 1100px) {
		&__nav {
			gap: 14px;

			a {
				font-size: 13px;
			}
		}
	}

	@media (max-width: 960px) {
		&__in {
			gap: 12px;
		}

		&__cta {
			margin-left: auto;
		}

		&__burger {
			display: inline-flex;
		}

		&__nav {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			margin: 0;
			padding: 8px 20px 16px;
			background: #fff;
			box-shadow: 0 12px 24px rgba(15, 74, 40, 0.12);
			display: none;

			&.is-open {
				display: flex;
			}

			a {
				padding: 12px 0;
				font-size: 16px;
				border-bottom: 1px solid var(--nv-line);
			}
		}
	}

	@media (max-width: 520px) {
		&__logo img {
			width: 132px;
		}

		&__cta {
			min-height: 40px;
			padding: 8px 14px;
			font-size: 12px;
		}
	}
}
</style>
