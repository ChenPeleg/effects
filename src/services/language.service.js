export const LanguageService = {
  /**
   * @param {string} text
   * @returns {string}
   */
  toStandardCase(text) {
    return text.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  },
};
