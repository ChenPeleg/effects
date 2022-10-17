import { CategoryNames } from "../lib/models/categories";

export const CardsService = {
  /**
   * @param {CardContent[]} cards
   * @param {string} category
   * @returns {CardContent[]}
   */
  filterCardsByCategory(cards, category) {
    if (category === CategoryNames.ALL) {
      return cards;
    }
    return cards.filter(
      (c) =>
        c.category.includes(category.toLowerCase()) ||
        c.category.includes(category)
    );
  },
  /**
   * @param {CardContent[]} cards
   * @param {CustomCategory} customCategory
   * @returns {CardContent[]}
   */
  filterCardsByCustomCategory(cards, customCategory) {
    return cards.filter((c) => customCategory.cardsIds.includes(c.id));
  },
};
