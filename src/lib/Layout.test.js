import { render } from "@testing-library/svelte/svelte5";
import Layout from "./Layout.svelte";

describe("layout", () => {
  it("renders header and global styles", () => {
    const { getByText, getByTestId } = render(Layout);
    const header = getByTestId("app-header");
    expect(header).toBeTruthy();
    const styles = getByTestId("global-styles");
    expect(styles).toBeTruthy();
  });
});
