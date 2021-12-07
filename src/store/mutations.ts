import { State, Collection, Image, User } from "@/types/interfaces";

const mutations = {
  loadCollections(state: State, payload: Array<Collection>): void {
    state.collections = payload;
  },
  loadCollection(state: State, payload: Collection): void {
    state.collection = payload;
    state.image.grid = true;
  },
  addCollection(state: State, payload: Collection): void {
    state.collections = [...state.collections, payload];
  },
  deleteCollection(state: State, payload: string): void {
    state.collections = state.collections.filter(
      (collection: Collection) => collection.id !== payload
    );
  },
  loadImages(state: State, payload: Array<Image>): void {
    state.images = payload;
  },
  loadImage(state: State, payload: Image): void {
    state.image = payload;
  },
  deleteImage(state: State, payload: string): void {
    state.images = state.images.filter((image: Image) => image.id !== payload);
  },
  addImageToCollection(state: State, payload: Collection): void {
    state.collection = payload;
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
