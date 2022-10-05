<script>
	import Layout from '../lib/Layout.svelte';
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
	<Layout />
	<footer />
</div>

<style>
	:root {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
