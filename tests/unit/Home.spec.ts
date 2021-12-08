import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import Home from "../../src/views/Home.vue";
import state from "../mockedState";
import CollectionList from "../../src/components/CollectionList.vue";

describe("Given a Home component", () => {
  describe("When is rendered", () => {
    test("Then it should render a home page with an image and a collection list ", async () => {
      const wrapper = mount(Home, {
        global: {
          mocks: {
            methods: {
              redirectToLogin: jest.fn(),
            },
            plugins: [router],
          },
          components: {
            CollectionList,
          },
          stubs: ["router-link", "router-view"],
        },
      });
      await router.isReady();
      expect(wrapper.html()).toContain('section class="home"">');
    });
  });
});
