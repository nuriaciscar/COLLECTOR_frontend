import { mount } from "@vue/test-utils";
import router from "../../src/router";
import AddImage from "../../src/views/AddImage.vue";
import state from "../mockedState";

describe("Given an AddImage component", () => {
  describe("When is rendered", () => {
    test("Then it should render a form to create a new image with a date", async () => {
      window.open = () => null;

      const wrapper = mount(AddImage, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,

              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      await wrapper.find("img").trigger("click");
      expect(wrapper.html()).toContain('<section class="create">');
    });

    describe("When the inputs are filled correctly and button publish is clicked", () => {
      test("Then it should call the method onSubmit", async () => {
        const $store = {
          methods: {
            onSubmit: jest.fn(),
            pickFile: jest.fn(),
            onFileChange: jest.fn(),
          },
        };
        const wrapper = await mount(AddImage, {
          global: {
            plugins: [router],
          },

          stubs: ["router-link", "router-view"],
          $store: {
            $store,
          },
        });

        await router.isReady();

        $store.methods.onSubmit = jest.fn();
        $store.methods.onSubmit();

        const images = wrapper.findAll("input")[0];
        const date = wrapper.findAll("input")[1];

        images.setValue([]);
        date.setValue("2021-10-10");

        wrapper.find("form").trigger("submit");
        expect($store.methods.onSubmit).toHaveBeenCalled();
      });
    });
  });
});
