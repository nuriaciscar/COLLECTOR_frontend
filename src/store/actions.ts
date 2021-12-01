import axios from "axios";
import { ActionContext } from "vuex";
import jwtDecode from "jwt-decode";
import { State, UserLogin, User } from "@/types/interfaces";

const actions = {
  async fetchLoadCollections({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections`);
    commit("loadCollections", data);
  },
  async fetchLoadCollection({ commit }: ActionContext<State, State>, id: string): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections/${id}`);
    commit("loadCollection", data);
  },

  async fetchLoadImages({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/image`);
    commit("loadImages", data);
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
