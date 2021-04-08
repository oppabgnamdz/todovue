<template>
  <button :class="buttonColor" @click.prevent="$emit('onClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
    },
    danger: {
      type: Boolean,
    },
    dark: {
      type: Boolean,
    },
    success: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
  },
 
  data() {
    return {
      d: "default",
      add: "add",
      delete: "delete",
      edit: "edit",
      confirm: "confirm",
      cancel: "cancel",
    };
  },
  computed: {
    buttonColor: function () {
      return [
        this.d,
        this.primary ? this.add : "",
        this.danger ? this.delete : "",
        this.dark ? this.confirm : "",
        this.success ? this.edit : "",
        this.secondary ? this.cancel : "",
      ];
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
.add {
  background: #2e7df4;
}
.delete {
  background: #cc434a;
}
.edit {
  background: #51a452;
}
.confirm {
  background: black;
}
.cancel {
  background: purple;
}
</style>