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

  test("Then it should invoke onChangeForm function", () => {
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
    const onChangeForm = jest.fn();
    onChangeForm();
    const form = wrapper.get("form");
    form.trigger("submit");
    expect(onChangeForm).toHaveBeenCalled();
  });
});
test("Then it should invoke onCorrectEmail function", () => {
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
  const correctEmail = jest.fn();
  correctEmail();
  const form = wrapper.get("form");
  form.trigger("submit");
  expect(correctEmail).toHaveBeenCalled();
});

describe("When the register form is submitted but some inputs are incorrect", () => {
  test("Then isIncorrect should be false", () => {
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
      data() {
        return {
          isIncorrect: true,
        };
      },
      stubs: ["router-link", "router-view"],
    });

    mockedAxios.post.mockRejectedValue("incorrect");
    const onSubmit = jest.fn();
    onSubmit();
    const form = wrapper.get("form");
    form.trigger("submit");
    expect(wrapper.vm.isIncorrect).toBe(true);
  });
});
describe("When the form inputs are filled correctly and the user clicks the button submit", () => {
  test("Then it should call the method onSubmit", async () => {
    const $store = {
      methods: {
        onSubmit: jest.fn(),
      },
    };
    const wrapper = await mount(Register, {
      global: {
        plugins: [router],
      },

      stubs: ["router-link", "router-view"],
      $store: {
        $store,
      },
    });

    $store.methods.onSubmit = jest.fn();
    $store.methods.onSubmit();

    const name = wrapper.findAll("input")[0];
    const username = wrapper.findAll("input")[1];
    const password = wrapper.findAll("input")[2];
    const repeatPassword = wrapper.findAll("input")[3];
    const email = wrapper.findAll("input")[4];
    const avatar = wrapper.findAll("input")[5];

    name.setValue("lola");
    username.setValue("lola123");
    password.setValue("lola");
    repeatPassword.setValue("lola");
    email.setValue("lola@gmail.com");
    avatar.setValue("");

    wrapper.find("form").trigger("submit");
    expect($store.methods.onSubmit).toHaveBeenCalled();
  });
});
