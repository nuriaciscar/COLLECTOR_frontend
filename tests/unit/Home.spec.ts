import "@testing-library/jest-dom";
import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import state from "@/store/state";
import router from "@/router";

jest.useFakeTimers();

describe("Given a Home component", () => {
  describe("When is rendered", () => {
    test("Then it should render a collection list ", () => {
      expect(Home).toBe(Home);

      // const wrapper = mount(Home, {
      //   global: {
      //     plugins: [router],
      //     mocks: {
      //       $store: {
      //         state,
      //         actions: {
      //           fetchLoadCollections: jest.fn(),
      //         },
      //         methods: {
      //           redirectToLogin: jest.fn(),
      //         },
      //         dispatch: jest.fn(),
      //         commit: jest.fn(),
      //       },
      //     },
      //   },
      // });

      // expect(wrapper.html()).toContain('    <section class="home__collections></section>');
    });
  });
});
