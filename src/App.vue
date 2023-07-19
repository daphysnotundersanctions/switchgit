<script setup lang="ts">
import Header from "./components/Header.vue";
import UiCard from "./components/ui-kit/UiCard.vue";
import Adder from "./components/Adder.vue";
</script>

<template>
  <Header />
  <div class="list">
    <UiCard />
  </div>
  <Adder />
</template>

<!-- <style>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
}
</style> -->
