export const CardsService = {
  /**
   * @param {CardContent[]} cards
   * @param {string} category
   * @returns {CardContent[]}
   */
  filterCardsByCategory(cards, category) {
    return cards.filter(
      (c) =>
        c.category.includes(category.toLowerCase()) ||
        c.category.includes(category)
    );
  },
};
