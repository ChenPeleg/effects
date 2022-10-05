<script>
	import Main from '../lib/Main.svelte';
	import Header from './Header.svelte';
	import '../assets/css/fonts.css';
</script>

<svelte:head>
	<meta title="Effects" />
	<title>Effects</title>
</svelte:head>
<div class="app">
	<Header />

	<main />
	<slot />
	<Main />
	<footer />
</div>

<style>
	:global(:root) {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		--main-font-size: 24px;
		--main-current-color: rgb(183, 184, 198);
		--main-box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
		--main-box-shadow-hover: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
	}
</style>
