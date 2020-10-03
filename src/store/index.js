import create from "zustand";

export const useStore = create((set) => ({
  user: {},
  newUser: "",
  error: "",
}));
