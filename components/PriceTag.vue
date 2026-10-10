<template>
	<div class="nv-price" :class="{ 'nv-price--compact': compact }" aria-label="Маҳсулот нархи">
		<div class="nv-price__old">
			<span class="nv-price__old-label">Одатдаги нарх:</span>
			<s class="nv-price__old-value">{{ fmt(oldPrice) }} <small>сўм</small></s>
		</div>

		<div class="nv-price__new">
			<span class="nv-price__badge" aria-hidden="true">Катта<br />акция!</span>
			<span class="nv-price__new-label">Акция нархи:</span>
			<b class="nv-price__new-value">{{ fmt(price) }}</b>
			<span class="nv-price__new-cur">сўм</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		price?: number;
		oldPrice?: number;
		compact?: boolean;
	}>(),
	{ price: 499_000, oldPrice: 1_000_000, compact: false },
);

// 499000 → "499 000"
const fmt = (n: number) => n.toLocaleString('ru-RU').replace(/\s/g, ' ');
</script>

<style scoped lang="scss">
.nv-price {
	display: flex;
	align-items: stretch;
	max-width: 520px;

	&__old {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2px;
		margin-right: -14px;
		padding: 12px 34px 12px 18px;
		border-radius: 16px 0 0 16px;
		background: #fff;
		box-shadow: var(--nv-shadow);
		clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
	}

	&__old-label {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--nv-muted);
	}

	&__old-value {
		font-size: clamp(20px, 2.2vw, 26px);
		font-weight: 800;
		white-space: nowrap;
		color: var(--nv-ink);
		text-decoration-line: line-through;
		text-decoration-color: #e2231a;
		text-decoration-thickness: 3px;

		small {
			font-size: 0.7em;
		}
	}

	&__new {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 18px 18px 12px 30px;
		border-radius: 16px;
		background: linear-gradient(160deg, #f0362b 0%, #c8140d 100%);
		box-shadow: 0 12px 26px rgba(200, 20, 13, 0.35);
		color: #fff;
		text-align: center;
	}

	&__new-label {
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	&__new-value {
		font-size: clamp(34px, 4vw, 48px);
		font-weight: 800;
		line-height: 1;
		white-space: nowrap;
		background: linear-gradient(180deg, #fff6c9 0%, var(--nv-gold-1) 45%, var(--nv-gold-2) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 2px 0 rgba(110, 10, 5, 0.45));
	}

	&__new-cur {
		margin-top: 2px;
		font-size: 16px;
		font-weight: 800;
	}

	&__badge {
		position: absolute;
		top: -40px;
		right: -14px;
		display: grid;
		place-items: center;
		width: 66px;
		height: 66px;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 30%, #ff5a4a, #d3170f 70%);
		border: 3px solid #fff;
		box-shadow: 0 6px 14px rgba(150, 10, 5, 0.4);
		font-size: 10.5px;
		font-weight: 800;
		line-height: 1.1;
		text-transform: uppercase;
		color: #fff;
		transform: rotate(12deg);
		animation: nv-price-pulse 2.4s ease-in-out infinite;
	}

	&--compact {
		max-width: none;
	}

	@media (max-width: 560px) {
		&__old {
			padding: 10px 28px 10px 12px;
		}

		&__old-label,
		&__new-label {
			font-size: 11px;
		}

		&__old-value {
			font-size: 18px;
		}

		&__new {
			padding: 16px 10px 10px 24px;
		}

		&__new-value {
			font-size: 30px;
		}

		&__new-cur {
			font-size: 14px;
		}

		&__badge {
			top: -34px;
			right: -6px;
			width: 58px;
			height: 58px;
			font-size: 9.5px;
		}
	}
}

@keyframes nv-price-pulse {
	0%,
	100% {
		transform: rotate(12deg) scale(1);
	}
	50% {
		transform: rotate(12deg) scale(1.08);
	}
}

@media (prefers-reduced-motion: reduce) {
	.nv-price__badge {
		animation: none;
	}
}
</style>
