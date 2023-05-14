<template>
  <div
    @click.self="onClose"
    class="fixed left-0 top-0 bg-rgbBG w-screen h-screen flex flex-col items-center z-50"
  >
    <div class="p-10 bg-white opacity-100 rounded-lg shadow-2xl mt-48">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

const onClose = () => {
  emit("close");
};
</script>

<style lang="scss" scoped></style>
