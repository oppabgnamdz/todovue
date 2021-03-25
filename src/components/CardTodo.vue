<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <span class="content">{{ content }}</span>
    </div>
    <div class="card__actions">
      <button @click.prevent class="card__actions--delete">DELETE</button>
      <button @click.prevent class="card__actions--edit">EDIT</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style>
.card {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
}
.card__actions--delete {
  background-color: #cc434a;
  padding: 10px;
  color: white;
  border: none;
  margin: 0 10px;
  border-radius: 5px;
}
.card__actions--edit {
  background-color: #51a452;
  padding: 10px;
  color: white;
  border: none;
  margin: 0 10px;
  border-radius: 5px;
}
.content {
  margin-left: 20px;
}
</style>