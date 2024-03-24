<script>
  import CategoryCards from "./components/CaegoryCards.svelte";
  import CategoryEditor from "./components/CategoryEditor.svelte";
  import EditCategories from "./components/ChooseEditCategories.svelte";
</script>

<div id="settings-component">
  <EditCategories />
  <CategoryEditor />
  <div class="cards-wrapper">
    <CategoryCards />
  </div>
</div>

<style>
</style>
