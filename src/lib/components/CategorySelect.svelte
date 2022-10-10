<script>
  import { CategoryNames } from "../models/categories";

  let selected;
  let categories = Object.keys(CategoryNames).map((key) => CategoryNames[key]);
  const categoryChanged = (cat) => {};
</script>

<div>
  <select bind:value={selected} on:change={categoryChanged}>
    {#each categories as category}
      <option value={category}>
        {category}
      </option>
    {/each}
  </select>
</div>
