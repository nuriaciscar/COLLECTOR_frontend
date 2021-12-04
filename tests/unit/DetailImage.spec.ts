import { mount } from "@vue/test-utils";
import router from "../../src/router";
import DetailImage from "../../src/views/DetailImage.vue";
import state from "../mockedState";

const mockRouter = {
  push: jest.fn(),
};

describe("Given a DetailImage component", () => {
  describe("When is rendered", () => {
    test("Then it should render the image selected section html tag", () => {
      const wrapper = mount(DetailImage, {
        props: {
          collection: "jeje",
          name: "christmas",
          description: "hi",
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

      expect(wrapper.html()).toContain('<div class="detail">');
    });
  });
});
