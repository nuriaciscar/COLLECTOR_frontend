import axios from "axios";
import { ActionContext } from "vuex";
import jwtDecode from "jwt-decode";
import router from "@/router";
import {
  State,
  IBodyDeleted,
  IBodyDeletedCollection,
  UserLogin,
  User,
  Collection,
} from "@/types/interfaces";
import state from "./state";

const actions = {
  async fetchLoadCollections({ commit }: ActionContext<State, State>): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadCollections", data);
      commit("loadingStop");
    } catch {
      return "Cannot get the items";
    }
  },
  async fetchLoadCollection(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadCollection", data);
      commit("loadingStop");
    } catch {
      return "Cannot get this item";
    }
  },

  async fetchAddCollection(
    { commit }: ActionContext<State, State>,
    collection: Collection
  ): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/collections`, collection, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("addCollection", data);
      commit("loadingStop");
    } catch {
      return "Cannot create this collection";
    }
  },
  async fetchAddImageToCollection(
    { commit }: ActionContext<State, State>,
    collection: Collection | FormData | any
  ): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.patch(
        `${process.env.VUE_APP_API_URL}/collections/${state.collection.id}`,
        collection,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      commit("addImageToCollection", data);
      commit("loadingStop");
    } catch {
      return "Cannot create this collection";
    }
  },

  async fetchLoadImages({ commit }: ActionContext<State, State>): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/image`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadImages", data);
      commit("loadingStop");
    } catch {
      return "Cannot get this items";
    }
  },

  async fetchLoadImage(
    { commit }: ActionContext<State, State>,
    id: string
  ): Promise<void | string> {
    commit("loadingStart");
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/image/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadImage", data);
      commit("loadingStop");
    } catch {
      return "Cannot get this item";
    }
  },
  async fetchDeleteCollection(
    { commit, dispatch }: ActionContext<State, State>,
    id: IBodyDeletedCollection
  ): Promise<void | string> {
    commit("loadingStart");
    const { token } = JSON.parse(localStorage.getItem("token") || "");
    await axios.delete(`${process.env.VUE_APP_API_URL}/collections/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit("deleteCollection", id.id);
    dispatch("fetchUser", id.idCollection);
    dispatch("fetchUser");
  },

  async fetchDeleteImage(
    { commit, dispatch }: ActionContext<State, State>,
    id: IBodyDeleted
  ): Promise<void | string> {
    commit("loadingStart");
    const { token } = JSON.parse(localStorage.getItem("token") || "");
    await axios.delete(`${process.env.VUE_APP_API_URL}/image/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit("deleteImage", id.id);
    dispatch("fetchUser", id.idImage);
    dispatch("fetchUser");
    commit("loadingStop");
  },

  async fetchLoginUser({ commit }: ActionContext<State, State>, user: UserLogin): Promise<void> {
    const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/user/login`, user);
    const { token } = data;
    const userData = jwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ token }));
    commit("loginUser", userData);
  },

  getToken({ commit, dispatch }: ActionContext<State, State>): string | void {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      const user: User = jwtDecode(token.token);
      commit("loginUser", user);
      dispatch("fetchUser", user.id);
    } catch {
      return "Cannot get user";
    }
  },

  logoutUserAction({ commit }: ActionContext<State, State>): void {
    router.push("/collections");
    localStorage.removeItem("token");
    commit("logoutUser");
  },

  async fetchRegisterUser({ commit }: ActionContext<State, State>, user: User): Promise<void> {
    const { data: userData } = await axios.post(
      `${process.env.VUE_APP_API_URL}/user/register`,
      user
    );
    localStorage.setItem("user", JSON.stringify(userData));
    commit("registerUser", userData);
  },

  async fetchUser({ commit }: ActionContext<State, State>, id: string): Promise<void | string> {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit("loadUser", data);
      commit("loadingStop");
    } catch {
      return "Cannot access to user";
    }
  },

  async searchCollection(
    { commit }: ActionContext<State, State>,
    inputValue: string
  ): Promise<void | string> {
    commit("loadingStart");
    const { token } = JSON.parse(localStorage.getItem("token") || "");
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/collections`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const returnedCollection = data.filter((collection: any) =>
      collection.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    commit("foundCollection", returnedCollection);
    commit("loadingStop");
  },
};

export default actions;
