<script lang="ts">
  import { tick } from "svelte";

  let json = sessionStorage.getItem("json") || "";
  let textarea: HTMLTextAreaElement | null = null;

  $: {
    sessionStorage.setItem("json", json);
  }

  const keydown = (event: KeyboardEvent) => {
    if (event.metaKey && event.code === "KeyS") {
      event.preventDefault();
      const { selectionStart: start, selectionEnd: end } = textarea;
      json = JSON.stringify(JSON.parse(json), null, 2);

      tick().then(() => {
        textarea.setSelectionRange(start, end);
      });
    }

    if (event.key === "Tab") {
      event.preventDefault();
      const { selectionStart: start, selectionEnd: end } = textarea;
      json = [json.slice(0, start), "  ", json.slice(end)].join("");

      tick().then(() => {
        textarea.setSelectionRange(start + 2, end + 2);
      });
    }
  };
</script>

<main>
  <textarea
    bind:this={textarea}
    bind:value={json}
    on:keydown={keydown}
    spellcheck="false"
  />
</main>

<style>
  main,
  textarea {
    width: 100vw;
    height: 100vh;
  }

  textarea {
    box-sizing: border-box;
    padding: 20px;
    border-style: none;
    outline: none;
    resize: none;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: pre-wrap;
  }
</style>
