<script>
  import { SettingsStore } from "../../store/settings.store";
  import { onDestroy } from "svelte";
  import { categoryStore } from "../../store/store.custom.js";

  let name;
  let slotId;
  /**@type {CustomCategory []}*/
  let allCats = [];
  const unsubscribe1 = SettingsStore.subscribe((s) => {
    slotId = s.slotInEdit;
    const currentCat = allCats.find((c) => c.customId === slotId);
    name = currentCat ? currentCat.name : name;
  });
  categoryStore.subscribe((cats) => (allCats = cats));
  const updatename = () => {
    const currentCat = allCats.find((c) => c.customId === slotId);
    if (!currentCat) {
      return;
    }
    currentCat.name = name;
    categoryStore.updateCustomCategory(slotId, currentCat);
  };
  const clear = () => {
    categoryStore.deleteCategory(slotId);
  };
  onDestroy(() => {
    unsubscribe1();
  });
</script>

<div class="wrapper" id="category-editor-component">
  <div class="row">
    <div class="input-wrapper">
      <input
        class="form-input"
        bind:value={name}
        maxlength="20"
        on:focusout={(ev) => updatename()}
      />
    </div>
    <button class="clear-button" on:click={(ev) => clear()}>Clear</button>
  </div>
</div>

<style>
  div.row {
    display: flex;
    flex-direction: row;
  }
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
  .clear-button {
    font-size: calc(var(--main-font-size) - 5px);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    min-width: 140px;

    background: rgb(222, 0, 0) no-repeat;
    height: 2.4rem;
    --base-side-gap: 0.5rem;
    margin-right: var(--base-side-gap);
    margin-left: var(--base-side-gap);

    border: 0px solid #dfdfdf;

    border-radius: 0.25em;
    box-shadow: var(--main-box-shadow);
    padding: 0.25rem var(--base-side-gap);
  }
  .clear-button:hover {
    background: rgb(255, 0, 0) no-repeat;
  }
  @media (max-width: 576px) {
    input.form-input {
      font-size: calc(var(--main-font-size) - 10px);
      max-width: 155px;
    }
    .input-wrapper {
      max-height: 24px;
      padding: 2px;
      max-width: 160px;
    }
    div.wrapper {
      margin: 5px;
    }
  }
  @media (max-width: 576px) {
    .clear-button {
      font-size: calc(var(--main-font-size) - 10px);
      cursor: pointer;
      transition: box-shadow 0.2s ease-in-out;
      cursor: pointer;
      transition: box-shadow 0.2s ease-in-out;
      min-width: 80px;

      background: rgb(222, 0, 0) no-repeat;
      height: 1.5rem;
      --base-side-gap: 0.5rem;
      margin-right: var(--base-side-gap);
      margin-left: var(--base-side-gap);

      border: 0px solid #dfdfdf;

      border-radius: 0.25em;
      box-shadow: var(--main-box-shadow);
      padding: 0.25rem var(--base-side-gap);
    }
  }
</style>
