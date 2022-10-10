<script>
  import { CategoryNames } from "../models/categories";

  let selected;
  let categories = Object.keys(CategoryNames).map((key) => CategoryNames[key]);
  const categoryChanged = (cat) => {};
  let lang;
</script>

<div>
  <select
    class={lang === "en" ? "rtl" : "ltr"}
    bind:value={selected}
    on:change={categoryChanged}
  >
    {#each categories as category}
      <option value={category}>
        {category}
      </option>
    {/each}
  </select>
</div>

<style>
  select {
    font-size: calc(var(--main-font-size)-3);
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
</style>
