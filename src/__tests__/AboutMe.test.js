import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMe from "../components/AboutMe";

describe("AboutMe component", () => {
  it("renders an image with alt text", () => {
    render(<AboutMe />);
    const image = screen.getByAltText("A picture of me");
    expect(image).toBeInTheDocument();
  });

  it('renders an h2 with the text "About Me"', () => {
    render(<AboutMe />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("About Me");
  });

  it("renders a paragraph with biography text", () => {
    render(<AboutMe />);
    const paragraph = screen.getByText(
      /I'm a highly advanced language model, capable of.../i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders a link to GitHub", () => {
    render(<AboutMe />);
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/Bethwel123");
  });

  it("renders a link to LinkedIn", () => {
    render(<AboutMe />);
    const linkedInLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/bethwel-langat-3b7b97312"
    );
  });
});
