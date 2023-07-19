<script lang="ts">
export default {
  name: "UiCard",
};
</script>

<template>
  <div class="ui-card">
    <div class="ui-card__info"></div>
    <div @click="handle" class="ui-card__btn">
      <img src="../../assets/icons/arrow.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
function handle() {
  window.indexBridge.runWindowsScript();
}
</script>

<style lang="scss" scoped>
.ui-card {
  background: $base-bg;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  min-height: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 36px 0px rgba(0, 0, 0, 0.25);
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    cursor: pointer;
  }
}
</style>
