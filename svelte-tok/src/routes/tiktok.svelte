<script>
  import { onMount } from 'svelte';

  onMount(() => {
    window.location.href = "https://tiktok.com/@misodope";
  })
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
  <p>Oh look I can center a div</p>
  <p class=" font-bold text-lg animate-pulse">Redirecting to @MisoDope TikTok...</p>
</div>