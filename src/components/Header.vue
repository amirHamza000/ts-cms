<template>
  <section class="flex justify-between px-5 py-5 bg-blue-900 z-40">
    <div>
      <div class="flex gap-10 items-center">
        <font-awesome-icon
          @click="handleToggle"
          icon="fa-solid fa-arrow-up-from-bracket"
          class="text-xl text-white -rotate-90 cursor-pointer ease-in-out duration-1000"
          :class="{ rotate: props.sidebarStatus }"
        />
        <h3 class="text-white font-Poppins text-lg tracking-wider">
          Vue JS Template
        </h3>
      </div>
    </div>
    <div
      class="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-sm shadow-slate-400"
    >
      <router-link to="/profile"
        ><font-awesome-icon icon="fa-solid fa-user" size="lg"
      /></router-link>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["toggle"]);
const props = defineProps(["sidebarStatus"]);
const handleToggle = () => {
  emit("toggle");
};
</script>

<style scoped>
.rotate {
  transform: rotate(90deg);
  transition: 0.4s;
}
</style>
