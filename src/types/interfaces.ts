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
  id: string;
}
interface Collection {
  name: string;
  date: string;
  images: Array<Image>;
  id: string;
}

interface State {
  user: userModel;
  collections: Array<Collection>;
  collection: Collection;
  images: Array<Image>;
  image: Image;
}

export { State, userModel, Collection, Image };
