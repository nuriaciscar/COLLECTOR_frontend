import axios from "axios";
import { Commit } from "vuex";
import actions from "@/store/actions";
import { User, UserLogin } from "@/types/interfaces";
import { configActionContext } from "../test-utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;

describe("Given an object of actions", () => {
//   describe("When it invokes fetchLoadCollections action", () => {
//     test("Then it should fetch all the collections from API", async () => {
//       mockedAxios.get.mockResolvedValue({
//         data: [],
//       });

//       await actions.fetchLoadCollections(configActionContext(commit));

//       expect(commit).toHaveBeenCalled();
//     });
//   });
//   describe("When it invokes fetchLoadCollection action", () => {
//     test("Then it should fetch a single collection from API", async () => {
//       mockedAxios.get.mockResolvedValue({
//         data: [],
//       });

//       await actions.fetchLoadCollection(configActionContext(commit), "1234");

//       expect(axios.get).toHaveBeenCalled();
//     });
//   });
//   describe("When it invokes fetchLoadImages action", () => {
//     test("Then it should fetch all the images from API", async () => {
//       mockedAxios.get.mockResolvedValue({
//         data: [],
//       });

//       await actions.fetchLoadImages(configActionContext(commit));

//       expect(commit).toHaveBeenCalled();
//     });
//   });
//   describe("When it invokes fetchLoadImage action", () => {
//     test("Then it should fetch a single image from API", async () => {
//       mockedAxios.get.mockResolvedValue({
//         data: [],
//       });

//       await actions.fetchLoadImage(configActionContext(commit), "1234");

//       expect(axios.get).toHaveBeenCalled();
//     });
//   });
//   describe("When it invokes fetchLoginUser action", () => {
//     test("Then it should log a user", async () => {
//       mockedAxios.post.mockResolvedValue({
//         data: [],
//       });

//       const userData = {} as UserLogin;

//       await actions.fetchLoginUser(configActionContext(commit), userData);

//       expect(commit).toHaveBeenCalled();
//     });
//   });
  describe("When it invokes fetchRegisterUser action", () => {
    test("Then it should register a user", async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });

      const userData = {} as User;

      await actions.fetchRegisterUser(configActionContext(commit), userData);

      expect(commit).toHaveBeenCalled();
    });
  });
  });
  // describe("When it invokes fetchUser action", () => {
  //   test("Then it should fetch a single user from API", async () => {
  //     mockedAxios.get.mockResolvedValue({
  //       data: [],
  //     });

  //     await actions.fetchUser(configActionContext(commit), "1234");

  //     expect(axios.get).toHaveBeenCalled();
  //   });
  // });

