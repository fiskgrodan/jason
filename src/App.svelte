<script lang="ts">
  import Textarea from "./components/Textarea.svelte";
  import Indicator from "./components/Indicator.svelte";
  import Scrollbar from "./components/Scrollbar.svelte";
</script>

<main>
  <Textarea />
  <Indicator />
  <Scrollbar />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
