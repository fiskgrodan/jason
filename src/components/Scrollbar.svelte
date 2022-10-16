<script>
  import { onMount } from "svelte";
  import { json } from "../state/json";

  let top = 0;
  let middle = 100;

  const update = () => {
    const textarea = document.getElementById("textarea");
    if (!textarea) return;
    const { scrollHeight, offsetHeight, scrollTop } = textarea;

    top = 100 * (scrollTop / scrollHeight);
    middle = 100 * (offsetHeight / scrollHeight);
  };

  onMount(() => {
    const textarea = document.getElementById("textarea");

    textarea.addEventListener("scroll", update);

    return () => {
      textarea.removeEventListener("scroll", update);
    };
  });

  json.subscribe(() => update());
</script>

<svelte:window on:resize={update} />

<div class="scrollbar">
  <div class="top" style:height={`${top}vh`} />
  <div class="middle" style:height={`${middle}vh`} />
  <div class="bottom" />
</div>

<style>
  .scrollbar {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 5px;
    overflow-y: hidden;
  }

  .top,
  .bottom {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .bottom {
    flex-grow: 1;
  }
</style>
