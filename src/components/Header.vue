<script lang="ts">
export default {
  name: "Header",
};
</script>

<template>
  <header class="header">
    <p class="header__title">switchGIT</p>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  background: $green-light;
  padding: 18px;
  &__title {
    font-size: 26px;
    font-weight: 800;
  }
}
</style>
