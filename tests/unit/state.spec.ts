import state from "@/store/state";

describe("Given a state", () => {
  describe("When is called", () => {
    test("Should be equal to the real state", () => {
      expect(state).toEqual({
        user: {
          isAuthenticated: false,
          user: {
            id: "",
            name: "",
            username: "",
            password: "",
            email: "",
            avatar: "",
            collections: [],
          },
        },

        collections: [],
        collection: {
          id: "",
          name: "",
          date: "",
          images: [],
        },
        images: [],
        image: {
          id: "",
          description: "",
          date: "",
          image: "",
          imageLocal: "",
          category: "",
          owner: [],
          collectionImage: [],
          grid: false,
        },
      });
    });
  });
});
