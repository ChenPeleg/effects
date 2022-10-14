<script>
  import { onDestroy } from "svelte";

  let tick = 0;
  const speed = 20;
  const interval = setInterval(() => {
    tick++;
    tick++;
    if (tick > text.length) {
      tick = 10;
    }
  }, speed);
  onDestroy(() => {
    clearInterval(interval);
  });
  const text = `404 not found,
    trying again...        
    failed. 404 not found. 
    are you sure this is the right page?
    let try again. 
    trying...
    404
    404
    trying...
    on second thought...
    try to go to another page.
    or to another site.
    FILE NOT FOUND 404
    or make some coffee, 
    just keave me alone.
    no, realy.
    404
    404 
    The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
    404
    404
    The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.

    The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
 `;
  $: shownText = text
    .replace(/\n/g, "     <br>")
    .substring(0, tick)
    .split("<br>")
    .filter((v, i, arr) => arr.length - i < 5)
    .join("<br>");
</script>

<div class="wrapper">
  <div class="container-404">
    <span class="text gradient-text">404</span>
    <div
      class="console-output"
      contenteditable="false"
      bind:innerHTML={shownText}
    />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80vw;
  }
  .container-404 {
    width: 230px;
    height: 400px;
  }
  .text {
    font-size: calc(var(--main-font-size) * 8);
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    --shaow-color: rgb(214, 205, 205);
    /* text-shadow: -5px 5px 1px var(--shaow-color); */
    /* filter: drop-shadow(16px 16px 20px rgb(140, 42, 42)) invert(75%); */
  }
  .gradient-text {
    background: linear-gradient(rgb(200, 44, 44), rgb(97, 10, 102));
    animation: anim404 6000ms ease-in-out infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @keyframes anim404 {
    0% {
      background: linear-gradient(rgb(200, 44, 44), rgb(234, 217, 235));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    3% {
      background: linear-gradient(rgb(200, 44, 44), rgb(141, 235, 9));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    4% {
      background: linear-gradient(rgb(200, 44, 44), rgb(234, 217, 235));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    5% {
      background: linear-gradient(rgb(200, 44, 44), rgb(97, 10, 102));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    100% {
      background: linear-gradient(rgb(200, 44, 44), rgb(97, 10, 102));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .console-output {
    font-family: "consolas";
  }
</style>
