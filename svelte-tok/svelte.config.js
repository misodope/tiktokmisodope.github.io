import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess([{ postcss: true }, vitePreprocess]),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: ''
		},
		prerender: {
			entries: ['*']
		},
		appDir: '_app'
	}
};

export default config;
