import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Image from "../../src/components/Image.vue";

describe("Given an Image component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render an image", () => {
      render(Image);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
