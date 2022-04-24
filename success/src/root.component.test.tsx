import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { baseElement } = render(<Root />);
    expect(baseElement).toBeInTheDocument();
  });

  it("The applicant's name should be in the document", () => {
    global.window = Object.create(window);
    const url = "http://built-labs.com/success?firstName=TestName";
    Object.defineProperty(window, "location", {
      value: {
        href: url,
      },
    });
    expect(window.location.href).toEqual(url);

    const { getByText } = render(<Root />);
    expect(getByText("TestName")).toBeInTheDocument();
  });

  it("The specified success message should be in the document", () => {
    const { getByText } = render(<Root />);
    expect(getByText("Congrats, you submitted the form successfully")).toBeInTheDocument();
  });
});
