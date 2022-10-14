import { render } from "@testing-library/svelte";
import { readable, writable } from "svelte/store";
import { pathStore } from "../../store/store.path";
import Route from "./route.svelte";

describe("router", () => {
  it("show route correctly", () => {
    const route = "abc";
    const chosenSpy = jest
      .spyOn(pathStore, "subscribe")
      .mockImplementation(readable(route).subscribe);
    const { getByTestId } = render(Route, { route: route });
    const slot = getByTestId("route-" + route + "-active");
    expect(slot).toBeTruthy();
  });
  it("show route correctly with function description", () => {
    const route = "efg";
    const chosenSpy = jest
      .spyOn(pathStore, "subscribe")
      .mockImplementation(readable(route).subscribe);
    const { getByTestId } = render(Route, { route: (r) => r.includes("fg") });
    const slot = getByTestId("route-" + route + "-active");
    expect(slot).toBeTruthy();
  });
});
