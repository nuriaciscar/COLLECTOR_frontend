import { State } from "@/types/interfaces";

const state = {
  user: "",
  isAuthenticated: false,
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
  },
};

export default state as unknown as State;
