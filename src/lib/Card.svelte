<script>
	import { LanguageService } from '../services/language.service';
	import { MainStore } from '../store/store.main';

	/**@type {CardContent} */
	export let cardContent;
	/**@type {boolean}*/
	export let isCurrent;
	let clicks = 0;

	const standartCaseName = LanguageService.toStandardCase(cardContent.name);

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
	<div data-testid={'single-card-' + cardContent.id} class="card-body" class:isCurrent>
		<span class="card-icon">{cardContent.icon}</span>
		{standartCaseName}
	</div>
</div>

<style>
	div.card-wrapper {
		display: inline-flex;
	}

	div.card-body {
		display: inline-flex;
		justify-content: space-around;
		align-items: center;
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
		background: var(--main-current-color-gradient);
	}
	div.card-body:hover {
		box-shadow: var(--main-box-shadow-hover);
	}
	div.card-body > span.card-icon {
		font-size: 32px;
	}
</style>
