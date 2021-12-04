import { mount } from "@vue/test-utils";
import router from "../../src/router";
import DetailCollection from "../../src/views/DetailCollection.vue";
import state from "../mockedState";

describe("Given a DetailCollection component", () => {
  describe("When is rendered", () => {
    test("Then it should render the colelctionselected section html tag", () => {
      const wrapper = mount(DetailCollection, {
        props: {
          name: "food",
          date: "various",
          images: [],
          id: "1234",
        },
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              actions: {
                fetchLoadCollection: jest.fn(),
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
