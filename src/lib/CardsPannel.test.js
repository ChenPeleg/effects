import { render } from "@testing-library/svelte/svelte5";

// @ts-ignore
import CardsPanel from "./CardsPanel.svelte";

describe("Cards Panel", () => {
  it("Cards renders Cards", () => {
    const { getByText, getByTestId } = render(CardsPanel);
    const cards = getByTestId("single-card-1");
    expect(cards).toBeTruthy();
  });
});
