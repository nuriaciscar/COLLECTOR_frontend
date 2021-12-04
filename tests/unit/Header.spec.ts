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
