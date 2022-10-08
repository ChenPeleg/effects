<script>
  import CardsPanel from "./CardsPanel.svelte";
  import Header from "./Header.svelte";
</script>

<div class="app-wrapper">
  <Header />
  <main>
    <CardsPanel />
  </main>
</div>

<style>
  div.app-wrapper {
    width: 100vw;
  }
  @font-face {
    font-family: "Balsamiq Sans";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/balsamiq-sans/BalsamiqSans-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Balsamiq Sans";
    font-style: bold;
    font-weight: 700;
    src: url("/fonts/balsamiq-sans/BalsamiqSans-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Signika Negative";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/SignikaNegative-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "PatrickHand-Regular";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/PatrickHand-Regular.ttf") format("truetype");
  }
  :global(:root) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    --main-font-size: 24px;
    --main-icon-size: 32px;
    --main-font-size-mobile: 17px;
    --main-icon-size-mobile: 24px;
    --main-current-color: rgb(183, 184, 198);
    --main-current-color-gradient: linear-gradient(
      90deg,
      rgba(234, 236, 160, 1) 3%,
      rgba(250, 255, 105, 1) 81%
    );
    font-family: "Signika Negative", sans-serif;
    font-family: "Balsamiq Sans", sans-serif;
    --main-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    --main-box-shadow-hover: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 45%);
  }
</style>
