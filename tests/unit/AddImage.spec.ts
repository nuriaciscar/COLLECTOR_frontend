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

    test("Then it should invoke onSubmit to send the form and receive an image", async () => {
      const wrapper = mount(AddImage, {
        global: {
          mocks: {
            methods: {
              onSubmit: jest.fn().mockResolvedValue({
                images: "image.png",
              }),
              seePassword: jest.fn(),

              goHome: jest.fn(),
            },
            $store: {
              state: {
                ...state,
              },

              actions: {
                fetchAddImageToCollection: jest.fn(),
              },

              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },

        data() {
          return {
            image: "image.png",
            date: "2021-10-10",
            description: "An image",
            isIncorrect: false,
            previewImage: null,
            name: "summer",
            images: "image.png",
            file: "image.png",
          };
        },
      });
      await wrapper.find("form").trigger("save");

      expect(wrapper.text()).toContain("Add a new imageDate:Sun, October 10, 2021SAVE");
    });
  });
});
