<script>
  import Icon from "svelte-fa";
  import {
    faTiktok,
    faYoutube,
    faDiscord,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

  const socialsMap = [
    {
        icon: faTiktok,
        link: "https://www.tiktok.com/@misodope/",
    },
    {
        icon: faInstagram,
        link: "https://www.instagram.com/miso.dope/",
    },
    {
        icon: faYoutube,
        link: "https://www.youtube.com/misodope/",
    },
    {
        icon: faGithub,
        link: "https://github.com/misodope",
    },
    {
      icon: faDiscord,
      link: "https://discord.gg/2FS5rsM",
    },
  ]
</script>

<div class="flex justify-center items-center my-6">
  {#each socialsMap as { icon, link }}
    <a href={link} class="mx-3">
      <Icon icon={icon} class="!h-10 !w-10" />
    </a>
  {/each}
</div>

