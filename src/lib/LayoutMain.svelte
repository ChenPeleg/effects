<script>
  import svelteLogo from "../assets/svelte.svg";
  import Card from "./Card.svelte";
  import Counter from "./Counter.svelte";
  /**@typedef {import('./Card.svelte').CardContent} CardContent */

  const cardcont = {};
</script>

<main>
  <Card cardContent={{ color: "blue", content: "hey", name: "my card" }} />
</main>
