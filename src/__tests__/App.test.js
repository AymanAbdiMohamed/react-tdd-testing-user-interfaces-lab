import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of yourself with proper alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const bio = screen.getByText(/developer/i);
  expect(bio).toBeInTheDocument();
});

test("includes a link to your GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/AymanAbdiMohamed"
  );
});

test("includes a link to your LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/ayman-mohamed/"
  );
});
