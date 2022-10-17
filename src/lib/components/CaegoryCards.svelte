<script>
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { CardStore } from "../../store/store.cards";
  import { categoryStore } from "../../store/store.custom";
  import { SettingsStore } from "../../store/settings.store";
  import { onDestroy } from "svelte";

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
  const allCards = CardStore.getAllCards();
  /**@type { CustomCategory[]}*/
  let allCategories = [];
  let catInEdit = null;

  let cards = [
    {
      id: 1,
      isInCategory: false,
      description: "write some docs",
      cardContent: {},
    },
  ];
  function updateCards() {
    const cureentCategory = allCategories.find((c) => c.customId === catInEdit);
    if (!cureentCategory) {
      return;
    }

    cards = allCards.map((c) => {
      return {
        id: c.id,
        isInCategory: cureentCategory.cardsIds.includes(c.id),
        description: c.icon + " " + c.name,
        cardContent: c,
      };
    });
  }
  let unsbscribe = categoryStore.subscribe((s) => (allCategories = s));
  let unsbscribe2 = SettingsStore.subscribe((s) => {
    catInEdit = s.slotInEdit;
    updateCards();
  });
  onDestroy(() => {
    unsbscribe();
    unsbscribe2();
  });

  const mark = (card, isInCategory) => {
    card.isInCategory = isInCategory;
    cards = cards.filter((t) => t !== card);
    cards = cards.concat(card);
    const currentCategory = allCategories.find((c) => c.customId === catInEdit);
    if (!currentCategory) {
      return;
    }
    categoryStore.updateCustomCategory(catInEdit, {
      cardsIds: cards.filter((t) => t.isInCategory).map((c) => c.id),
      name: currentCategory.name,
      customId: catInEdit,
    });
  };
</script>

<div class="board">
  <div class="left">
    <h3>Choose effect</h3>
    {#each cards.filter((t) => !t.isInCategory) as card (card.id)}
      <label
        in:receive={{ key: card.id }}
        out:send={{ key: card.id }}
        animate:flip
      >
        <input type="checkbox" on:change={() => mark(card, true)} />
        {card.description}
      </label>
    {/each}
  </div>

  <div class="right">
    <h3>Inside categories</h3>
    {#each cards.filter((t) => t.isInCategory) as card (card.id)}
      <label
        class="isInCategory"
        in:receive={{ key: card.id }}
        out:send={{ key: card.id }}
        animate:flip
      >
        <input type="checkbox" checked on:change={() => mark(card, false)} />
        {card.description}
      </label>
    {/each}
  </div>
</div>

<style>
  .right,
  .left {
    display: flex;
    flex-direction: column;
  }
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  h3 {
    font-weight: 200;
    user-select: none;
    margin: 0 0 10px 0;
  }

  label {
    position: relative;
    line-height: 1.2;
    padding: 0.5em 2.5em 0.5em 2em;
    margin: 0 0 0.5em 0;
    border-radius: 2px;
    user-select: none;
    border: 1px solid hsl(240, 8%, 70%);
    background-color: hsl(240, 8%, 93%);
    color: #333;
  }

  input[type="checkbox"] {
    position: absolute;
    left: 0.5em;
    top: 0.6em;
    margin: 0;
  }

  .isInCategory {
    border: 1px solid hsl(240, 8%, 90%);
    background-color: hsl(240, 8%, 98%);
  }
</style>
