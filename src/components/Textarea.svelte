<script lang="ts">
  import { tick } from "svelte";
  import { json, invalid } from "../state/json";

  let textarea: HTMLTextAreaElement | null = null;

  const keydown = (event: KeyboardEvent) => {
    // Save/Format
    if ((event.metaKey || event.ctrlKey) && event.code === "KeyS") {
      event.preventDefault();
      json.format();
    }

    // Tab
    if (event.key === "Tab") {
      event.preventDefault();
      const { selectionStart: start, selectionEnd: end } = textarea;

      json.update((json) =>
        [json.slice(0, start), "  ", json.slice(end)].join("")
      );

      tick().then(() => textarea.setSelectionRange(start + 2, end + 2));
    }
  };
</script>

<textarea
  bind:this={textarea}
  bind:value={$json}
  on:keydown={keydown}
  spellcheck="false"
  class:invalid={$invalid}
/>

<style>
  textarea {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
    border-style: none;
    outline: none;
    resize: none;
    white-space: pre-wrap;
    transition: color ease-in 200ms 0ms;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  textarea.invalid {
    color: var(--red);
  }

  textarea.invalid::selection {
    background-color: var(--red);
  }

  textarea::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
</style>
