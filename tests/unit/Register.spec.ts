import axios from "axios";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../mockedState";
import Register from "../../src/components/Register.vue";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Given a Register component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a section html tag", () => {
      const wrapper = mount(Register, {
        global: {
          plugins: [router],
          mocks: {
            methods: {
              onFileChange: jest.fn(),
              onChangeForm: jest.fn(),
              onSubmit: jest.fn(),
              correctEmail: jest.fn(),
            },
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
  describe("When the register form is submitted", () => {
    test("Then it should invoke onSubmit function", () => {
      const store = createStore({
        state() {
          return state;
        },
        actions: { fetchRegisterUser: jest.fn() },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };
      const wrapper = mount(Register, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },
        stubs: ["router-link", "router-view"],
      });
      mockedAxios.post.mockResolvedValue(null);
      const onSubmit = jest.fn();
      onSubmit();
      const form = wrapper.get("form");
      form.trigger("submit");
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
