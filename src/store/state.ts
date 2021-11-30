import { State } from "@/types/interfaces";

const state = {
  user: "",
  collections: [],
  collection: {
    _id: "",
    name: "",
    date: "",
    images: [],
  },
  images: [],
  image: {
    description: "",
    date: "",
    image: "",
    imageLocal: "",
    category: "",
    owner: [],
  },
};

export default state as unknown as State;
