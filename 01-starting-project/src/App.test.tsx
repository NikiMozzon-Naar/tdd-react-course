import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the header with React Essentials title", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /react essentials/i })).toBeInTheDocument();
  });

  it("renders the main content", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /time to get started/i })).toBeInTheDocument();
  });
});
