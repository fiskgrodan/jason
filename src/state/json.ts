import { writable } from "svelte/store";

function createJSON() {
  const input = writable(sessionStorage.getItem("json") || "");

  const addTab = () => {};

  const format = () => {};

  const update = (event: KeyboardEvent) => {};

  return {
    subscribe: input.subscribe,
    update,
  };
}

export const json = createJSON();
