import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/svelte+twscss_portfolio/",
	plugins: [sveltekit()]
});
