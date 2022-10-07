<script>
  import { json, invalid } from "../state/json";
</script>

<button class:invalid on:click={json.format}
  ><span>&#123;&nbsp;&#125;</span></button
>

<style>
  button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
    border: 1px solid var(--gray);
    background-color: transparent;
    width: 30px;
    height: 30px;
    user-select: none;
    cursor: pointer;
    line-height: 1;
    font-size: 14px;
    transition: border ease-in 200ms 0ms, color ease-in 200ms 0ms;
  }

  button.invalid {
    border: 1px solid var(--red);
    color: var(--red);
  }

  button > span {
    margin-top: -2px;
  }
</style>
