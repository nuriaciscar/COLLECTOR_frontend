import { Commit } from "vuex";
import { State } from "@/types/interfaces";

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  rootState: {} as State,
});

export default configActionContext;
