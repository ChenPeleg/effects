import { render } from "@testing-library/svelte";
import { createCardStoreMock } from "../../tests/cardStore.mock";
import CategorySelect from "./CategorySelect.svelte";

import { writable } from "svelte/store";
import { CategoryNames } from "../../lib/models/categories.js";
import { CardStore } from "../../store/store.cards";

let chosenSpy;
describe("category select component", () => {
  beforeEach(() => {
    chosenSpy == jest.spyOn(CardStore, "categoryChosen");
  });
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(CategorySelect);
    expect(getByTestId("category_General")).toBeTruthy();
  });
});
