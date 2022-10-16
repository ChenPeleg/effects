import { storageService } from "../services/storage.service";
import { writable } from "svelte/store";

const createCustomCategoryStore = (
  /** @type {CustomCategory []} */ allCustomCategories
) => {
  const { subscribe, set, update } = writable(allCustomCategories);
  /** @type {(catId : number,category :CustomCategory )=> void} */
  const updateCustomCategory = (catId, category) => {
    update((s) => {
      const cat = s.find((c) => c.customId === catId);
      cat.cardsIds = category.cardsIds;
      cat.name = category.name;
      storageService.saveCategories(s);
      return s;
    });
  };
  const deleteCategory = (catId) =>
    updateCustomCategory(catId, { cardsIds: [], customId: catId, name: "" });
  /** @type {( category :CustomCategory )=> boolean} */
  const isCatExist = (category) =>
    !!(category.name && category.cardsIds.length);
  return { subscribe, updateCustomCategory, deleteCategory, isCatExist };
};
/**@type {CustomCategory[]} */
const baseCategories = [1, 2, 3, 4].map((c) => ({
  cardsIds: [],
  name: "",
  customId: c,
}));

const lsCategories = storageService.getCategories();

export const categoryStore = createCustomCategoryStore(
  lsCategories || baseCategories
);
