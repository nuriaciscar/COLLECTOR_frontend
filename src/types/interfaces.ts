interface UserLogin {
  username: string;
  password: string;
}

interface User {
  name: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  collections: Array<string>;
}
interface Image {
  description: string;
  date: Date;
  image: string;
  imageLocal: string;
  category: string;
  owner: Array<string>;
  id: string;
}
interface Collection {
  name: string;
  date: string;
  images: Array<Image>;
  id: string;
}

interface State {
  user: User;
  collections: Array<Collection>;
  collection: Collection;
  images: Array<Image>;
  image: Image;
}

export { State, User, Collection, Image, UserLogin };
