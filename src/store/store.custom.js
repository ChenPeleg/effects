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
      return s;
    });
  };
  const deleteCategory = (catId) =>
    updateCustomCategory(catId, { cardsIds: [], customId: catId, name: "" });
  return { subscribe, updateCustomCategory, deleteCategory };
};
/**@type {CustomCategory[]} */
const baseCategories = [1, 2, 3, 4].map((c) => ({
  cardsIds: [],
  name: "",
  customId: c,
}));

export const categoryStore = createCustomCategoryStore([]);
