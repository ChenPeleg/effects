<script>
  import { MainStore } from "../../store/store.main";

  const stop = () => {
    MainStore.cardChosen(0);
  };
</script>

<div class="stop-button" on:click={(ev) => stop()}>Stop</div>

<style>
  .stop-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--main-font-size) - 2px);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    min-width: 140px;

    background: rgb(75, 125, 240) no-repeat;
    height: 1.8rem;
    --base-side-gap: 0.5rem;
    margin-right: var(--base-side-gap);
    margin-left: var(--base-side-gap);

    border: 1px solid #dfdfdf;

    border-radius: 0.25em;
    box-shadow: var(--main-box-shadow);
    padding: 0.25rem var(--base-side-gap);
  }
  .stop-button:hover {
    background-color: rgb(99, 188, 188);
  }
</style>
