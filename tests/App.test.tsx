import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/routes/App";
import { MemoryRouter } from "react-router";

describe("App component", () => {
  it("Snapshot test", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("Check heading text", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const button = screen.getByRole("heading", {
      name: "Hello from the main page of the app!",
    });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(
      /Hello from the main page of the app!/i,
    );
  });
});
