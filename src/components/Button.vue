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
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    clickEvent: {
      type: Function
    },
    id: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped lang='scss'>
.default {
  padding: 10px;
  border: none;
  margin: 10px;
  border-radius: 10px;
  color: white;
  transition: 0.4s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    border: none;
  }
  &:focus {
    outline: none;
  }
}
</style>