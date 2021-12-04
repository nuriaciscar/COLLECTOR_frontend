import { mount } from "@vue/test-utils";
import router from "../../src/router";
import CollectionList from "../../src/components/CollectionList.vue";
import state from "../mockedState";

describe("Given a CollectionList component", () => {
  describe("When is rendered", () => {
    test("Then it should render the a list of collections", () => {
      const wrapper = mount(CollectionList, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              actions: {
                fetchCollections: jest.fn(),
              },
              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<section class="collectionList">');
    });
  });
});
