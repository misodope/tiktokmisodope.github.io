<script>
	import Icon from 'svelte-fa';

	import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

	const socialsMap = [
		{
			icon: faTiktok,
			link: 'https://www.tiktok.com/@misodope/'
		},
		{
			icon: faInstagram,
			link: 'https://www.instagram.com/miso.dope/'
		},
		{
			icon: faYoutube,
			link: 'https://www.youtube.com/misodope/'
		},
		{
			icon: faGithub,
			link: 'https://github.com/misodope'
		},
		{
			icon: faDiscord,
			link: 'https://discord.gg/2FS5rsM'
		}
	];
</script>

<div class="flex justify-center items-center mb-6 mt-2">
	{#each socialsMap as { icon, link }}
		<a href={link} class="mx-3">
			<Icon {icon} class="!h-10 !w-10" />
		</a>
	{/each}
</div>
