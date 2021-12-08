import { State } from "@/types/interfaces";

const state = {
  user: {
    isAuthenticated: false,
    user: {
      id: "",
      name: "",
      username: "",
      password: "",
      email: "",
      avatar: "",
      collections: [],
    },
  },
  isLoading: false,

  collections: [],
  collection: {
    id: "",
    name: "",
    date: "",
    images: [],
  },
  images: [],
  image: {
    id: "",
    description: "",
    date: "",
    image: "",
    imageLocal: "",
    category: "",
    owner: [],
    collectionImage: [],
    grid: false,
  },
};

export default state as unknown as State;
