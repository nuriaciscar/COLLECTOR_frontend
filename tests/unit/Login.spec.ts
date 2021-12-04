import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../mockedState";
import Login from "../../src/components/Login.vue";

describe("Given a Login component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button submit", () => {
      const wrapper = mount(Login, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              mutations: {
                fetchLoginUser: jest.fn(),
                getToken: jest.fn(),
              },
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<h2 class="login__title">');
    });
    test("Then it should render a section html tag", () => {
      const store = createStore({
        state() {
          return state;
        },
      });

      const wrapper = mount(Login, {
        global: {
          plugins: [router, store],
        },
        stubs: ["router-link", "router-view"],
      });

      expect(wrapper.html()).toContain('<section class="login">');
    });
  });
});
