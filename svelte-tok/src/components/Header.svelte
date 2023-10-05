<script>
	import Icon from 'svelte-fa';
	import { base } from '$app/paths';

	import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
</script>

<div class="flex flex-col items-center justify-center mt-8">
	<div class="flex flex-col items-center">
		<img class="w-32 h-32 mb-5" src="{base}/Head2022.png" alt="profile" />
		<p class="text-xl tracking-wider flex justify-center items-center">@MisoDope</p>
		<div class="text-sm flex flex-col items-center">
			<p>Digital Creator</p>
			<p>Full Stack Engineer</p>
		</div>
		<div class="flex flex-col items-center text-sm my-4">
			<p>E-mail for all business inquiries</p>
			<div class="flex items-center">
				<Icon icon={faEnvelope} class="mx-2 text-base" />
				<a class="font-bold" href="mailto:jerry@misodope.com">jerry@misodope.com</a>
			</div>
		</div>
	</div>
</div>
