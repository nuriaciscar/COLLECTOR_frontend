import { render, screen } from "@testing-library/vue";
import VueRouter, { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";
import Profile from "@/views/Profile.vue";
import state from "@/store/state";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/user/:id ", component: Profile }],
});

describe("Given a Header component", () => {
  describe("When is rendered and the user clicks on logout", () => {
    test("Then it should call logout function", async () => {
      const store = createStore({
        state() {
          return state;
        },
        actions: { logoutUserAction: jest.fn(), fetchUser: jest.fn() },
      });

      const $router = {
        push: jest.fn(),
      };
      const $route = {
        push: jest.fn(),
      };

      const wrapper = mount(Header, {
        global: {
          plugins: [router, store],
          mocks: {
            $route,
            $router,
          },
        },

        stubs: ["router-link", "router-view", "FontAwesomeIcon"],
      });
      await router.isReady();

      const logout = wrapper.get("<p class='header__logout'>Logout</p>");
      await logout.trigger("click");
      await router.isReady();
      expect(wrapper.html()).toContain('<nav class="nav"');
    });
  });
  test("Then it should render the nav html tag with a class nav", async () => {
    const store = createStore({
      state() {
        return state;
      },
      actions: { logoutUserAction: jest.fn(), fetchUser: jest.fn() },
    });

    const wrapper = mount(Header, {
      global: {
        plugins: [router, store],
      },

      stubs: ["router-link", "router-view", "FontAwesomeIcon"],
    });
    await router.isReady();
    expect(wrapper.html()).toContain('<nav class="nav">');
  });
});
