<template>
  <main>
    <div v-if="!isAuth">
      <Login @login="handleLogin" />
    </div>

    <section v-else class="flex w-full h-full">
      <div class="basis-1/6 h-screen" :class="{ hide: hideSidebar !== false, show: hideSidebar === false }">
        <SideBarVue @setAuth="handleLogOut" :sidebarStatus="hideSidebar" />
      </div>
      <div class="basis-5/6" :class="{ fullWidth: hideSidebar === true }">
        <div>
          <HeaderVue @toggle="toggleSidebar" :sidebarStatus="hideSidebar" />
        </div>
        <div><router-view /></div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">

import { useRouter } from "vue-router";
import SideBarVue from "./components/SideBar.vue";
import HeaderVue from "./components/Header.vue";
import Login from "./views/Login.vue";
import { ref } from "vue";
const router = useRouter();
const isAuth = ref<boolean>(false);

const hideSidebar = ref(false);

const handleLogin = (email: string, pass: string) => {
  isAuth.value = true;
  router.push("/");
  if (email === "admin@gmail.com" && pass === "Test123@") {
    isAuth.value = true;
  }
};

const handleLogOut = () => {
  isAuth.value = false;
};

const toggleSidebar = () => {
  hideSidebar.value = !hideSidebar.value;
};
</script>

<style>
.hide {
  position: absolute;
  z-index: -99;
  left: -20%;
  margin-left: 0%;
  flex-basis: 0 !important;
  transition: 0.6s !important;
}

.fullWidth {
  flex-basis: 100% !important;
  position: relative;
  z-index: 30;
}

.show {
  transition: 0.6s !important;
}
</style>
