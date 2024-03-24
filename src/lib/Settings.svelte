<script>
    import CategoryCards from "./components/CaegoryCards.svelte";
    import CategoryEditor from "./components/CategoryEditor.svelte";
    import EditCategories from "./components/ChooseEditCategories.svelte";
    import {MainStore} from '../store/store.main.js';
    import {appConfig} from '../config/appConfig.js';
    import {onDestroy} from 'svelte';


    let showSettings = true;
    const unsubscribe1 = MainStore.subscribe((s) => {
        if (appConfig.hasSaveOption || appConfig.environmentName === 'development') {
            showSettings = !!s.user;
        }
    });
    onDestroy(() => {
        unsubscribe1();
    });
</script>

<div id="settings-component">
    {#if showSettings}

        <EditCategories/>
        <CategoryEditor/>
        <div class="cards-wrapper">
            <CategoryCards/>
        </div>
    {:else}
        <div class="no-user">
            <h2>Sign in to save your categories</h2>
        </div>
    {/if}

</div>

<style>
</style>
