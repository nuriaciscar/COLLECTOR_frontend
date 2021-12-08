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
jest.mock("jwt-decode", () => () => ({}));

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
  describe("When fetchLoadCollections is invoked but axios fails", () => {
    test("Then it should not call commit with loadCollections and return 'Cannot get the items'", async () => {
      mockedAxios.get.mockResolvedValue(null);
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadCollections(configActionContext(commit));
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).not.toHaveBeenCalledWith("loadCollections");
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
  describe("When fetchLoadCollection is invoked but axios fails", () => {
    test("Then it should not call commit with loadCollection and return 'Cannot get this item'", async () => {
      mockedAxios.post.mockResolvedValue(null);
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchLoadCollection(configActionContext(commit), "id");
      expect(commit).toHaveBeenCalledWith("Cannot get this item");
      expect(commit).not.toHaveBeenCalledWith("loadCollection");
    });
  });
  describe("When it invokes fetchDeleteCollection action", () => {
    test("Then it should delete a single image by his id", async () => {
      const data: Array<Image> = mockedState.images;
      const id = {
        id: "342345",
        idCollection: "2345",
      };
      mockedAxios.get.mockResolvedValue({ data });
      JSON.parse = jest.fn().mockResolvedValue("12345678");

      await actions.fetchDeleteCollection(configActionContext(commit), id);

      expect(commit).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith("loadCollections", []);
      expect(commit).toHaveBeenCalledWith("loadCollection", []);
      expect(commit).toHaveBeenCalledWith("addCollection", undefined);
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

    describe("When fetchAddCollection is invoked but axios fails", () => {
      test("Then it should not call commit with fetchAddCollection  and return 'Cannot create this collection", async () => {
        const data: Collection = mockedState.collections[0];
        mockedAxios.post.mockResolvedValue(null);
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.fetchAddCollection(configActionContext(commit), data);

        expect(commit).toHaveBeenCalledWith("Cannot create this collection");
        expect(commit).not.toHaveBeenCalledWith("addCollection");
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
    describe("When fetchAddImageToCollection is invoked but axios fails", () => {
      test("Then it should not call commit with fetchAddImageToCollection and return 'Cannot create this collection'", async () => {
        const data: Collection = mockedState.collection;
        mockedAxios.get.mockResolvedValue(null);
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.fetchAddImageToCollection(configActionContext(commit), data);

        expect(commit).not.toHaveBeenCalledWith("addImageToCollection");
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
    describe("When fetchLoadImages is invoked but axios fails", () => {
      test("Then it should not call commit with fetchLoadImages  and return 'Cannot get this items", async () => {
        const data: Array<Image> = mockedState.images;
        mockedAxios.post.mockResolvedValue(null);
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.fetchLoadImages(configActionContext(commit));

        expect(commit).toHaveBeenCalledWith("Cannot get this items");
        expect(commit).not.toHaveBeenCalledWith("loadImages", data);
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
    describe("When fetchLoadImage is invoked but axios fails", () => {
      test("Then it should not call commit with fetchLoadImage  and return 'Cannot get this item", async () => {
        const data: Array<Image> = mockedState.images;
        mockedAxios.post.mockResolvedValue(null);
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.fetchLoadImage(configActionContext(commit), "234");

        expect(commit).toHaveBeenCalledWith("Cannot get this item");
        expect(commit).not.toHaveBeenCalledWith("loaddImage", data);
      });
    });
    describe("When it invokes fetchDeleteImage action", () => {
      test("Then it should delete a single image by his id", async () => {
        const data: Array<Image> = mockedState.images;
        const id = {
          id: "342345",
          idImage: "2345",
        };
        mockedAxios.delete.mockResolvedValue({ data });
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.fetchDeleteImage(configActionContext(commit), id);

        expect(commit).toHaveBeenCalled();
        expect(commit).toHaveBeenCalledWith("deleteImage", []);
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
        expect(commit).toHaveBeenCalledWith("loadCollections", []);
        expect(commit).toHaveBeenCalledWith("loadCollection", []);
        expect(commit).toHaveBeenCalledWith("deleteCollection", "342345");
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

        mockedAxios.get.mockResolvedValue({ user });
        JSON.parse = jest.fn().mockResolvedValue("123456");

        await actions.getToken(configActionContext(commit));
        expect(commit).toHaveBeenCalled();
        expect(commit).toHaveBeenCalledWith("loadCollections", []);
        expect(commit).toHaveBeenCalledWith("loadCollection", []);
        expect(commit).toHaveBeenCalledWith("addCollection", undefined);
      });
    });
    describe("When getToken is invoked but axios fails", () => {
      test("Then it should not call commit with getToken  and return 'Cannot get user", async () => {
        const { user } = mockedState.user;
        mockedAxios.post.mockResolvedValue(null);
        JSON.parse = jest.fn().mockResolvedValue("12345678");

        await actions.getToken(configActionContext(commit));

        expect(commit).toHaveBeenCalledWith("Cannot get user");
        expect(commit).not.toHaveBeenCalledWith("loginUser", user);
      });
    });
    describe("When it invokes logoutUserAction action", () => {
      test("Then it should receive an empty user", async () => {
        const logoutUser = {
          id: "",
          name: "",
          username: "",
          password: "",
          email: "",
          collections: [],
          avatar: "",
        };

        await actions.logoutUserAction(configActionContext(commit));
        expect(commit).toHaveBeenCalled();
        expect(commit).toHaveBeenCalledWith("loadCollections", []);
        expect(commit).toHaveBeenCalledWith("loadCollection", []);
        expect(commit).toHaveBeenCalledWith("addCollection", undefined);
      });
    });
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
});
