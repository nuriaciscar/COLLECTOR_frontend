import { Commit } from "vuex";
import { State } from "@/types/interfaces";

export const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  rootState: {} as State,

  getters: jest.fn(),

  rootGetters: jest.fn(),
});

export default configActionContext;
