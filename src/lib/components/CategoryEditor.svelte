<script>
  import { SettingsStore } from "../../store/settings.store";
  import { onDestroy } from "svelte";
  import { categoryStore } from "../../store/store.custom";

  let name;
  let slodId;
  /**@type {CustomCategory []}*/
  let allCats;
  const unsubscribe1 = SettingsStore.subscribe((s) => (slodId = s.slotInEdit));
  categoryStore.subscribe((cats) => (allCats = cats));
  const updatename = () => {
    const currentCat = allCats.find((c) => c.customId === slodId);
    if (!currentCat) {
      return;
    }
    currentCat.name = name;
    categoryStore.updateCustomCategory(slodId, currentCat);
  };
  onDestroy(() => {
    unsubscribe1();
  });
</script>

<div class="wrapper">
  <input bind:value={name} on:focusout={(ev) => updatename()} />
</div>

<style>
  div.wrapper {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
</style>
