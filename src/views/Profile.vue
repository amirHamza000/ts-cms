<template>
  <section>
    <div
      v-if="!editProfile"
      class="relative bg-slate-200 rounded p-10 w-2/6 m-10"
    >
      <div class="absolute right-4 top-4">
        <font-awesome-icon
          @click="handleEditProfile"
          class="text-green-500 cursor-pointer"
          icon="fa-solid fa-pen-to-square"
          size="lg"
        />
      </div>
      <div class="flex items-center gap-5 my-10">
        <div class="bg-slate-500 w-36 h-36 rounded-full"></div>
        <div>
          <h3 class="font-Poppins text-green-400 font-medium text-xl">
            {{ adminData.name }}
          </h3>

          <h4 class="font-Poppins text-gray-800 font-normal text-base">
            {{ adminData.email }}
          </h4>

          <h4
            class="text-center font-Poppins text-white font-light text-base bg-blue-800 rounded my-5 capitalize"
          >
            {{ adminData.typeOf }}
          </h4>
        </div>
      </div>
    </div>
    <div
      v-else
      class="relative bg-slate-200 rounded p-10 w-2/6 m-10 flex flex-col items-center"
    >
      <div class="absolute right-4 top-4">
        <font-awesome-icon
          @click="handleCloseEditProfile"
          class="text-red-500 cursor-pointer"
          icon="fa-solid fa-rectangle-xmark"
          size="lg"
        />
      </div>
      <div class="my-10">
        <div class="w-36 h-36">
          <label for="image"
            ><div class="bg-slate-500 w-36 h-36 rounded-full"></div>
          </label>
          <input @change="imageUpload" id="image" type="file" class="hidden" />
        </div>
        <div class="my-10">
          <div>
            <label class="font-Poppins block mb-2">Full Name</label>
            <input
              type="text"
              v-model="adminData.name"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>
          <div class="my-4">
            <label class="font-Poppins block mb-2">Email</label>
            <input
              type="text"
              v-model="adminData.email"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>
          <div class="my-4">
            <label class="font-Poppins block mb-2">Password</label>
            <input
              type="text"
              v-model="password"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>

          <button
            @click="handleUpdateData"
            class="w-96 font-Poppins bg-blue-900 py-2 text-white mt-5 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const password = ref();
const image = ref();

const editProfile = ref(false);
const adminData = ref({
  name: "Atikul Islam",
  email: "atikulislam@gmail.com",
  typeOf: "Super Admin",
});

const handleEditProfile = () => {
  editProfile.value = true;
};
const handleCloseEditProfile = () => {
  editProfile.value = false;
};

const imageUpload = (e) => {
  image.value = e.target.files[0];
};

const handleUpdateData = () => {
  handleCloseEditProfile();
};
</script>

<style scoped></style>
