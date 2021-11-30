import { State, Collection, Image } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = [...payload];
  },
  loadImages(state: State, payload: Array<Image>): void {
    state.images = [...payload];
  },
};

export default mutations;
