import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Footer from "../../src/components/Footer.vue";

describe("Given a Footer component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a 'Núria Ciscar' text", () => {
      render(Footer);

      const elementText1 = screen.getByText("Núria Ciscar");

      expect(elementText1).toBeInTheDocument();
    });
  });
});
