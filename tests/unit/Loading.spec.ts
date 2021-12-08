import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../mockedState";
import Loading from "../../src/components/Loading.vue";

describe("Given a Loading component", () => {
  describe("When it's' rendered", () => {
    test("Then it should render a div with class 'lds-roller'", async () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Loading, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-link", "router-view"],
      });

      await router.isReady();
      expect(wrapper.html()).toContain('<div class="lds-roller">');
    });
  });
});
