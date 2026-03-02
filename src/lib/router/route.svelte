<script>
  import { pathStore } from "../../store/store.path";

  /**@type {string | ((path: string)=> boolean)}*/
  let { route, children } = $props();
  let path = $state("");

  $effect(() => {
    const unsubscribe = pathStore.subscribe((p) => {
      path = p;
    });
    return unsubscribe;
  });
</script>

<div id={"route-" + route}>
  {#if pathStore.match(path.replace("#/", ""), route)}
    <div data-testid={"route-" + path.replace("#/", "") + "-active"}>
      {@render children?.()}
    </div>
  {/if}
</div>
