<script>
  import { pathStore } from "../../store/store.path";
  import { onDestroy } from "svelte";
  /**@type {string | ((path: string)=> boolean)}*/
  export let route;
  let path;

  const unsubscribe = pathStore.subscribe((p) => {
    path = p;
  });

  onDestroy(unsubscribe);
</script>

<div id={"route-" + route}>
  {#if pathStore.match(path.replace("#/", ""), route)}
    <div>
      <slot />
    </div>
  {/if}
</div>
