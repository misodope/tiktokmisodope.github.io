<div class="container mx-auto py-10 flex flex-col items-center">
	<slot />
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
		color: #fbd91d;
	}

	body {
		background: black;
	}
</style>
