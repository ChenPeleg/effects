<script>
	import { onDestroy } from 'svelte';
	import { CardsStore } from '../store/store.cards';
	import { MainStore } from '../store/store.main';
	import Card from './Card.svelte';
	/**
	 * @type {number}
	 */
	let currentCard /**@typedef {number} */;

	/**@typedef {CardContent} */
	const unsbscribe = MainStore.subscribe((s) => (currentCard = s.currentCard));
	/**@type {CardContent[]}*/

	let cards = [];

	const unsubscribe = CardsStore.subscribe((Storecards) => (cards = Storecards));
	onDestroy(unsubscribe);
</script>

<div class="cards-pannel-flex">
	{#each cards as card}
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
