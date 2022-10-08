<script>
  import CardsPanel from "./CardsPanel.svelte";
  import Header from "./Header.svelte";
  import GlobalStyles from "./style/GlobalStyles.svelte";
</script>

<div class="app-wrapper">
  <GlobalStyles />
  <Header />
  <div class="main-wrapper">
    <main>
      <CardsPanel />
    </main>
  </div>
</div>

<style>
  div.app-wrapper {
    overflow-x: hidden;
    min-height: 100vh;
  }
  main {
    display: flex;
    max-width: 95vw;
  }
  div.main-wrapper {
    --pad: 20px;
    overflow: hidden;
    box-sizing: border-box;
    padding: var(--pad);
    padding-top: 10px;
    width: calc(100vw - var(--pad));
  }
  @media (max-width: 576px) {
    div.main-wrapper {
      box-sizing: border-box;
      --pad: 4px;
      padding: var(--pad);
      padding-top: 10px;
      width: calc(100vw - var(--pad));
      max-width: calc(100vw - var(--pad));
      overflow-x: hidden;
    }
  }
</style>
