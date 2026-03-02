<script>
  import { MainStore } from "../../store/store.main";
  let isSoundOn = $state(true);
  $effect(() => {
    const unsubscribe = MainStore.subscribe((s) => (isSoundOn = s.soundPlaying));
    return unsubscribe;
  });
</script>

<div class="nav-links-wrapper">
  <a class="link" href="#sound"
     onclick={(e) => { e.preventDefault(); MainStore.setSoundPlaying(!isSoundOn); }} >
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
