import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Login from "../../src/components/Login.vue";

describe("Given a Login component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button submit", () => {
      render(Login);

      const buttonForm = screen.getByRole("button", { name: /→/i });
      const username = screen.getByLabelText(/username/i);

      expect(buttonForm).toBeInTheDocument();
      expect(username).toBeInTheDocument();
    });
  });
  describe("When the user types on the username input'", () => {
    test("Then it should render a username input with the text typed inside", () => {
      render(Login);

      const text = "Luis";
      const inputUsername = screen.getByLabelText(/username/i);
      userEvent.type(inputUsername, text);

      expect(inputUsername).toHaveValue(text);
    });
  });
});
