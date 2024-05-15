<script>
	import { base } from '$app/paths';

	const linksMap = [
		{
			icon: '/jetbrains.png',
			title: 'JetBrains IDEs - an exceptional developer experience',
			url: 'https://jb.gg/Check-JetBrains-IDEs'
		},
		{
			icon: '/microsoft.png',
			title: 'Microsoft Power Apps - Build apps blazingly fast with low code',
			url: 'https://aka.ms/misodope'
		},
		{
			icon: '/cashapp.png',
			title: "Implement CashApp using Square's Web Payments API",
			url: 'https://obvs.ly/misodope'
		},
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
			icon: '/excellogo.jpeg',
			title: 'Job Search Template - Free! Just Copy & Paste',
			url: 'https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus'
		}
	];
</script>

<div class="flex flex-col w-full md:w-[450px] lg:w-[450px] text-sm">
	<a
		class="flex items-center justify-center gap-3 my-2 rounded-md cursor-pointer text-amber-300 font-bold hover:text-amber-400 transition-colors text-xs"
		href={"https://benable.com/misodope"}
	>
		<img
			src="https://img.icons8.com/emoji/48/backhand-index-pointing-right-emoji.png"
			alt="backhand-index-pointing-right-emoji"
			class="animate-pulse md:w-10 md:h-10 w-8 h-8"
		/>
		<p>Checkout my desk setup and favorite gear!</p>
	</a>
	{#each linksMap as link}
		<a
			class="transition-colors duration-500 flex items-center p-2.5 my-2.5 rounded-md cursor-pointer text-left bg-amber-300 text-black hover:text-amber-300 hover:bg-slate-900"
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
