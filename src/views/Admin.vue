<template>
  <section>
    <div class="p-10 flex justify-between items-center">
      <h3 class="font-Poppins text-lg">Admin</h3>
      <button
        @click="showModal"
        class="font-Poppins bg-green-500 px-5 py-2 rounded-full text-white"
      >
        Add+
      </button>
    </div>
    <div v-if="adminState.addAdminModal">
      <ModalVue @close="closeModal">
        <div>
          <h3 class="font-Poppins my-2 text-lg">Add Admin Form</h3>
          <div>
            <label class="font-Poppins block mb-2">Full Name</label>
            <input
              type="text"
              v-model="adminState.name"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>
          <div class="my-4">
            <label class="font-Poppins block mb-2">Email</label>
            <input
              type="text"
              v-model="adminState.email"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>
          <div>
            <label class="font-Poppins block mb-2">Type</label>
            <select
              v-model="adminState.type"
              class="w-full bg-blue-200 p-2 border-1 font-Poppins text-sm"
            >
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="Supper Admin">Supper Admin</option>
            </select>
          </div>
          <div class="my-4">
            <label class="font-Poppins block mb-2">Password</label>
            <input
              type="text"
              v-model="adminState.password"
              class="bg-blue-200 w-96 p-2 rounded font-Poppins outline-none"
            />
          </div>

          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="font-Poppins text-sm">
              <input v-model="adminState.checkbox" type="checkbox" /> I'm aware of giving
              the specified access to this user.</label
            >
          </div>

          <button
            @click="handleAddAdmin"
            :disabled="!adminState.checkbox"
            class="w-full font-Poppins bg-blue-900 py-2 text-white mt-5 rounded"
            :class="{ app: !adminState.checkbox }"
          >
            Add
          </button>
        </div>
      </ModalVue>
    </div>

    <div class="grid grid-cols-4 gap-10 p-10">
      <div v-for="admin in adminList" :key="admin.id">
        <div
          class="relative w-64 h-80 rounded-lg shadow-2xl bg-slate-400 p-3 flex flex-col items-center"
        >
          <div class="absolute right-6">
            <font-awesome-icon
              @click="showDeleteModal(admin.id)"
              class="text-red-500 cursor-pointer"
              icon="fa-solid fa-trash"
              size="lg"
            />
          </div>
          <div
            class="w-28 h-28 rounded-full bg-slate-200 mt-5 flex justify-center items-center"
          >
            <h4 class="font-Poppins text-gray-700 font-light text-base">
              Avatar
            </h4>
          </div>
          <div class="my-5 text-center">
            <h3 class="font-Poppins text-white font-medium text-lg">
              {{ admin.name }}
            </h3>

            <h4 class="font-Poppins text-gray-700 font-light text-base">
              {{ admin.email }}
            </h4>

            <h4
              class="font-Poppins text-white font-light text-base bg-blue-800 rounded my-5 capitalize"
            >
              {{ admin.typeOf }}
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div v-if="adminState.deleteModal">
      <ModalVue @close="closeDeleteModal">
        <div>
          <h3 class="font-Poppins text-lg">Are you sure you want to delete?</h3>
          <div class="flex justify-center items-center gap-16 mt-10">
            <button
              @click="closeDeleteModal"
              class="px-4 py-1 rounded font-Poppins text-white bg-slate-400"
            >
              Cancel
            </button>
            <button
              @click="handleDelete"
              class="px-4 py-1 rounded font-Poppins text-white bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </ModalVue>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import IAdmin from '../types/Admin';
import IAddAdmin from '../types/AddAdmin';
import ModalVue from "@/components/Modal.vue";


const adminList = ref<IAdmin[]>([
  {
    id: 1,
    name: "Atikul Islam",
    email: "atikulislam@gmail.com",
    typeOf: "Super Admin",
  },
  { id: 1, name: "Amir Hamza", email: "amir@gmail.com", typeOf: "moderator" },
  { id: 2, name: "Adil Abbas", email: "adilabbas@gmail.com", typeOf: "admin" },
  { id: 3, name: "Nh Rasel", email: "nhrasel@gmail.com", typeOf: "admin" },
  { id: 4, name: "Aminul Islam", email: "aminul@gmail.com", typeOf: "admin" },
]);

const adminState = reactive<IAddAdmin>({
  addAdminModal: false ,
  deleteModal: false,

  name: '',
  email: '',
  password: '',
  type: '',
  checkbox: false,

  deletedId: NaN,

})

const showModal = () => {
  adminState.addAdminModal = true;
};

const closeModal = () => {
  adminState.addAdminModal = false;
};

const showDeleteModal = (id:number) => {
  adminState.deleteModal = true;
  adminState.deletedId = id;
};

const closeDeleteModal = () => {
  adminState.deleteModal = false;
};

const handleAddAdmin = () => {
  const add = adminList.value.push({
    id: parseInt(adminList.length + 1),
    name: adminState.name,
    email: adminState.email,
    typeOf: adminState.type,
  });

  closeModal();
};

console.log(adminList);

const handleDelete = () => {
  const result = adminList.value.filter((e, i) => {
    if (e.id !== adminState.deletedId) {
      return e;
    }
  });
  adminList.value = result;
  closeDeleteModal();
};
</script>

<style scoped>
.app {
  background: #7e7e7e;
}
</style>
