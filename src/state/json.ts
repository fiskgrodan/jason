import { writable, derived, get } from "svelte/store";
import { tick } from "svelte";
import type { Writable } from "svelte/store";

export const textarea = writable<HTMLTextAreaElement | null>(null);

export const invalid = writable(false);

function createJSON({
  textarea,
  invalid,
}: {
  textarea: Writable<HTMLTextAreaElement | null>;
  invalid: Writable<boolean>;
}) {
  const value = writable(sessionStorage.getItem("json") || "");

  const format = () => {
    // Check if valid
    if (!isValidJSON(get(value))) {
      invalid.set(true);
      return;
    }
    invalid.set(false);

    // Format
    value.update((json) => JSON.stringify(JSON.parse(json), null, 2));

    // Update selection
    const { length } = get(value);
    tick().then(() => get(textarea).setSelectionRange(length, length));
  };

  const addTab = () => {
    // Get selection
    const { selectionStart: start, selectionEnd: end } = get(textarea);

    // Add tab to value
    value.update((json) =>
      [json.slice(0, start), "  ", json.slice(end)].join("")
    );

    // Update selection
    tick().then(() => get(textarea).setSelectionRange(start + 2, end + 2));
  };

  const update = (event: KeyboardEvent) => {
    if (get(textarea) === null) return;

    if ((event.metaKey || event.ctrlKey) && event.code === "KeyS") {
      event.preventDefault();
      format();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      addTab();
    }

    sessionStorage.setItem("json", get(value));
  };

  return {
    subscribe: value.subscribe,
    set: value.set,
    update,
    format,
  };
}

export const json = createJSON({ textarea, invalid });

const isValidJSON = (json: string) => {
  try {
    JSON.parse(json);
  } catch (exception) {
    return false;
  }

  return true;
};
