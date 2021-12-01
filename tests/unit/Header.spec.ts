import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Header from "../../src/components/Header.vue";

describe("Given a Header component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a 'Núria Ciscar' text", () => {
      render(Header);

      const logo = screen.getByText("COLLECTOR");

      expect(logo).toBeInTheDocument();
    });
  });
});
