<script>
	import { base } from '$app/paths';
</script>

<footer class="border-t border-amber-400/10 mt-8 px-6 lg:px-16 py-8 max-w-7xl mx-auto w-full">
	<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
		<div class="flex items-center gap-3">
			<img class="w-8 h-8" src="{base}/misodopeLogo.png" alt="MisoDope logo" />
			<span class="text-xs uppercase tracking-[0.35em] text-amber-500/60 font-bold">MisoDope</span>
		</div>
		<div class="flex flex-col gap-1 lg:items-end">
			<p class="text-xs text-amber-400/70 tracking-widest italic">Code, Careers, Cringe.</p>
			<p class="text-xs text-amber-500/40 tracking-wide">© {new Date().getFullYear()} MisoDope. All rights reserved.</p>
			<div class="flex items-center gap-3 mt-1">
				<a
					href="https://auto.misodope.com/legal/privacy"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs text-amber-500/40 hover:text-amber-400/70 transition-colors tracking-wide"
				>
					Privacy Policy
				</a>
				<span class="text-amber-500/20 text-xs">·</span>
				<a
					href="https://auto.misodope.com/legal/terms"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs text-amber-500/40 hover:text-amber-400/70 transition-colors tracking-wide"
				>
					Terms of Service
				</a>
			</div>
		</div>
	</div>
</footer>
