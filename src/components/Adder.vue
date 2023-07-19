<script lang="ts">
export default {
  name: "Add",
};
</script>

<template>
  <div class="adder">
    <div @click="modalState = true" class="adder__btn">
      <img src="../assets/icons/arrow.svg" alt="" />
    </div>
    <swipe-modal
      v-model="modalState"
      contents-height="50vh"
      border-top-radius="12px"
    >
      <input type="text" />
    </swipe-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import swipeModal from "@takuma-ru/vue-swipe-modal";
const modalState = ref(false);
</script>

<style lang="scss" scoped>
.adder {
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
