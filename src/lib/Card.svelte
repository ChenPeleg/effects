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

<div on:click={clickCard} class:isCurrent>
	<div data-testid={'single-card-' + cardContent.id} class="card-body" class:isCurrent>
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
		padding: 0.5rem;
		height: 10vh;
		background-color: white;
		border-radius: 4px;
		box-shadow: var(--main-box-shadow);
		cursor: pointer;
		font-size: 24px;
		transition: box-shadow 200ms ease-in-out;
	}
	div.card-body.isCurrent {
		background-color: aquamarine;
		background-color: var(--main-current-color);
	}
	div.card-body:hover {
		box-shadow: 0 4px 8px 3px rgb(60 64 67 / 35%);
	}
</style>
