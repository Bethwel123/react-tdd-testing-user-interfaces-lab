import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
  it("renders AboutMe component correctly", () => {
    render(<App />);

    const image = screen.getByAltText("A picture of me");
    expect(image).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("About Me");

    const paragraph = screen.getByText(
      /I'm a highly advanced language model, capable of.../i
    );
    expect(paragraph).toBeInTheDocument();

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/Bethwel123");

    const linkedInLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/bethwel-langat-3b7b97312"
    );
  });
});
