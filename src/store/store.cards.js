import { AudioService } from "../services/audio.service";
import { readable, writable } from "svelte/store";
import { CategoryNames } from "../lib/models/categories.js";
import { allCards } from "../data/allCards";
import { CardsService } from "../services/cards.service";

export const CardsStore = readable(allCards);

const createCardStore = (
  /** @type {CardContent []} */ allTheCards,
  /** @type {string} */ category
) => {
  const { subscribe, set, update } = writable(allTheCards);

  const categoryChosen = (/** @type {string} */ category) => {
    update((s) => {
      return CardsService.filterCardsByCategory(s, category);
    });
  };
  const getAllCards = () => [...allTheCards];
  return {
    subscribe,
    getAllCards,
    categoryChosen,
  };
};
