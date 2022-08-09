<script>
    import App from "src/App.svelte";
    import { MainStore } from "../store/store.main.js";

    import Card from "./Card.svelte";

    /**@typedef {number} */
    let currentCard;

    /**@typedef {CardContent} */
    const unsbscribe = MainStore.subscribe(
        (s) => (currentCard = s.currentCard)
    );
    /**@type {CardContent[]}*/
    const cards = [
        { color: "green", content: "car keys", name: "car" },
        { color: "red", content: "laughing kid", name: "laugh" },
        { color: "blue", content: "scream", name: "scream" },
        { color: "blue", content: "claping", name: "claping" },
        { color: "green", content: "car keys", name: "horn" },
        { color: "red", content: "laughing kid", name: "laugh 2" },
        { color: "blue", content: "scream", name: "winning" },
        { color: "blue", content: "claping", name: "boo" },
    ];
</script>

<div class="cards-pannel-flex">
    {#each cards as card}
        <Card
            isCurrent={cards.indexOf(card) === currentCard}
            cardContent={{ ...card, id: cards.indexOf(card) }}
        />
    {/each}
</div>

<style>
    div.cards-pannel-flex {
        width: 80vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
    }
</style>
