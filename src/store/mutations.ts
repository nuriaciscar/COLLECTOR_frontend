import { State, Collection, Image, User } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = payload;
  },
  loadCollection(state: State, payload: Collection): void {
    state.collection = payload;
  },

  addCollection(state: State, payload: Collection): void {
    state.collections = [...state.collections, payload];
  },
  loadImages(state: State, payload: Array<Image>): void {
    state.images = payload;
  },
  loadImage(state: State, payload: Image): void {
    state.image = payload;
  },
  loginUser(state: State, payload: User): void {
    state.user.user = payload;
    state.user.isAuthenticated = true;
  },
  logoutUser(state: any): void {
    state.user.isAuthenticated = false;
    state.user.user = {};
  },

  loadUser(state: State, payload: User): void {
    state.user.user = payload;
    state.user.isAuthenticated = true;
  },
  updateUser(state: State, payload: User): void {
    state.user.user = state.user.user.map((user) =>
      user.id === payload.id
        ? {
            ...user,
            ...payload,
          }
        : user
    );
  },
};

export default mutations;
