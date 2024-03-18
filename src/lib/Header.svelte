<script>
  import { MainStore } from "../store/store.main";
  import { onDestroy } from "svelte";
  import Divider from "./style/divider.svelte";
  import WaveAnimation from "./animation/WaveAnimation.svelte";

  import CategorySelect from "./components/CategorySelect.svelte";
  import NavLinks from "./components/NavLinks.svelte";
  import StopButton from "./components/StopButton.svelte";
  import {appConfig} from '../config/appConfig.js';
  /**
   * @type {number}
   */

  let card;
  const unsbscribe = MainStore.subscribe((s) => (card = s.currentCard));
  onDestroy(unsbscribe);
</script>

<header data-testid="app-header">
  <div class="header-wrapper">
    <div class="header-and-wave">
      {#if appConfig.hasSaveOption}
        <Divider w={30} />
      {/if}

      <h1>Effects</h1>
      <Divider w={15} />
      {#if card > 0}
        <WaveAnimation />
        <StopButton />
      {/if}
    </div>
    <div class="categories-and-settings">
      <NavLinks />
      <CategorySelect />
    </div>
  </div>
</header>

<style>
  h1 {
    --shaow-color: rgba(0, 0, 0, 1);
    color: rgb(10, 27, 211);
    margin: 0px;
    font-size: 2.9em;
    font-family: "PatrickHand-Regular";
    font-weight: 900;
    letter-spacing: 5px;
    text-shadow: 2px 2px 1px var(--shaow-color), 2px -2px 1px var(--shaow-color),
      -2px -2px 1px var(--shaow-color), -2px 2px 1px var(--shaow-color);
  }
  .header-wrapper {
    width: 95%;
    margin: 0px 20px;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-and-wave,
  .categories-and-settings {
    margin: 0;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  header {
    /* position: static; */
    z-index: 200;
    height: 55px;
    max-height: 55px;
    top: 0px;
    left: 0px;
    width: 100%;
    min-width: 100vw;
    overflow: hidden;

    max-width: 62vw;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 20px;
      text-shadow: 2px 2px 1px var(--shaow-color);
    }
    .header-wrapper {
      width: 90%;
      margin: 0px 5px;
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .categories-and-settings {
      min-width: 80px;
    }
  }
</style>
