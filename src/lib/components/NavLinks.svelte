<script>
  import { MainStore } from "../../store/store.main";
  import {onDestroy} from 'svelte';
  let isSoundOn = true;
  const unsubscribe = MainStore.subscribe((s) => (isSoundOn = s.soundPlaying));
onDestroy(unsubscribe)
</script>

<div class="nav-links-wrapper">
  <a class="link"  href="javascript:void(0);"
     on:click={()=>MainStore.setSoundPlaying(!isSoundOn)} >
    {#if isSoundOn}
      <span>🔊</span>
    {:else}
      <span>🔇</span>
    {/if}

  </a>
  <a class="link" href="#/">▶️</a>
  <a class="link" href="#/settings">⚙️</a>
</div>

<style>
  a.link {
    filter: grayscale(90%) contrast(175%) saturate(100%) hue-rotate(-190deg);
    font-size: calc(var(--main-icon-size) - 15px);
    text-decoration: none;
  }
  @media (max-width: 576px) {
    a.link {
      font-size: calc(var(--main-icon-size) - 20px);
      text-decoration: none;
    }
    .nav-links-wrapper {
      display: flex;
      flex-direction: row;
    }
  }
</style>
