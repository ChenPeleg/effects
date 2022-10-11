import { writable } from "svelte/store";
import { CategoryNames } from "../lib/models/categories.js";
import { allCards } from "../data/allCards";
import { CardsService } from "../services/cards.service";

export const createCardStoreMock = (
  /** @type {CardContent []} */ allTheCards,
  /** @type {string} */ baseCategory
) => {
  const { subscribe, set, update } = writable(allTheCards);

  const categoryChosen = (/** @type {string} */ category) => {
    update((s) => {
      return CardsService.filterCardsByCategory(allTheCards, category);
    });
  };
  const getAllCards = () => [...allTheCards];
  return {
    subscribe,
    getAllCards,
    categoryChosen,
  };
};
