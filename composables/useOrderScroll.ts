// Every "Маслаҳат олиш" CTA scrolls to the order form in the final section.
export function useOrderScroll() {
	function scrollToOrderForm(e?: Event) {
		if (e) e.preventDefault();
		document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	return { scrollToOrderForm };
}
