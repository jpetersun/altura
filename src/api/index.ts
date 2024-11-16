export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
}

const users = {
  users: [
    {
      id: 1234,
      firstName: "John",
      lastName: "Smith",
      username: "jsmith",
      phoneNumber: "949-867-5309",
    },
    {
      id: 2345,
      firstName: "Loyd",
      lastName: "Bridges",
      username: "lbridges",
      phoneNumber: "949-665-9087",
    },
    {
      id: 3456,
      firstName: "Jennifer",
      lastName: "Hunt",
      username: "jhunt",
      phoneNumber: "949-654-7890",
    },
    {
      id: 4567,
      firstName: "Wendy",
      lastName: "Violet",
      username: "wviolet",
      phoneNumber: "949-789-9990",
    },
  ],
};

export interface Users {
  users: User[];
}

export const fetchUsers = (): Users => {
  return users;
};
