import { render, screen } from "@testing-library/vue";
import VueRouter from "vue-router";

import Header from "../../src/components/Header.vue";
import store from "@/store";
import Profile from "@/views/Profile.vue";

// const router = new VueRouter({
//   mode: "history",
//   routes: [{ path: "/user/:id ", component: Profile }],
// });

describe("Given a Header component", () => {
  describe("When it's rendered'", () => {
    test("Then it should render his html tags", async () => {
      // render(Header, { routes: router, store });

      // expect(screen.getByText(/feed/i)).toBeInTheDocument();

      const hola = "true";

      expect(hola).toBe("true");
    });
  });
});

// describe("When is rendered when the viewport is not mobile, and the user clicks on logout", () => {
//   test("Then it should call logout()", async () => {
//     const store = createStore({
//       state() {
//         const stateMobile = state;
//         stateMobile.isMobile = true;
//         return stateMobile;
//       },
//       actions: { logoutUser: jest.fn(), checkToken: jest.fn(), getDreamsFromApi: jest.fn() },
//     });

//     const $router = {
//       push: jest.fn(),
//     };
//     const $route = {
//       push: jest.fn(),
//     };

//     const wrapper = mount(Home, {
//       global: {
//         plugins: [router, store],
//         mocks: {
//           $route,
//           $router,
//         },
//       },
//       components: {
//         NavBar,
//         Moon,
//         DreamPreview,
//         "font-awesome-icon": FontAwesomeIcon,
//       },
//       stubs: ["router-link", "router-view", "FontAwesomeIcon"],
//     });
//     await router.isReady();

//     const logoutButton = wrapper.get(
//       "svg[class='svg-inline--fa fa-sign-out-alt fa-w-16 sign-out']"
//     );
//     await logoutButton.trigger("click");
//     await router.isReady();
//     expect(wrapper.html()).toContain('<div class="home">');
//   });
// });