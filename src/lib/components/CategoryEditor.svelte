<script>
  import { SettingsStore } from "../../store/settings.store";
  import { onDestroy } from "svelte";
  import { categoryStore } from "../../store/store.custom";

  let name;
  let slodId;
  /**@type {CustomCategory []}*/
  let allCats = [];
  const unsubscribe1 = SettingsStore.subscribe((s) => {
    slodId = s.slotInEdit;
    const currentCat = allCats.find((c) => c.customId === slodId);
    name = currentCat ? currentCat.name : name;
    setTimeout(() => {
      //
    }, 300);
  });
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
  <div class="input-wrapper">
    <input
      class="form-input"
      bind:value={name}
      maxlength="20"
      on:focusout={(ev) => updatename()}
    />
  </div>
</div>

<style>
  div.wrapper {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
  .input-wrapper {
    padding: 5px;
    background-color: white;
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
  }
  input.form-input {
    font-size: var(--main-font-size);
    transition: border-color ease-in-out 300ms;
    border-width: 0 0 1px 0;
    padding-bottom: 1px;
    border-color: #ccc;
  }

  input.form-input:focus {
    border-width: 0 0 2px 0 !important;
    padding-bottom: 0;
    border-color: #6c6a6a;
    outline: none;
  }
</style>
