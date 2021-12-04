import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Profile from "../../src/views/Profile.vue";
import state from "../mockedState";

describe("Given a Profile component", () => {
  describe("When is rendered", () => {
    test("Then it should render his section html tag", () => {
      const wrapper = mount(Profile, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              actions: {
                fetchUser: jest.fn(),
                logoutUserAction: jest.fn(),
              },
              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<section class="profile">');
    });
  });
});
