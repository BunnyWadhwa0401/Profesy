<script setup>
import appointmentBox from "../components/appointmentBox.vue";
import EventBox from "../components/EventBox.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <main class="Calendar-page">
    <Header title="Your Calendar" />
    <div class="grid grid-cols-[4fr_2fr] mt-8">
      <section class="flex font-heading ml-[41vw] tracking-[0.25rem] items-end">
        <h3 class="text-xl">A</h3>
        <h3 class="text-xs pb-1 font-medium">PRIL</h3>
      </section>
      <section class="flex gap-4 justify-end">
        <h3 class="pt-1 font-text text-xs">ALL</h3>
        <h3 class="pt-1 font-text text-xs">APPOINTMENTS</h3>
        <h3 class="pt-1 font-text text-xs">DELIVERIES</h3>
      </section>
    </div>
    <section class="grid grid-cols-8 mt-6 justify-items-center gap-36">
      <section class="flex items-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.0607 14.9393C28.6464 15.5251 28.6464 16.4749 28.0607 17.0607L21.1213 24L28.0607 30.9393C28.6464 31.5251 28.6464 32.4749 28.0607 33.0607C27.4749 33.6464 26.5251 33.6464 25.9393 33.0607L17.9393 25.0607C17.3536 24.4749 17.3536 23.5251 17.9393 22.9393L25.9393 14.9393C26.5251 14.3536 27.4749 14.3536 28.0607 14.9393Z"
            fill="#333333"
          />
        </svg>
      </section>
      <section v-for="i in 6" :key="i">
        <appointment-box />
      </section>
      <section class="flex items-center justify-end">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9393 15.4393C20.5251 14.8536 21.4749 14.8536 22.0607 15.4393L30.0607 23.4393C30.6464 24.0251 30.6464 24.9749 30.0607 25.5607L22.0607 33.5607C21.4749 34.1464 20.5251 34.1464 19.9393 33.5607C19.3536 32.9749 19.3536 32.0251 19.9393 31.4393L26.8787 24.5L19.9393 17.5607C19.3536 16.9749 19.3536 16.0251 19.9393 15.4393Z"
            fill="#333333"
          />
        </svg>
      </section>
    </section>
    <section class="grid grid-cols-8 mt-6 justify-items-center gap-36">
      <section></section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 4" :key="i">
          <EventBox />
        </section>
      </section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 2" :key="i">
          <EventBox />
        </section>
      </section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 3" :key="i">
          <EventBox />
        </section>
      </section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 6" :key="i">
          <EventBox />
        </section>
      </section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 1" :key="i">
          <EventBox />
        </section>
      </section>
      <section class="grid h-40 gap-6 mt-5">
        <section v-for="i in 5" :key="i">
          <EventBox />
        </section>
      </section>
      <section></section>
    </section>
  </main>
</template>
