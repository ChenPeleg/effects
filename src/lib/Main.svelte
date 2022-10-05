<script>
	import CardsPanel from './CardsPanel.svelte';
	import WaveAnimation from './animation/wave-animation.svelte';
</script>

<div class="main-layout-container">
	<WaveAnimation />
	<main>
		<CardsPanel />
	</main>
</div>

<style>
	.main-layout-container {
		padding: 10px;
	}
</style>
