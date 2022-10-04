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
    transition: color ease-in 200ms 0ms;
  }

  textarea.invalid {
    color: var(--red);
  }
</style>
