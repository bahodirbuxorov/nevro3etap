<template>
	<Teleport to="body">
		<Transition name="nv-modal">
			<div
				v-if="isOpen"
				class="nv-modal"
				role="dialog"
				aria-modal="true"
				aria-label="Maslahat olish uchun ariza"
			>
				<div class="nv-modal__bar">
					<img src="~/assets/images/v2/logo.svg" width="150" height="31" alt="Nevroslim" />
					<button ref="closeBtn" type="button" class="nv-modal__close" aria-label="Yopish" @click="close">
						<NvIcon name="close" :size="24" :stroke="2.5" />
					</button>
				</div>

				<div class="nv-modal__body">
					<div class="nv-modal__inner">
						<InlineOrderForm />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script lang="ts" setup>
const { isOpen, close, dismiss } = useOrderModal();
const route = useRoute();
const closeBtn = ref<HTMLButtonElement | null>(null);

function onKey(e: KeyboardEvent) {
	if (e.key === 'Escape') close();
}

// Back button (or history.back() from close()) pops our pushed entry.
function onPop() {
	if (isOpen.value && !history.state?.nvOrderModal) isOpen.value = false;
}

watch(isOpen, async (open) => {
	document.documentElement.style.overflow = open ? 'hidden' : '';
	if (open) {
		await nextTick();
		closeBtn.value?.focus({ preventScroll: true });
	}
});

// Any page change (e.g. submit -> /thanks) must never leave the overlay or the
// scroll lock behind on the next page.
watch(() => route.path, () => dismiss());

onMounted(() => {
	window.addEventListener('keydown', onKey);
	window.addEventListener('popstate', onPop);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKey);
	window.removeEventListener('popstate', onPop);
	dismiss();
});
</script>

<style scoped lang="scss">
.nv-modal {
	position: fixed;
	inset: 0;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	background:
		radial-gradient(70% 50% at 100% 0%, rgba(118, 212, 160, 0.28) 0%, rgba(118, 212, 160, 0) 70%),
		radial-gradient(60% 45% at 0% 100%, rgba(44, 154, 72, 0.16) 0%, rgba(44, 154, 72, 0) 70%),
		var(--nv-green-50);

	&__bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-shrink: 0;
		min-height: 60px;
		padding: 8px 12px 8px 20px;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 2px 12px rgba(15, 74, 40, 0.08);

		img {
			width: 150px;
			height: auto;
		}
	}

	&__close {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		color: var(--nv-green-800);
		background: var(--nv-green-100);
		transition: background 0.15s;

		&:hover {
			background: var(--nv-line);
		}

		&:focus-visible {
			outline: 3px solid var(--nv-green-500);
			outline-offset: 2px;
		}
	}

	&__body {
		flex: 1;
		display: flex;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		overscroll-behavior: contain;
	}

	&__inner {
		width: min(560px, 100%);
		// centred when it fits, top-aligned (no clipping) when it scrolls
		margin: auto;
		padding: clamp(16px, 4vw, 40px) 16px 40px;
	}

	// the card already has its own shadow; in full screen it reads better flatter
	:deep(.nv-form) {
		box-shadow: 0 12px 36px rgba(11, 61, 34, 0.12);
		scroll-margin-top: 12px;
	}

	// bigger type on tablet/desktop so the questions read at a glance
	@media (min-width: 768px) {
		:deep(.nv-form) {
			padding: 40px 44px;
		}

		:deep(.nv-form__title) {
			font-size: 30px;
		}

		:deep(.nv-form__sub) {
			font-size: 15px;
		}
	}
}

.nv-modal-enter-active,
.nv-modal-leave-active {
	transition: opacity 0.2s ease, transform 0.2s ease;
}

.nv-modal-enter-from,
.nv-modal-leave-to {
	opacity: 0;
	transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
	.nv-modal-enter-active,
	.nv-modal-leave-active {
		transition: none;
	}
}
</style>
