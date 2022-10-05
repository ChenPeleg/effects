<script>
	import { MainStore } from '../store/store.main';

	/**@type {CardContent} */
	export let cardContent;
	/**@type {boolean}*/
	export let isCurrent;
	let clicks = 0;

	/**@type {MouseEventHandler} */
	const clickCard = (ev) => {
		MainStore.update((s) => {
			s.currentCard = cardContent.id || 0;
			return s;
		});
		clicks++;
	};
</script>

<div on:click={clickCard} class="card-wrapper">
	<div data-testid={'single-card-' + cardContent.id} class="card-body">
		{cardContent.name}
		{isCurrent ? 'Its Current' : ''}
	</div>
</div>

<style>
	div.card-wrapper {
		display: inline-flex;
	}
	div.card-body {
		display: inline-flex;
		margin: 0px 0px;
		width: 15vw;
		min-width: 100px;
		padding: 1rem;
		height: 10vh;
		background-color: white;
		border-radius: 4px;
		box-shadow: 2px 2px 5px 2px rgb(54, 54, 54);
		cursor: pointer;
		transition: box-shadow 200ms ease-in-out;
	}
	div.card-body:hover {
		box-shadow: 2px 2px 15px 2px black;
	}
</style>
