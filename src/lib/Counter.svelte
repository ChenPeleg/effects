<script>
  // @ts-ignore
  import * as T from "./types/types.js";

  /**@type {T.Another1}*/
  const crd = null;

  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
