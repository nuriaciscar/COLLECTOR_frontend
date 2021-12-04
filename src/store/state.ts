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
    grid: false,
  },
};

export default state as unknown as State;
