<template>
  <button :class="buttonColor" @click.prevent="clickEvent(id)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    clickEvent: {
      type: Function,
    },
    id: {
      type: String,
      required: true,
    },
    typeAdd: {
      type: Boolean,
    },
    typeDelete: {
      type: Boolean,
    },
    typeConfirm: {
      type: Boolean,
    },
    typeEdit: {
      type: Boolean,
    },
    typeSignIn: {
      type: Boolean,
    },
    typeSignUp: {
      type: Boolean,
    },
    typeCancel: {
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
      signUp: "signup",
      signIn: "signin",
      cancel: "cancel",
    };
  },
  computed: {
    buttonColor: function () {
      return [
        this.d,
        this.typeAdd ? this.add : "",
        this.typeDelete ? this.delete : "",
        this.typeConfirm ? this.confirm : "",
        this.typeSignIn ? this.signIn : "",
        this.typeSignUp ? this.signUp : "",
        this.typeEdit ? this.edit : "",
        this.typeCancel ? this.cancel : "",
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
.signup,
.signin {
  background: crimson;
}
.cancel {
  background: purple;
}
</style>