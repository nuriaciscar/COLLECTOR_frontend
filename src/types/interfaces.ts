interface userModel {
  username: string;
  password: string;
}

interface Image {
  description: string;
  date: Date;
  image: string;
  imageLocal: string;
  category: string;
  owner: Array<string>;
}
interface Collection {
  name: string;
  date: string;
  images: Array<Image>;
}

interface State {
  user: userModel;
  collections: Collection;
  image: Image;
  userId: string;
}

export { State, userModel, Collection, Image };
