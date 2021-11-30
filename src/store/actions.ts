import axios from "axios";
import { ActionContext } from "vuex";
import { State, UserLogin } from "@/types/interfaces";

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
    const { data: userData } = await axios.post(`${process.env.VUE_APP_API_URL}/user/login`, user);
    localStorage.setItem("user", JSON.stringify(userData));
    commit("loginUser", userData);
  },

  async fetchRegisterUser(
    { commit }: ActionContext<State, State>,
    user: UserRegister
  ): Promise<void> {
    const { data: userData } = await axios.post(
      `${process.env.VUE_APP_API_URL}/user/register`,
      user
    );
    localStorage.setItem("user", JSON.stringify(userData));
    commit("loginUser", userData);
  },
};

export default actions;
