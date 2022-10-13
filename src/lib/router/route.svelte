<script>
  import { pathname } from "../../store/store.path";
  import { onDestroy } from "svelte";
  /**@type {string | ((path: string)=> boolean)}*/
  export let route;
  let path;

  const unsubscribe = pathname.subscribe((p) => {
    path = p;
  });

  onDestroy(unsubscribe);
</script>

<div id={"route-" + route}>
  {#if route === path.replace("#", "")}
    <div>
      <slot />
    </div>
  {/if}
</div>
