<template>
  <button
    class="default"
    :style="{
      background: bgColor,
    }"
    @click.prevent='clickEvent(id)'
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: ["content", "bgColor",'clickEvent',"id"],
  setup() {},
};
</script>

<style>
.default {
  padding: 10px;
  border: none;
  margin: 10px;
  border-radius: 10px;
  color: black;
}
.default:focus {
  outline: none;
}
</style>