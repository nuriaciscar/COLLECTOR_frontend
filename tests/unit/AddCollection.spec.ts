import { mount } from "@vue/test-utils";
import router from "../../src/router";
import AddCollection from "../../src/views/AddCollection.vue";
import state from "../mockedState";

const event = {
  target: {
    files: [
      {
        images: "image.png",
      },
    ],
  },
};

describe("Given an AddCollection component", () => {
  describe("When is rendered", () => {
    test("Then it should render a form to create a new collection ", async () => {
      const wrapper = mount(AddCollection, {
        global: {
          plugins: [router],
          mocks: {
            methods: {
              onSubmit: jest.fn().mockResolvedValue({
                images: "image.png",
                date: "2021-10-10",
                name: "A collection",
                id: "1234",
              }),
              seePassword: jest.fn(),

              goHome: jest.fn(),
            },
            $store: {
              state: {
                ...state,
              },

              actions: {
                fetchAddCollection: jest.fn(),
              },

              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },

        data() {
          return {
            date: "2021-10-10",
            name: "A collection",
            isIncorrect: false,
            previewImage: null,
            images: [],
            id: "1234",
          };
        },
      });
      await wrapper.find("form").trigger("save");

      expect(wrapper.text()).toContain("Create your collectionName:Date/Time:PUBLISH");
    });
    test("Then it should render the section html tag", () => {
      const wrapper = mount(AddCollection, {
        global: {
          plugins: [router],
          mocks: {
            methods: {
              onFileChange: jest.fn(),
              onsubmit: jest.fn(),
            },
            $store: {
              state,
              actions: {
                fetchAddCollection: jest.fn(),
              },
              dispatch: jest.fn(),
              commit: jest.fn(),
            },
          },
        },
      });

      expect(wrapper.html()).toContain('<section class="create">');
    });
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
      const wrapper = await mount(AddCollection, {
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
      const name = wrapper.findAll("input")[1];
      const date = wrapper.findAll("input")[2];

      images.setValue([]);
      name.setValue("summer");
      date.setValue("2021-10-10");

      wrapper.find("form").trigger("submit");
      expect($store.methods.onSubmit).toHaveBeenCalled();
    });
  });
});
