import { mount } from "@vue/test-utils";
import router from "../../src/router";
import state from "../mockedState";
import Header from "../../src/components/Header.vue";

describe("Given a Header component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render his html tags", () => {
      const wrapper = mount(Header, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              mutations: {
                fetchUser: jest.fn(),
              },
              commit: jest.fn(),
            },
          },
        },
      });
      expect(wrapper.html()).toContain('<nav class="header">');
    });
  });
});
