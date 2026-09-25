// Shared open/closed state for the full-screen order form (Navbar lives in the
// layout, the CTAs live in the page, so plain component state won't do).
export function useOrderModal() {
	const isOpen = useState<boolean>('order-modal-open', () => false);

	function open() {
		if (isOpen.value) return;
		isOpen.value = true;
		// Give the phone's back button something to pop, so it closes the form
		// instead of leaving the landing. Keep Vue Router's own state fields.
		if (import.meta.client) {
			history.pushState({ ...history.state, nvOrderModal: true }, '');
		}
	}

	function close() {
		if (!isOpen.value) return;
		if (import.meta.client && history.state?.nvOrderModal) {
			history.back(); // popstate listener in OrderModal flips isOpen
		} else {
			isOpen.value = false;
		}
	}

	// Close without touching history — used when leaving the page (submit -> /thanks).
	function dismiss() {
		isOpen.value = false;
		if (import.meta.client) document.documentElement.style.overflow = '';
	}

	return { isOpen, open, close, dismiss };
}
