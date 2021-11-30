import { State, Collection } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = [...payload];
  },
};

export default mutations;
