import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
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

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;
