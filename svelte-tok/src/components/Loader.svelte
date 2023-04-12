<script lang="ts">
	import type { SpinnerTypes } from '../types/loader.js';

	const color: SpinnerTypes['color'] = '#fbd91d';
	const unit: SpinnerTypes['unit'] = 'px';
	const duration: SpinnerTypes['duration'] = '0.75s';
	const size: SpinnerTypes['size'] = '50';
</script>

<div>
	<div class="circle" style="--size: {size}{unit}; --color: {color}; --duration: {duration}" />
</div>

<style>
	.circle {
		height: var(--size);
		width: var(--size);
		border-color: var(--color) transparent var(--color) var(--color);
		border-width: calc(var(--size) / 15);
		border-style: solid;
		border-image: initial;
		border-radius: 50%;
		animation: var(--duration) linear 0s infinite normal none running rotate;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
