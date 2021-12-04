import mutations from "@/store/mutations";

import { Collection, State, User, Image } from "@/types/interfaces";
import state from "../mockedState";

let mockedState: State;

describe("Given a store mutations object", () => {
  beforeEach(() => {
    mockedState = state;
  });

  describe("When loadCollections receives a state and payload with an array of collections", () => {
    test("Then the collections should contain those collections in the store", () => {
      const payload: Array<Collection> = [
        {
          name: "summer",
          date: "2021",
          images: [
            {
              id: "12354T",
              description: "hola",
              date: "2022-10-10",
              image: "https://local.png",
              imageLocal: "https://hola2.png",
              category: "art",
              owner: [],
            },
          ],
          id: "1233",
        },
        {
          name: "winter",
          date: "2022",
          images: [
            {
              id: "12354R",
              description: "surf",
              date: "2022-9-10",
              image: "https://surf.png",
              imageLocal: "https://surf2.png",
              category: "sports",
              owner: [],
            },
          ],
          id: "1233",
        },
      ];

      mutations.loadCollections(mockedState, payload);

      expect(mockedState.collections).toEqual(payload);
    });
  });

  describe("When loadCollection receives a state and payload with a collection", () => {
    test("Then the collection should contain this collection in the store", () => {
      const payload: Collection = {
        name: "summer",
        date: "2021",
        images: [
          {
            id: "12354T",
            description: "hola",
            date: "2022-10-10",
            image: "https://local.png",
            imageLocal: "https://hola2.png",
            category: "art",
            owner: [],
          },
        ],
        id: "1233",
      };

      mutations.loadCollection(mockedState, payload);

      expect(mockedState.collection).toEqual(payload);
    });
  });
  describe("When loadImages receives a state and payload with an array of images", () => {
    test("Then the images should contain those images in the store", () => {
      const payload: Array<Image> = [
        {
          id: "12354T",
          description: "hola",
          date: "2022-10-10",
          image: "https://local.png",
          imageLocal: "https://hola2.png",
          category: "art",
          owner: [],
        },
        {
          id: "12354r",
          description: "holaa",
          date: "2022-9-10",
          image: "https://local1.png",
          imageLocal: "https://hola22.png",
          category: "art",
          owner: [],
        },
      ];
      mutations.loadImages(mockedState, payload);

      expect(mockedState.images).toEqual(payload);
    });
  });

  describe("When loadCollection receives a state and payload with an image", () => {
    test("Then the image should contain this image in the store", () => {
      const payload: Image = {
        id: "12354T",
        description: "hola",
        date: "2022-10-10",
        image: "https://local.png",
        imageLocal: "https://hola2.png",
        category: "art",
        owner: [],
      };

      mutations.loadImage(mockedState, payload);

      expect(mockedState.image).toEqual(payload);
    });
  });
  describe("When loginUser receives a state and payload with a user", () => {
    test("Then isAuthenticated should be true in store", () => {
      const payload: User = {
        id: "1234",
        username: "ole",
        password: "ole",
        name: "ole",
        email: "ole@gmail.com",
        avatar: "https://hola.png",
        collections: [],
      };

      mutations.loginUser(mockedState, payload);

      expect(mockedState.user.isAuthenticated).toBe(true);
    });
  });
  describe("When logOut receives a state and payload with a user", () => {
    test("Then isAuthenticated should be false in store", () => {
      mutations.logoutUser(mockedState);

      expect(mockedState.user.isAuthenticated).toBe(false);
    });
  });
  describe("When loadUser receives a state and payload with a user", () => {
    test("Then user should contain this user and isAuthenticated should be true ", () => {
      const payload: User = {
        id: "1234",
        username: "ole",
        password: "ole",
        name: "ole",
        email: "ole@gmail.com",
        avatar: "https://hola.png",
        collections: [],
      };

      mutations.loadUser(mockedState, payload);

      expect(mockedState.user.isAuthenticated).toBe(true);
    });
  });
});
