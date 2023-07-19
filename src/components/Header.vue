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
  background: $base-bg;
  padding: 15px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  &__title {
    color: $white;
    font-size: 26px;
    font-weight: bold;
  }
}
</style>
