<script>
  import { CardStore } from "../store/store.cards";
  import { MainStore } from "../store/store.main";
  import Card from "./Card.svelte";

  let currentCard = $state(0);

  $effect(() => {
    const unsubscribe = MainStore.subscribe((s) => (currentCard = s.currentCard));
    return unsubscribe;
  });

  let cards = $state([]);

  $effect(() => {
    const unsubscribe = CardStore.subscribe((storeCards) => {
      cards = storeCards;
    });
    return unsubscribe;
  });
</script>

<div class="cards-pannel-flex">
  {#each cards as card (card.id)}
    <Card isCurrent={card.id === currentCard} cardContent={{ ...card }} />
  {/each}
</div>

<style>
  div.cards-pannel-flex {
    width: 95vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.7em;
  }
</style>
