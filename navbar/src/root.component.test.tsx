import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { baseElement } = render(<Root />);
    expect(baseElement).toBeInTheDocument();
  });
  it("should have the correct title", () => {
    const { getByText } = render(<Root />);
    expect(getByText("Built Labs")).toBeInTheDocument();
  });
});
