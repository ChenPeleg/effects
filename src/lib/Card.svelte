<script>
    // @ts-ignore
    import * as T from "./types/types";

    /**@import {T.CardContent}*/
    /**@type {T.CardContent}*/
    export let cardContent;

    let cardcond;
</script>

<div class="card-wrapper">
    <div class="card-body">{cardContent.name}</div>
</div>

<style>
    div.card-wrapper {
        display: flexbox;
    }
    div.card-body {
        width: 20vw;
        padding: 1rem;
        height: 10vh;
        background-color: white;
        border-radius: 1rem;
        box-shadow: 2px 2px 10px 2px black;
        cursor: pointer;
        transition: box-shadow 200ms ease-in-out;
    }
    div.card-body:hover {
        box-shadow: 2px 2px 15px 2px black;
    }
</style>
