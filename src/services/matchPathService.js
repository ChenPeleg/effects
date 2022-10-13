export const MatchPathService = {
  /**
   * @param {string} current
   * @param {string | ((current : string)=> boolean)} matchRule
   * @return {boolean}
   */
  match: (current, matchRule) => {
    if (typeof matchRule === "function") {
      return matchRule(current);
    }
    return matchRule === current;
  },
};
