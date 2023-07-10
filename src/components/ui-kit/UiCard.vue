<script lang="ts">
export default {
  name: "UiCard",
};
</script>

<template>
  <div class="ui-card">
    <div class="ui-card__info"></div>
    <div @click="handle" class="ui-card__btn"></div>
  </div>
</template>

<script setup lang="ts">
function handle() {
  window.indexBridge.runWindowsScript();
}
</script>

<style lang="scss" scoped>
.ui-card {
  background: $green-light;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  min-height: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  &__info {
    max-width: 270px;
    min-height: 130px;
    border-radius: 12px;
    width: 100%;
    background: $white;
  }
  &__btn {
    width: 60px;
    background: $white;
    border-radius: 100%;
    height: 60px;
  }
}
</style>
