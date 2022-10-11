import { fireEvent, render } from "@testing-library/svelte";
import { createCardStoreMock } from "../../tests/cardStore.mock";
import CategorySelect from "./CategorySelect.svelte";

import { writable } from "svelte/store";
import { CategoryNames } from "../../lib/models/categories.js";
import { CardStore } from "../../store/store.cards";
import userEvent from "@testing-library/user-event";

let chosenSpy;
describe("category select component", () => {
  beforeEach(() => {
    chosenSpy = jest.spyOn(CardStore, "categoryChosen");
  });
  it("renders select and general category option", () => {
    const { getByText, getByTestId } = render(CategorySelect);
    expect(getByTestId("category-select-select")).toBeTruthy();
    expect(getByTestId("category_general")).toBeTruthy();
  });
  it("update card store after changing category", async () => {
    const { getByText, getByTestId } = render(CategorySelect);
    const select = getByTestId("category-select-select");
    await userEvent.selectOptions(select, CategoryNames.FUNNY);

    expect(chosenSpy).toBeCalledWith(CategoryNames.FUNNY);
  });
});
