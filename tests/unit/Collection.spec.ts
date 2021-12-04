import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Collection from "../../src/components/Collection.vue";
import state from "../mockedState";

describe("Given a Collection component", () => {
  describe("When is rendered", () => {
    test("Then it should render the section html tag", () => {
      const wrapper = mount(Collection, {
        props: { name: "hey", date: "2021", images: [], id: "12345" },

        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              actions: {
                fetchLoadImages: jest.fn(),
                fetchCollection: jest.fn(),
              },
              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<section class="collection">');
    });
  });
});
