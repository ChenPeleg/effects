<script>
    import { MainStore } from "../store/store.main.js";
    import Card from "./Card.svelte"; 
    /**
	 * @type {number}
	 */
    let currentCard /**@typedef {number} */;

    /**@typedef {CardContent} */
    const unsbscribe = MainStore.subscribe(
        (s) => (currentCard = s.currentCard)
    );
    /**@type {CardContent[]}*/
    const cards = [
        { color: "green", content: "car keys", name: "car", id: 1 },
        { color: "red", content: "laughing kid", name: "laugh", id: 2 },
        { color: "blue", content: "scream", name: "scream", id: 3 },
        { color: "blue", content: "claping", name: "claping", id: 4 },
        { color: "green", content: "car keys", name: "horn", id: 5},
        { color: "red", content: "laughing kid", name: "laugh 2", id: 6 },
        { color: "blue", content: "scream", name: "winning", id: 7 },
        { color: "blue", content: "claping", name: "boo", id: 8 },
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
