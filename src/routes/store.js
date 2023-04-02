import { writable } from "svelte/store";

export const createStore = () => {
  const { subscribe, set } = writable(0);

  return {
    subscribe,
    switch: (n) => set(n),
  };
};
