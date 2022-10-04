<script lang="ts">
  import { json, textarea, invalid } from "./state/json";
  import FormatButton from "./components/FormatButton.svelte";
</script>

<main>
  <textarea
    bind:this={$textarea}
    bind:value={$json}
    on:keydown={json.update}
    spellcheck="false"
    class:invalid={$invalid}
  />
  <FormatButton invalid={$invalid} on:click={json.format} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  textarea {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
    border-style: none;
    outline: none;
    resize: none;
    white-space: pre-wrap;
    transition: color ease-in 200ms 0ms;
  }

  textarea.invalid {
    color: var(--red);
  }

  textarea.invalid::selection {
    background-color: var(--red);
  }
</style>
