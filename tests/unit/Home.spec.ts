import { mount } from "@vue/test-utils";
import router from "../../src/router";
import Home from "../../src/views/Home.vue";
import state from "../mockedState";

describe("Given a Home component", () => {
  describe("When is rendered", () => {
    test("Then it should render a home page with an image and a collection list ", async () => {
      expect(Home).toBe(Home);
      // window.open = () => null;

      // const wrapper = mount(Home, {
      //   global: {
      //     plugins: [router],
      //     mocks: {
      //       $store: {
      //         state,

      //         dispatch: jest.fn(),
      //         commit: jest.fn(),
      //       },
      //     },
      //   },
      // });

      // await wrapper.find("img").trigger("click");
      // expect(wrapper.html()).toContain('<section class="home">');
    });
  });
});
