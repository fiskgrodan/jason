<script>
  import { json, invalid } from "../state/json";
</script>

<button class:invalid={$invalid} on:click={json.format} />

<style>
  button {
    position: absolute;
    right: 24px;
    bottom: 24px;
    width: 32px;
    height: 32px;
    background-color: var(--gray);
    border: none;
    border-radius: 50%;
    user-select: none;
    cursor: pointer;
    transition: background-color ease-in 256ms 0ms;
  }

  button.invalid {
    background-color: var(--red);
  }
</style>
