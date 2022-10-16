<script>
  import CaegoryCards from "./components/CaegoryCards.svelte";
  import CategoryEditor from "./components/CategoryEditor.svelte";
  import EditCategories from "./components/ChooseEditCategories.svelte";
</script>

<div>
  <EditCategories />
  <CategoryEditor />
  <div class="cards-wrapper">
    <CaegoryCards />
  </div>
</div>

<style>
</style>
