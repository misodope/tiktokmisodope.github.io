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
	];
</script>

<div class="w-full text-sm">
	<a
		class="flex items-center gap-3 mb-4 text-amber-300 font-bold hover:text-amber-400 transition-colors text-xs"
		href="https://benable.com/misodope"
	>
		<img
			src="https://img.icons8.com/emoji/48/backhand-index-pointing-right-emoji.png"
			alt="backhand-index-pointing-right-emoji"
			class="animate-pulse w-8 h-8"
		/>
		<p>Checkout my desk setup and favorite gear!</p>
	</a>
	<div class="flex flex-col gap-3">
		{#each linksMap as link}
			<a
				class="transition-colors duration-300 flex items-center p-3 rounded-lg cursor-pointer text-left bg-amber-300 text-black hover:text-amber-300 hover:bg-slate-900"
				href={link.url}
			>
				<img
					src={base + link.icon}
					class={`rounded-full mr-4 w-8 h-8 flex-shrink-0 ${link.className ?? ''}`}
					alt={link.icon}
				/>
				{link.title}
			</a>
		{/each}
	</div>
</div>
