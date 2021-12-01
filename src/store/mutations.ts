import { State, Collection, Image, User } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = payload;
  },
  loadCollection(state: State, payload: Collection): void {
    state.collection = payload;
  },
  loadImages(state: State, payload: Array<Image>): void {
    state.images = payload;
  },
  loginUser(state: State, payload: User): void {
    state.user.user = payload;
    state.user.isAuthenticated = true;
  },
};

export default mutations;
