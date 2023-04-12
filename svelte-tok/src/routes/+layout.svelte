<script>
	import Floaters from "../components/Floaters.svelte";
</script>

<div class="container mx-auto px-8 flex flex-col items-center">
	<slot />
	<Floaters />
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	div,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: #fcd34e;
	}

	body {
		background: black;
	}
</style>
