<template>
  <section class="flex justify-center items-center w-full h-screen">
    <div class="bg-green-400 shadow-2xl px-10 py-10 rounded-lg">
      <!-- <form> -->
      <div>
        <label class="font-Poppins block mb-2"> Email </label>
        <input
          type="text"
          v-model="email"
          class="bg-blue-200 w-96 p-2 rounded font-Poppins"
        />
      </div>

      <div class="mt-5">
        <label class="font-Poppins block mb-2"> Password </label>
        <input
          type="password"
          v-model="password"
          class="bg-blue-200 w-96 p-2 rounded font-Poppins"
        />
      </div>
      <button
        @click="handleLogin"
        class="w-full font-Poppins bg-blue-900 py-2 text-white mt-5 rounded"
      >
        Login
      </button>
      <!-- </form> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["login"]);
const email = ref("admin@gmail.com");
const password = ref("Test123@");

const handleLogin = () => {
  emit("login", { email: email.value, password: password.value });
};
</script>

<style lang="scss" scoped></style>
