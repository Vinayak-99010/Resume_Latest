import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders job tracker header", () => {
  render(<App />);
  expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
});
