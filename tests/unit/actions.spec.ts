import axios from "axios";
import { Commit, Dispatch } from "vuex";
import actions from "@/store/actions";
import { Collection, Image, User, UserLogin } from "@/types/interfaces";
import { configActionContext } from "../test-utils";
import mockedState from "../mockedState";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;
const dispatch = jest.fn() as jest.MockedFunction<Dispatch>;

describe("Given an object of actions", () => {
  describe("When it invokes fetchLoadCollections action", () => {
    test("Then it should fetch all the collections from API", async () => {
      const data: Array<Collection> = mockedState.collections;
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadCollections(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", data);
       
    });
  });
  describe("When it invokes fetchLoadCollection action", () => {
    test("Then it should fetch a single collection from API", async () => {
      const data: Array<Collection> = mockedState.collections;
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadCollection(configActionContext(commit), "id");

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollection", data);
    });
  });
  describe("When it invokes fetchAddCollection action", () => {
    test("Then it should call with commit to fetchAddCollection with a new collection received", async () => {
      const data: Collection = mockedState.collections[0];
      mockedAxios.post.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchAddCollection(configActionContext(commit), data);

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("addCollection", data);
    });
  });
  describe("When it invokes fetchAddImageToCollection action", () => {
    test("Then it should call with commit to fetchAddImageToCollection with a new collection received", async () => {
      const data: Collection = mockedState.collection;
      mockedAxios.patch.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchAddCollection(configActionContext(commit), data);

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).toHaveBeenCalledWith("loadCollection", []);
      expect(commit).toHaveBeenCalledWith("addCollection", undefined);
    });
  });
  describe("When it invokes fetchLoadImages action", () => {
    test("Then it should fetch all the images from API", async () => {
      const data: Array<Image> = mockedState.images;
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadImages(configActionContext(commit));

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadImages", data);
    });
  });
  describe("When it invokes fetchLoadImage action", () => {
    test("Then it should fetch a single image from API", async () => {
      const data: Array<Image> = mockedState.images;
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadImage(configActionContext(commit), "id");

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadImage", data);
    });
  });
  describe("When it invokes fetchDeleteImage action", () => {
    test("Then it should delete a single image by his id", async () => {
      const data: Array<Image> = mockedState.images;
      const id = {
        id: "342345",
        idImage: "2345",
      };
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchDeleteImage(configActionContext(commit), id);

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).toHaveBeenCalledWith("loadCollection", []);
      expect(commit).toHaveBeenCalledWith("addCollection", undefined);


    });
  });
  describe("When it invokes fetchLoginUser action", () => {
    test("Then it should log a user", async () => {
      const { user } = mockedState.user;
      const data = {
        token: "12345",
      };
      mockedAxios.post.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("123456");

      await actions.fetchLoginUser(configActionContext(commit), user);
      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loginUser", []);
    });
  });
  describe("When it invokes fetchRegisterUser action", () => {
    test("Then it should register a user", async () => {
      const { user } = mockedState.user;
      const data = {
        token: "12345",
      };
      mockedAxios.post.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("123456");

      await actions.fetchRegisterUser(configActionContext(commit), user);
      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).toHaveBeenCalledWith("loadCollection", []);
      expect(commit).toHaveBeenCalledWith("addCollection", undefined);
    });
  });
  describe("When it invokes getToken action", () => {
    test("Then it should receive a token from user", async () => {
      const { user } = mockedState.user;

      mockedAxios.post.mockResolvedValue({ user });
      JSON.parse = jest.fn().mockResolvedValue("123456");

      await actions.getToken(configActionContext(commit));
      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).toHaveBeenCalledWith("loadCollection", []);
      expect(commit).toHaveBeenCalledWith("addCollection", undefined);
    });
  });
  // describe("When it invokes logoutUserAction action", () => {
  //   test("Then it should receive an empty user", async () => {
  //     const logoutUser = {
  //       id: "",
  //       name: "",
  //       username: "",
  //       password: "",
  //       email: "",
  //       collections: [],
  //       avatar: "",
  //     };

  //     await actions.logoutUserAction(configActionContext(commit));
  //     expect(commit).toHaveBeenCalled();
  //     expect(commit).toHaveBeenCalledWith("logoutUser", logoutUser);
  //   });
  // });
});
describe("When it invokes fetchUser action", () => {
  test("Then it should fetch a single user from API", async () => {
    const id = "1234";
    const data = {
      token: "12345",
    };
    mockedAxios.get.mockResolvedValue({ data });
    JSON.parse = jest.fn().mockResolvedValue("123456");

    await actions.fetchUser(configActionContext(commit), id);
    expect(commit).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("loadUser", data);
  });
});
