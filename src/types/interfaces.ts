interface UserLogin {
  username: string;
  password: string;
}

interface User {
  map(arg0: (user: any) => any): User;
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
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

export { State, User, Collection, Image, UserLogin, UserUpdate };
