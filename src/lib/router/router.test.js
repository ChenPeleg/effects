import { render } from "@testing-library/svelte";
import Route from "./route.svelte";

describe("router", () => {
  it("show route correctly", () => {
    const { getByTestId } = render(Route, { route: "abc" });
  });
});
