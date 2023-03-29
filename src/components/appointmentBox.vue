<script lang="ts" setup>
const props = defineProps({ date: String, day: Number, number: Number });
</script>

<template>
  <section class="grid rounded-[16px_16px_24px_24px] h-[8rem] w-[10rem] bg-white shadow-xl shadow-grey/10">
    <div class="mt-6">
      <h5 class="grid justify-center font-heading text-dark font-medium text-lg">{{ props.date }}</h5>
      <h5 class="grid justify-center font-text text-grey pt-1">{{ props.day }}</h5>
    </div>
    <div class="flex rounded-[0px_0px_16px_16px] bg-black text-white justify-center">
      <h5 class="grid items-center font-heading">{{ props.number }}</h5>
    </div>
  </section>
</template>
