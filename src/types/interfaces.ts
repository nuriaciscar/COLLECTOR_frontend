interface UserLogin {
  username: string;
  password: string;
}

interface UserRegister {
  name: string;
  username: string;
  password: string;
  email: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  collections: Array<string>;
}

interface UserUpdate {
  formData: User;
  id: string;
}
interface Image {
  description: string;
  date: string | Date;
  image: string;
  imageLocal: string;
  category: string;
  owner: Array<string>;
  collectionImage: Array<string>;
  id: string;
  grid: boolean;
}
interface Collection {
  name: string;
  date: string;
  images: Array<Image>;
  id: string;
}

interface IBodyDeleted {
  id: string;
  idImage: string;
}
interface IAddImage {
  id: string;
  image: Image;
}
interface State {
  user: {
    isAuthenticated: boolean;
    user: User;
  };
  collections: Array<Collection>;
  collection: Collection;
  images: Array<Image>;
  image: Image;
}

export {
  State,
  User,
  Collection,
  Image,
  UserLogin,
  UserRegister,
  UserUpdate,
  IBodyDeleted,
  IAddImage,
};
