<script lang="ts">
  import Textarea from "./components/Textarea.svelte";
  import Indicator from "./components/Indicator.svelte";
</script>

<main>
  <Textarea />
  <Indicator />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
