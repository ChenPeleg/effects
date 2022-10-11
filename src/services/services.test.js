import { CategoryNames } from "../lib/models/categories";
import { CardsService } from "./cards.service";
import { LanguageService } from "./language.service";

const cardsFixture = [
  {
    color: "blue",
    soundFile: "mizrahi",
    name: "mizrahi",
    id: 21,
    icon: "🎤",
    category: [CategoryNames.SONG],
  },
  {
    color: "blue",
    soundFile: "stop",
    name: "stop",
    id: 22,
    icon: "🎹",
    category: [CategoryNames.GAMES],
  },
  {
    color: "blue",
    soundFile: "love song",
    name: "love song",
    id: 23,
    icon: "🎹",
    category: [CategoryNames.GAMES, CategoryNames.SONG],
  },
];

describe("services", () => {
  describe("card service", () => {
    it("filters cards by category", () => {
      const filtered1 = CardsService.filterCardsByCategory(
        cardsFixture,
        CategoryNames.SONG
      );
      const names = filtered1.map((c) => c.name);

      const filtered2 = CardsService.filterCardsByCategory(
        cardsFixture,
        CategoryNames.GAMES
      );
      const names2 = filtered2.map((c) => c.name);

      expect(names.join(",")).toBe("mizrahi,love song");

      expect(names2.join(",")).toBe("stop,love song");
    });
  });
  describe("language service", () => {
    it("to standard case", () => {
      const abc = LanguageService.toStandardCase("ABC");

      const xyz = LanguageService.toStandardCase("xYz");
      expect(abc).toBe("Abc");
      expect(xyz).toBe("Xyz");
    });
  });
});
