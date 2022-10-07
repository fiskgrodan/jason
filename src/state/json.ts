import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export const invalid = writable(false);

function createJSON({ invalid }: { invalid: Writable<boolean> }) {
  const { subscribe, set, update } = writable(
    sessionStorage.getItem("json") || ""
  );

  subscribe((json) => sessionStorage.setItem("json", json));

  const format = () => {
    try {
      update((json) => JSON.stringify(JSON.parse(json), null, 2));
      invalid.set(false);
    } catch {
      invalid.set(true);
    }
  };

  return {
    subscribe,
    set,
    update,
    format,
  };
}

export const json = createJSON({ invalid });
