<script>
	import { base } from '$app/paths';

	const linksMap = [
		{
			icon: '/aws.png',
			title: 'Amazon Web Services - Architecture Center',
			url: 'https://viraln.link/JC_AWS_TT2',
			className: 'w-10 h-10 mr-2'
		},
		{
			icon: '/aws.png',
			title: 'Amazon Web Services - Observability',
			url: 'https://viraln.link/JC_AWS_TT1',
			className: 'w-10 h-10 mr-2'
		},
		{
			icon: '/Blind.png',
			title: 'Download Blind - An open space for professionals to talk about ANYTHING',
			url: 'https://teamblind.onelink.me/enIS/misodope'
		},
		{
			icon: '/ReplitLogo.png',
			title: 'Try Replit the best free online code editor',
			link: 'https://repl.it/@misodope/'
		},
		{
			icon: '/excellogo.jpeg',
			title: 'Job Search Template',
			url: 'https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus'
		},
	];
</script>

<div class="flex flex-col w-full md:w-[450px] lg:w-[450px] text-sm">
	{#each linksMap as link}
		<a
			class="transition-colors duration-500 flex items-center p-2.5 my-2.5 rounded-md cursor-pointer text-left bg-amber-300 text-black hover:text-amber-300 hover:bg-black"
			href={link.url}
		>
			<img
				src={base + link.icon}
				class={`rounded-full mr-5 w-8 h-8 ${link.className ?? ''}`}
				alt={link.icon}
			/>
			{link.title}
		</a>
	{/each}
</div>
