<template>
  <button
    class="default"
    :style="{
      background: bgColor,
    }"
    @click.prevent="clickEvent(id)"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: "",
    },
    bgColor: {
      type: String,
      required: true,
      default: "",
    },
    clickEvent: {
      type: Function,
      default: function () {
      },
    },
    id: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style>
.default {
  padding: 10px;
  border: none;
  margin: 10px;
  border-radius: 10px;
  color: white;
  transition: 0.4s;
}
.default:hover {
  transform: scale(1.2);
  cursor: pointer;
  border: none;
}
.default:focus {
  outline: none;
}
</style>