import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../mockedState";
import Register from "../../src/components/Register.vue";

describe("Given a Register component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button submit", () => {
      const wrapper = mount(Register, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              mutations: {
                fetchRegisterUser: jest.fn(),
                getToken: jest.fn(),
              },
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<section class="register">');
    });
  });
});
