<script setup>
import Header from "../components/Header.vue";
import OrderStages from "../components/OrderStages.vue";
</script>

<template>
  <main class="Product-Page">
    <Header title="Albatross Crop Jumpsuit" />
    <div class="grid grid-cols-[2fr_3fr] h-[75vh] mt-10">
      <div class="ml-16">
        <img
          class="fixed rounded-3xl h-[33rem]"
          src="../images/3109.png"
          alt="Albatros Crop Jumpsuit"
        />
      </div>
      <div>
        <section>
          <h5 class="font-text text-sm font-bold">FOR</h5>
          <h5 class="font-heading text-4xl mt-1 font-normal">Sanjana Singhania</h5>
          <h5 class="font-text text-sm mt-5 font-bold">STATUS</h5>
          <h5 class="font-heading text-4xl mt-1 font-normal">In Progress</h5>
        </section>
        <section class="grid gap-4 mt-5">
          <OrderStages stage="Khaaka" :svgNum="0" />
          <OrderStages stage="Dyeing" :svgNum="1" />
          <OrderStages stage="Handwork" :svgNum="2" />
          <OrderStages stage="Inspection" :svgNum="3" />
          <OrderStages stage="Delivery" :svgNum="4" />
        </section>
      </div>
    </div>
  </main>
</template>
