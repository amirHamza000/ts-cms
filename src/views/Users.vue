<template>
  <section class="w-full h-screen bg-slate-200 pt-10">
    <div class="w-11/12 rounded-xl mx-auto p-5 bg-white">
      <ul class="grid grid-cols-5 gap-10 p-5">
        <li class="font-Poppins text-base font-semibold text-green-500">
          Name
        </li>
        <li class="font-Poppins text-base font-semibold text-green-500">
          Location
        </li>
        <li class="font-Poppins text-base font-semibold text-green-500">
          Spend
        </li>
        <li class="font-Poppins text-base font-semibold text-green-500">
          Customer Type
        </li>
        <li class="font-Poppins text-base font-semibold text-green-500">
          Action
        </li>
      </ul>

      <div v-for="user in users" :key="user.id">
        <ul class="grid grid-cols-5 gap-10 p-5">
          <li class="font-Poppins text-base font-medium text-gray-500">
            {{ user.name }}
          </li>
          <li class="font-Poppins text-base font-medium text-gray-500">
            {{ user.location }}
          </li>
          <li class="font-Poppins text-base font-medium text-gray-500">
            {{ user.spend }}
          </li>
          <li
            class="font-Poppins text-base font-medium text-gray-500 capitalize"
          >
            {{ user.type }}
          </li>
          <li class="font-Poppins text-base font-medium text-gray-500">....</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const users = [
  {
    id: 1,
    name: "Rosetta Kozey",
    location: "Sumter - Unit 692 (Villa San Antonio) ",
    spend: 330,
    type: "regular",
  },
  {
    id: 2,
    name: "Everardo Smitham",
    location: "Unit 815 (Hallandale Villas) ",
    spend: 380,
    type: "new",
  },
  {
    id: 3,
    name: "Rosetta Kozey",
    location: "Sumter - Unit 692 (Villa San Antonio) ",
    spend: 400,
    type: "regular",
  },
  {
    id: 4,
    name: "Everardo Smitham",
    location: "Unit 815 (Hallandale Villas) ",
    spend: 290,
    type: "regular",
  },
  {
    id: 5,
    name: "Everardo Smitham",
    location: "Unit 815 (Hallandale Villas) ",
    spend: 440,
    type: "new",
  },
  {
    id: 6,
    name: "Rosetta Kozey",
    location: "Sumter - Unit 692 (Villa San Antonio) ",
    spend: 130,
    type: "regular",
  },
  {
    id: 7,
    name: "Rosetta Kozey",
    location: "Sumter - Unit 692 (Villa San Antonio) ",
    spend: 530,
    type: "new",
  },
  {
    id: 8,
    name: "Rosetta Kozey",
    location: "Sumter - Unit 692 (Villa San Antonio) ",
    spend: 330,
    type: "regular",
  },
];
</script>

<style scoped></style>
