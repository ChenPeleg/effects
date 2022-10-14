import { render } from "@testing-library/svelte";
import { readable, writable } from "svelte/store";
import { pathStore } from "../../store/store.path";
import Route from "./route.svelte";

describe("router", () => {
  it("renders routes if the rout fits the path", () => {
    const route = "abc";
    const chosenSpy = jest
      .spyOn(pathStore, "subscribe")
      .mockImplementation(readable(route).subscribe);
    const { getByTestId } = render(Route, { route: route });
    const slot = getByTestId("route-" + route + "-active");
    expect(slot).toBeTruthy();
  });
  it("does not renders routes if the route doesn't fits the path", () => {
    const route = "abc123";
    const chosenSpy = jest
      .spyOn(pathStore, "subscribe")
      .mockImplementation(readable(route).subscribe);
    const res = render(Route, { route: "abc1234" });
    const slot = res.container.querySelector(
      `[data-testid="route-${route}-active"]`
    );
    expect(slot).toBeFalsy();
  });
  it("renders routes if the rout fits the path with function description", () => {
    const route = "efg";
    const chosenSpy = jest
      .spyOn(pathStore, "subscribe")
      .mockImplementation(readable(route).subscribe);
    const { getByTestId } = render(Route, { route: (r) => r.includes("fg") });
    const slot = getByTestId("route-" + route + "-active");
    expect(slot).toBeTruthy();
  });
});
