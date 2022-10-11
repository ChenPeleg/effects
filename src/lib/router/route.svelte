<script>
  import { pathname } from "src/store/store.path";
  import { onDestroy } from "svelte";

  export let route;
  let path;

  const unsubscribe = pathname.subscribe((p) => (path = p));
  onDestroy(unsubscribe);
</script>

<div id={"route-" + route}>
  <div>
    {$$props}
  </div>
</div>
