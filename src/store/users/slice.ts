import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
}

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "Ricky Cortés",
    email: "rickycortes668668@gmail.com",
    github: "RickyBv1",
  },
  {
    id: "2",
    name: "María González",
    email: "mariagonzales58@gmail.com",
    github: "MariaGonzalez",
  },
  {
    id: "3",
    name: "Jorge Ramírez",
    email: "jorgeramirez24@gmail.com",
    github: "JorgeRamirez",
  },
  {
    id: "4",
    name: "Carlos Torres",
    email: "carlostorres67@gmail.com",
    github: "CarlosTorres",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
