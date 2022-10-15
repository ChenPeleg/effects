<script>
  import { categoryStore } from "../../store/store.custom";
</script>

<div>
  <div class="flex-box">
    Edit categories
    {#each $categoryStore as saveSlot}
      <div class="save-slot">
        {saveSlot.customId}
      </div>
    {/each}
  </div>
</div>

<style>
  .flex-box {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
  .save-slot {
    font-size: calc(var(--main-font-size) - 5px);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    min-width: 140px;

    background: rgb(207, 194, 194) no-repeat;
    height: 1.8rem;
    --base-side-gap: 0.5rem;
    margin-right: var(--base-side-gap);
    margin-left: var(--base-side-gap);

    border: 1px solid #dfdfdf;

    border-radius: 0.25em;
    box-shadow: var(--main-box-shadow);
    padding: 0.25rem var(--base-side-gap);
  }
</style>
