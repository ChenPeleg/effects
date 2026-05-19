import { render, fireEvent, screen } from "@testing-library/svelte/svelte5";

// @ts-ignore
import Card from "./Card.svelte";

/**@type {CardContent} */
const cardContent = {
  color: "green",
  soundFile: "car keys",
  name: "car",
  id: 1,
  icon: "🥁",
};
it("about page has expected h1", () => {
  const { getByText, getByTestId } = render(Card, {
    cardContent: cardContent,
    isCurrent: false,
  });
  const cardBody = getByTestId("single-card-1");
  expect(cardBody).toBeTruthy();
});

