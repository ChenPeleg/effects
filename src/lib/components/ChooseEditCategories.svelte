<script>
  import { SettingsStore } from "../../store/settings.store";
  import { categoryStore } from "../../store/store.custom";
  SettingsStore;
  const selectSlot = (slotId) => {
    SettingsStore.setSlotInEdit(slotId);
  };
</script>

<div id="choose-edit-category-component">
  <div class="flex-box">
    {#each $categoryStore as saveSlot}
      <div
        class="save-slot"
        class:isSelected={$SettingsStore.slotInEdit === saveSlot.customId}
        on:click={(ev) => selectSlot(saveSlot.customId)}
      >
        {saveSlot.name || " Slot " + saveSlot.customId}
      </div>
    {/each}
  </div>
</div>

<style>
  .flex-box {
    max-width: 98vw;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .save-slot {
    font-size: calc(var(--main-font-size) - 5px);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    min-width: 140px;
    margin: 5px;
    height: 1.8rem;

    background: rgb(207, 194, 194) no-repeat;
    --base-side-gap: 0.5rem;
    margin-right: var(--base-side-gap);
    margin-left: var(--base-side-gap);

    border: 1px solid #dfdfdf;

    border-radius: 0.25em;
    box-shadow: var(--main-box-shadow);
    padding: 0.25rem var(--base-side-gap);
  }
  .save-slot.isSelected {
    background-color: aqua;
  }
  @media (max-width: 576px) {
    .save-slot {
      min-width: 80px;
      margin: 4px;
      height: 1.3rem;
    }
  }
</style>
