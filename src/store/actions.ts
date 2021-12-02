import axios from "axios";
import { ActionContext } from "vuex";
import jwtDecode from "jwt-decode";
import { State, UserLogin, User } from "@/types/interfaces";

const actions = {
  async fetchLoadCollections({ commit }: ActionContext<State, State>): Promise<void | string> {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadCollections", data);
    } catch {
      return "Cannot get the items";
    }
  },
  async fetchLoadCollection(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void | string> {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadCollection", data);
    } catch {
      return "Cannot get this item";
    }
  },

  async fetchLoadImages({ commit }: ActionContext<State, State>): Promise<void | string> {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/image`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadImages", data);
    } catch {
      return "Cannot get this items";
    }
  },

  async fetchLoadImage(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void | string> {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/image/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadImage", data);
    } catch {
      return "Cannot get this item";
    }
  },

  async fetchLoginUser({ commit }: ActionContext<State, State>, user: UserLogin): Promise<void> {
    const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/user/login`, user);
    const { token } = data;
    const userData = jwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ token }));
    commit("loginUser", userData);
  },

  getToken({ commit }: ActionContext<State, State>): string | void {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      commit("loginUser", jwtDecode(token.token));
    } catch {
      return "Cannot login";
    }
  },

  async fetchRegisterUser({ commit }: ActionContext<State, State>, user: User): Promise<void> {
    const { data: userData } = await axios.post(
      `${process.env.VUE_APP_API_URL}/user/register`,
      user
    );
    localStorage.setItem("user", JSON.stringify(userData));
    commit("registerUser", userData);
  },
};

export default actions;
