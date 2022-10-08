<script>
  import CardsPanel from "./CardsPanel.svelte";
  import Header from "./Header.svelte";
  import GlobalStyles from "./style/GlobalStyles.svelte";
</script>

<div class="app-wrapper">
  <GlobalStyles />
  <Header />
  <main>
    <CardsPanel />
  </main>
</div>

<style>
  div.app-wrapper {
    padding: 20px;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(rgb(241, 166, 228), rgb(212, 167, 167));
  }
</style>
