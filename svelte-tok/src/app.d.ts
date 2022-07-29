/// <reference types="@sveltejs/kit" />
export {};
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	interface Window { Square: any }
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/free-solid-svg-icons';
	export * from '@fortawesome/free-brands-svg-icons';
}
