<template>
	<svg
		class="nv-icon"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		:fill="filled ? 'currentColor' : 'none'"
		:stroke="filled ? 'none' : 'currentColor'"
		:stroke-width="stroke"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path v-for="(d, i) in paths" :key="i" :d="d" />
	</svg>
</template>

<script lang="ts" setup>
// Lucide-style line icons, kept inline so the page ships no icon font.
const props = withDefaults(defineProps<{ name: string; size?: number | string; stroke?: number | string }>(), {
	size: 24,
	stroke: 2,
});

const CIRCLE = 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z';

const ICONS: Record<string, string[]> = {
	leaf: ['M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z', 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'],
	shield: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4'],
	brain: ['M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z', 'M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z', 'M12 5v13', 'M8 10.5c1.2.3 2 1.2 2 2.5', 'M16 10.5c-1.2.3-2 1.2-2 2.5'],
	moon: ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', 'M19 3v4', 'M21 5h-4'],
	zap: ['M13 2 3 14h9l-1 8 10-12h-9l1-8z'],
	alert: ['m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', 'M12 9v4', 'M12 17h.01'],
	flame: ['M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'],
	activity: ['M22 12h-4l-3 9L9 3l-3 9H2'],
	battery: ['M4 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', 'M22 11v2', 'M6 11v2'],
	frown: [CIRCLE, 'M16 16s-1.5-2-4-2-4 2-4 2', 'M9 9h.01', 'M15 9h.01'],
	smile: [CIRCLE, 'M8 14s1.5 2 4 2 4-2 4-2', 'M9 9h.01', 'M15 9h.01'],
	heart: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'],
	pill: ['m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z', 'm8.5 8.5 7 7'],
	target: [CIRCLE, 'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z', 'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'],
	sun: ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
	phone: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'],
	arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
	check: ['M20 6 9 17l-5-5'],
	clipboard: ['M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z', 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M9 12h6', 'M9 16h4'],
	truck: ['M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2', 'M15 18H9', 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14', 'M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z', 'M17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'],
	award: ['M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z', 'M8.21 13.89 7 23l5-3 5 3-1.21-9.12'],
	file: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v5h6', 'm9 15 2 2 4-4'],
	plus: ['M12 5v14', 'M5 12h14'],
	menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
	close: ['M18 6 6 18', 'm6 6 12 12'],
	play: ['M8 5.14v13.72a1 1 0 0 0 1.52.85l10.9-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z'],
};

const FILLED = new Set(['play']);

const paths = computed(() => ICONS[props.name] ?? []);
const filled = computed(() => FILLED.has(props.name));
</script>

<style scoped>
.nv-icon {
	display: inline-block;
	flex-shrink: 0;
	vertical-align: middle;
	/* Clicks land on the parent button/link, not the <svg>: the SAIVO tracker
	   click handler calls className.indexOf and throws on SVGAnimatedString. */
	pointer-events: none;
}
</style>
