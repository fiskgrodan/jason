<script lang="ts">
  import Textarea from "./components/Textarea.svelte";
  import FormatButton from "./components/FormatButton.svelte";
</script>

<main>
  <Textarea />
  <FormatButton />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
