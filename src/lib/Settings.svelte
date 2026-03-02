<script>
    import CategoryCards from "./components/CaegoryCards.svelte";
    import CategoryEditor from "./components/CategoryEditor.svelte";
    import EditCategories from "./components/ChooseEditCategories.svelte";
    import {MainStore} from '../store/store.main.js';
    import {appConfig} from '../config/appConfig.js';

    let showSettings = $state(true);
    $effect(() => {
        const unsubscribe = MainStore.subscribe((s) => {
            if (appConfig.hasSaveOption || appConfig.environmentName === 'development') {
                showSettings = !!s.user;
            }
        });
        return unsubscribe;
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
