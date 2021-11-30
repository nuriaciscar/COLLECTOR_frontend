import axios from "axios";
import { ActionContext } from "vuex";
import { State } from "@/types/interfaces";

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

  async fetchLoginUser({ commit }: ActionContext<State, State>): Promise<void> {
    const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/user/login`);
    commit("loginUser", data);
  },
};

export default actions;
