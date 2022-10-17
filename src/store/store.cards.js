import { writable } from "svelte/store";
import { CategoryNames } from "../lib/models/categories.js";
import { allCards } from "../data/allCards";
import { CardsService } from "../services/cards.service";
import { categoryStore } from "./store.custom.js";

const createCardStore = (
  /** @type {CardContent []} */ allTheCards,
  /** @type {string} */ baseCategory
) => {
  const { subscribe, set, update } = writable(allTheCards);

  const categoryChosen = (/** @type {string} */ category) => {
    update((s) => {
      return CardsService.filterCardsByCategory(allTheCards, category);
    });
  };
  const customCategoryChosen = (/** @type {string} */ category) => {
    update((s) => {
      const allCustomCats = categoryStore.getAll();
      console.log(allCustomCats);
      const SelectedCategory = allCustomCats.find((c) => c.name === category);

      return CardsService.filterCardsByCustomCategory(
        allTheCards,
        SelectedCategory
      );
    });
  };
  const getAllCards = () => [...allTheCards];
  return {
    subscribe,
    getAllCards,
    categoryChosen,
    customCategoryChosen,
  };
};
export const CardStore = createCardStore(allCards, CategoryNames.GENERAL);
