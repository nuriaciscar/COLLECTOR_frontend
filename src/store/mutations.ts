import { State, Collection, Image, User } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = payload;
  },
  loadCollection(state: State, payload: Collection): void {
    state.collection = payload;
  },

  adcCollection(state: State, payload: Collection): void {
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
};

export default mutations;
