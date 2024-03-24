<script>
  import { CardStore } from "../../store/store.cards";
  import { LanguageService } from "../../services/language.service";
  import { CategoryNames } from "../models/categories";
  import { pathStore } from "../../store/store.path";
  import { onDestroy, onMount } from "svelte";
  import { categoryStore } from "../../store/store.custom";
  import { storageService } from "../../services/storage.service";

  const CUSTOM_INDICATOR = "__custom__";

  /**@type {string }*/
  let selected = "";
  let path;
  /**@type {CustomCategory[]}*/
  let customCategories = [];

  let categories = Object.keys(CategoryNames).map((key) => CategoryNames[key]);

  const categoryChanged = (ev) => {
    storageService.saveSelection(selected);
    if (selected.includes(CUSTOM_INDICATOR)) {
      CardStore.customCategoryChosen(
        (selected || "").replace(CUSTOM_INDICATOR, "")
      );
    } else {
      CardStore.categoryChosen(selected || "");
    }
  };
  let lang;
  const unsubscribe = pathStore.subscribe((p) => {
    path = p;
  });
  const unsubscribe2 = categoryStore.subscribe((s) => {
    customCategories = s.filter((c) => categoryStore.isCatExist(c));
  });

  onDestroy(() => {
    unsubscribe();
    unsubscribe2();
  });
  onMount(() => {
    const saved = storageService.getSelection();
    if (saved) {
      selected = saved;
      categoryChanged();
    }
  });
</script>

<div>
  <select
    class={ `${lang === "en" ? "rtl" : "ltr"} select-category` }
    data-testid="category-select-select"
    disabled={!pathStore.match(path.replace("#/", ""), "")}
    bind:value={selected}
    on:change={categoryChanged}
  >
    {#each customCategories as customCat}
      <option
        data-testid={"custumCategories_" + customCat.name}
        value={customCat.name + CUSTOM_INDICATOR}
      >
        {LanguageService.toStandardCase(customCat.name)}
      </option>
    {/each}
    {#each categories as category}
      <option data-testid={"category_" + category} value={category}>
        {LanguageService.toStandardCase(category)}
      </option>
    {/each}
  </select>
</div>

<style>
  select {
    font-size: calc(var(--main-font-size) - 5px);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    -webkit-appearance: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: white
      url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
      no-repeat;
    height: 1.8rem;
    --base-side-gap: 0.5rem;
    margin-right: var(--base-side-gap);
    padding: 0.15rem var(--base-side-gap);
    margin-left: var(--base-side-gap);
    background-position-y: 2px;
    background-position-x: 2%;
    max-width: 50vw;
    border: 1px solid #dfdfdf;
    outline-color: transparent;

    border-radius: 0.25em;
    box-shadow: var(--main-box-shadow);

    background-position-x: 98%;
    padding-right: 2rem;
  }
  .ltr {
    background-position-x: 98%;
    padding-right: 2rem;
  }
  .rtl {
    background-position-x: 2%;
    padding-left: 2rem;
  }
  select :focus-visible {
    outline: transparent;
  }
  select :hover:enabled {
    box-shadow: var(--main-box-shadow-hover);
  }
  @media (max-width: 600px) {
    select {
      max-width: 140px;
    }
  }
</style>
