<script>
  import ThreeBackground from "../components/ThreeBackground.svelte";
  import Floaters from "../components/Floaters.svelte";
</script>

<div class="min-h-screen relative">
  <ThreeBackground />
  <Floaters />
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
    color: #fcd34e;
  }

  body {
    background: black;
  }
</style>
