<script>
  export let invalid = false;
</script>

<button class:invalid on:click>&#123;&nbsp;&#125;</button>

<style>
  button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: var(--gray);
    border: 2px solid var(--gray);
    background-color: transparent;
    padding: 8px 8px;
    cursor: pointer;
    transition: border ease-in 200ms 0ms, color ease-in 200ms 0ms;
  }

  button.invalid {
    border: 2px solid var(--red);
    color: var(--red);
  }
</style>
