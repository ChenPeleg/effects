<script>
  import { MainStore } from "../store/store.main";
  import { onDestroy } from "svelte";
  import Divider from "./style/divider.svelte";
  import WaveAnimation from "./animation/WaveAnimation.svelte";
  /**
   * @type {number}
   */

  let card;
  const unsbscribe = MainStore.subscribe((s) => (card = s.currentCard));
  onDestroy(unsbscribe);
</script>

<header>
  <div class="header-wrapper">
    <h1>Effects</h1>
    <Divider w={15} />
    {#if card > 0}
      <WaveAnimation />
    {/if}
  </div>
</header>

<style>
  h1 {
    margin: 0px;
    font-size: 2em;
  }
  .header-wrapper {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  header {
    padding: 15px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
</style>
