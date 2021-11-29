interface userModel {
  username: string;
  password: string;
}

interface State {
  user: userModel;
}

export { State, userModel };
