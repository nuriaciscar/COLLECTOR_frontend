import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "../../src/router";
import state from "../mockedState";
import Login from "../../src/components/Login.vue";

describe("Given a Login component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a title ", () => {
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

    test("Click login with a user and a password", async () => {
      const wrapper = mount(Login, {
        global: {
          mocks: {
            methods: {
              onSubmit: jest.fn().mockResolvedValue({
                unsername: "hi",
                password: "1234",
              }),
              seePassword: jest.fn(),

              goHome: jest.fn(),
            },
            $store: {
              state: {
                ...state,
                isUserLogged: false,
              },

              actions: {
                fetchLoginUser: jest.fn(),
              },

              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },

        data() {
          return {
            username: "nunu",
            password: "nunu",
            isDisabled: true,
            isIncorrect: false,
            showPassword: false,
          };
        },
      });

      await wrapper.find("form").trigger("→");

      expect(wrapper.text()).toContain("Welcome backUsernamePasswordor Sign In →");
    });
    describe("When the form is submitted", () => {
      test("Then it should invoke onSubmit function", () => {
        const store = createStore({
          state() {
            return state;
          },
          actions: { fetchLoginUser: jest.fn(), getToken: jest.fn() },
        });

        const wrapper = mount(Login, {
          global: {
            plugins: [router, store],
          },
          stubs: ["router-link", "router-view"],
        });

        const onSubmit = jest.fn();
        onSubmit();
        const form = wrapper.get("form");
        form.trigger("submit");
        expect(onSubmit).toHaveBeenCalled();
      });
    });
    describe("When the user clicks on eye icon", () => {
      test("Then it should invoke seePassword function", () => {
        const store = createStore({
          state() {
            return state;
          },
          actions: { fetchLoginUser: jest.fn(), getToken: jest.fn() },
        });

        const wrapper = mount(Login, {
          global: {
            plugins: [router, store],
          },
          stubs: ["router-link", "router-view"],
        });

        const seePassword = jest.fn();
        seePassword();
        const form = wrapper.get("form");
        form.trigger("submit");
        expect(seePassword).toHaveBeenCalled();
      });
    });
  });
  describe("When the inputs are filled correctly and button submit is clicked", () => {
    test("Then it should call the method onSubmit", async () => {
      const store = createStore({
        state() {
          return state;
        },
        actions: { fetchLoginUser: jest.fn(), getToken: jest.fn() },
      });

      const wrapper = mount(Login, {
        global: {
          plugins: [router, store],
          mocks: {
            methods: {
              onSubmit: jest.fn(),
              getToken: jest.fn(),
              seePassword: jest.fn(),
              goHome: jest.fn(),
            },
          },

          stubs: ["router-link", "router-view"],
        },
      });
      const onSubmit = jest.fn();

      onSubmit();
      const username = wrapper.get("input[id='username'");
      const password = wrapper.get("input[id='password'");
      const form = wrapper.get("form");
      await username.setValue("oleguer");
      await password.setValue("oleguer");
      form.trigger("submit");
      expect(onSubmit).toHaveBeenCalled();
      expect(store.state.user).toBeDefined();
    });
  });
});
