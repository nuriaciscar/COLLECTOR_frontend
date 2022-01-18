import { State } from "@/types/interfaces";

const mockedState = {
  user: {
    isAuthenticated: false,
    user: {
      id: "1234",
      name: "ole",
      password: "ole",
      email: "ole@gmail.com",
      avatar: "http://theglobalvilla.com/wp-content/uploads/2020/03/1.jpg",
      collections: [],
    },
  },
  value: [],
  collections: [],
  collection: {},
  images: [],
  image: {},
};

//   user: {
//     isAuthenticated: true,
//     user: {
//       id: "1234",
//       name: "nunu",
//       username: "nunu",
//       password: "nunu",
//       email: "nunu@gmail.com",
//       avatar: "http://theglobalvilla.com/wp-content/uploads/2020/03/1.jpg",
//       collections: [
//         {
//           id: "61a5e77b7242c8d1948cc13e",
//           name: "summer",
//           date: "2021",
//           images: [
//             {
//               description: "Bohemian house on Formentera",
//               date: 2021 - 10 - 10,
//               image: "http://theglobalvilla.com/wp-content/uploads/2020/03/1.jpg",

//               imageLocal: "http://theglobalvilla.com/wp-content/uploads/2020/03/1.jpg",
//               category: "architecture",
//               owner: [{ id: "61a5e9727242c8d1948cc143" }],
//               id: "61a5e9727242c8d1948cc146",
//             },
//           ],
//         },
//       ],
//     },
//   },

//   collections: [{ id: "61a5e77b7242c8d1948cc13e" }],
//   collection: {
//     id: "61a5e77b7242c8d1948cc13e",
//     name: "summer",
//     date: "2021",
//     images: [
//       {
//         description: "Bohemian house on Formentera",
//         date: 2021 - 10 - 10,
//         image: "",

//         imageLocal: "http://theglobalvilla.com/wp-content/uploads/2020/03/1.jpg",
//         category: "architecture",
//         owner: [{ id: "61a5e9727242c8d1948cc143" }],
//         id: "61a5e9727242c8d1948cc146",
//       },
//       {
//         description: "Skateboarding",
//         date: "2021-10-10T00:00:00.000Z",
//         image: "https://maison-monde.com/wp-content/uploads/2017/02.jpg",
//         imageLocal: "https://64.media.tumblr.com/41dc1ea12a0ead7c8739be2882184a68.jpg",
//         category: "sports",
//         owner: [{ id: "61a5e9727242c8d1948cc143" }],
//         id: "61a5ea4c7242c8d1948cc147",
//       },
//     ],
//   },
//   images: [{ id: "61a5e9727242c8d1948cc146" }, { id: "61a5ea4c7242c8d1948cc147" }],
//   image: {
//     id: "61a5e9727242c8d1948cc146",
//     description: "",
//     date: 2021 - 10 - 10,
//     image: "https://maison-monde.com/wp-content/uploads/2017/02.jpg",
//     imageLocal: "https://maison-monde.com/wp-content/uploads/2017/02.jpg",
//     category: "architecture",
//     owner: [{ id: "61a5e9727242c8d1948cc143" }],
//   },
// };

export default mockedState as unknown as State;
