<script>
  import Socials from '../components/Social.svelte';
  import Links from '../components/Links.svelte';
  import Footer from '../components/Footer.svelte';
  import ProductCard from '../components/ProductCard.svelte';
  import { base } from '$app/paths';
  import Icon from 'svelte-fa';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
</script>

<div class="flex flex-col min-h-screen">

  <!-- Hero -->
  <section class="flex items-center flex-1">
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-16 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      <!-- Left: Identity -->
      <div class="flex flex-col">
        <div class="flex items-center justify-between mb-5 lg:block lg:mb-0">
          <div>
            <p class="text-amber-500 text-xs uppercase tracking-[0.35em] font-bold mb-3">@MisoDope</p>
            <h1 class="text-5xl lg:text-9xl font-black leading-none tracking-tight lg:mb-5">
              Jerry<br />Chen
            </h1>
          </div>
          <img
            src="{base}/headshot2.png"
            alt="Jerry Chen"
            class="lg:hidden w-24 h-24 rounded-xl object-cover shadow-[0_0_30px_rgba(184,164,0,0.2)] ml-4 mr-5 flex-shrink-0"
          />
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 text-xs tracking-widest uppercase">Content Creator</span>
          <span class="px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 text-xs tracking-widest uppercase">Software Engineer</span>
        </div>
        <div class="flex flex-col gap-1 mb-4">
          <p class="text-xs uppercase tracking-[0.25em] text-amber-500/50">E-mail for all business inquiries</p>
          <a
            href="mailto:jerry@misodope.com"
            class="flex items-center gap-2 text-sm text-amber-400/60 hover:text-amber-300 transition-colors w-fit"
          >
            <Icon icon={faEnvelope} />
            jerry@misodope.com
          </a>
        </div>
        <Socials />
      </div>

      <!-- Right: Photo (desktop only) + Product Card -->
      <div class="flex flex-col items-center lg:items-end gap-6">
        <img
          src="{base}/headshot2.png"
          alt="Jerry Chen"
          class="hidden lg:block w-72 h-72 rounded-2xl object-cover shadow-[0_0_60px_rgba(184,164,0,0.2)]"
        />
        <div class="w-full max-w-sm lg:mt-16">
          <ProductCard />
        </div>
      </div>

    </div>
  </section>

  <!-- Links -->
  <section class="max-w-7xl mx-auto w-full px-6 lg:px-16 pt-8 pb-12 lg:pt-0">
    <div class="max-w-lg lg:ml-32">
      <p class="text-xs uppercase tracking-[0.35em] text-amber-500 font-bold mb-4">Links</p>
      <Links />
    </div>
  </section>

  <Footer />
</div>
