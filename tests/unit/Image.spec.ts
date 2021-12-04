import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Image from "../../src/components/Image.vue";
import state from "../mockedState";

describe("Given an Image component", () => {
  describe("When is rendered", () => {
    test("Then it should render the image section html tag", () => {
      const wrapper = mount(Image, {
        props: {
          image: "https://image.png",
          date: 2021 - 10 - 10,
          description: "an image",
          id: "12345",
          category: "art",
          owner: [],
        },
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              actions: {
                fetchLoadImage: jest.fn(),
              },
              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<div class="image">');
    });
  });
});
