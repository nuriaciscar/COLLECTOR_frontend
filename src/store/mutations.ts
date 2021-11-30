import { State, Collection, Image } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = payload;
  },
  loadImages(state: State, payload: Array<Image>): void {
    state.images = payload;
  },
  // loginUser(state: State, payload): void {
  //   state.user = payload;
  // },
};

export default mutations;
