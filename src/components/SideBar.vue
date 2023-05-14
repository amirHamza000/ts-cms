<template>
  <section
    class="bg-green-400 fixed z-10 left-0 w-1/6 h-screen flex flex-col justify-between py-10 items-center"
    :class="{
      reduceWidth: props.sidebarStatus,
      transition: !props.sidebarStatus,
    }"
  >
    <nav class="flex flex-col gap-5 p-2">
      <span
        class="bg-green-200 2xl:px-18 2xl:py-2 xl:px-10 xl:py-2 lg:px-8 lg:py-2 rounded-full text-center font-Poppins shadow-lg"
        ><router-link to="/">Dashboard</router-link>
      </span>
      <span
        class="bg-green-200 2xl:px-20 2xl:py-2 xl:px-10 xl:py-2 lg:px-8 lg:py-2 rounded-full text-center font-Poppins shadow-lg"
        ><router-link to="/earnings">Earnings</router-link>
      </span>
      <span
        class="bg-green-200 2xl:px-18 2xl:py-2 xl:px-10 xl:py-2 lg:px-8 lg:py-2 rounded-full text-center font-Poppins shadow-lg"
        ><router-link to="/users">User</router-link>
      </span>
      <span
        class="bg-green-200 2xl:px-18 2xl:py-2 xl:px-10 xl:py-2 lg:px-8 lg:py-2 rounded-full text-center font-Poppins shadow-lg"
        ><router-link to="/admin">Admin</router-link>
      </span>
    </nav>

    <div>
      <button
        @click="showLogOutModal"
        class="font-Poppins font-semibold text-lg text-slate-700"
      >
        Log Out
      </button>
    </div>

    <div v-if="logOutModal">
      <Modal @close="closeModal">
        <div>
          <h3 class="font-Poppins text-lg">Are you sure you want to delete?</h3>
          <div class="flex justify-center items-center gap-16 mt-10">
            <button
              @click="closeModal"
              class="px-4 py-1 rounded font-Poppins text-white bg-slate-400"
            >
              Cancel
            </button>
            <button
              @click="handleLogOut"
              class="px-4 py-1 rounded font-Poppins text-white bg-red-500"
            >
              LogOut
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Modal from "./Modal.vue";
import { ref } from "vue";
const logOutModal = ref(false);
const router = useRouter();
const emit = defineEmits(["setAuth"]);
const props = defineProps(["sidebarStatus"]);

const showLogOutModal = () => {
  logOutModal.value = true;
};

const closeModal = () => {
  logOutModal.value = false;
};

const handleLogOut = () => {
  router.push({ path: "/" });
  emit("setAuth");
};
</script>

<style scoped>
  .router-link-active {
    color: #08a02e !important;
  }
  .reduceWidth {
    width: 0% !important;
    position: relative !important;
    z-index: 0 !important;
    transition: 0.6s;
  }
  .transition {
    transition: 0.6s;
  }
</style>
