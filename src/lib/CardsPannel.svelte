<script>
    import Card from "./Card.svelte";
    /**@typedef {import("./types/types").CardContent} CardContent*/

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
        <Card cardContent={card} />
    {/each}
</div>

<style>
    div.cards-pannel-flex {
        width: 80vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
        /* display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1em;
        grid-auto-rows: minmax(100px, auto); */
    }
</style>
