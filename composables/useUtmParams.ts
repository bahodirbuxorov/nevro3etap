export function useUtmParams() {
	function capture() {
		if (!import.meta.client) return;
		const params = new URLSearchParams(window.location.search);
		const source = params.get('utm_source');
		const medium = params.get('utm_medium');
		const stored = get();
		if (source) sessionStorage.setItem('utm_source', source);
		if (medium) sessionStorage.setItem('utm_medium', medium);
		if (!stored.source && source) sessionStorage.setItem('utm_source', source);
		if (!stored.medium && medium) sessionStorage.setItem('utm_medium', medium);
	}

	function get(): { utm_source?: string; utm_medium?: string } {
		if (!import.meta.client) return {};
		const source = sessionStorage.getItem('utm_source') || undefined;
		const medium = sessionStorage.getItem('utm_medium') || undefined;
		const result: { utm_source?: string; utm_medium?: string } = {};
		if (source) result.utm_source = source;
		if (medium) result.utm_medium = medium;
		return result;
	}

	return { capture, get };
}
