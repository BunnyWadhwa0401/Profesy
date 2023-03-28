<script setup>
import appointmentBox from "../components/appointmentBox.vue";
import EventBox from "../components/EventBox.vue";
import Header from "../components/Header.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";

let appointments = ref(localStorage.getItem("Appointments"));
appointments.value = JSON.parse(appointments.value.replace(/'/g, '"'));

let deliveries = ref(localStorage.getItem("Deliveries"));
deliveries.value = JSON.parse(deliveries.value.replace(/'/g, '"'));

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
let dayOfWeek = today.getDay();
let date = today.getDate();
const day = () => { return daysOfWeek[dayOfWeek++] };

onMounted(() => {
  const timeLine = gsap.timeline({
    Defaults: { Easing: "Expo.easeInOut" },
  });
  timeLine
    .fromTo(".fadeIn section",
      {
        width: 10,
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        stagger: 0.2,
      }
    )
    .fromTo(
      ".tile, .tile div",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.01,
      },
      // "-=1"
    )
})
</script>

<template>
  <main class="Calendar-page h-screen">
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
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M28.0607 14.9393C28.6464 15.5251 28.6464 16.4749 28.0607 17.0607L21.1213 24L28.0607 30.9393C28.6464 31.5251 28.6464 32.4749 28.0607 33.0607C27.4749 33.6464 26.5251 33.6464 25.9393 33.0607L17.9393 25.0607C17.3536 24.4749 17.3536 23.5251 17.9393 22.9393L25.9393 14.9393C26.5251 14.3536 27.4749 14.3536 28.0607 14.9393Z"
            fill="#333333" />
        </svg>
      </section>
      <section v-for="i in 6" :key="i">
        <appointment-box :day="day()" :date="date < 32 ? date++ : date = 1" />
      </section>
      <section class="flex items-center justify-end">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.9393 15.4393C20.5251 14.8536 21.4749 14.8536 22.0607 15.4393L30.0607 23.4393C30.6464 24.0251 30.6464 24.9749 30.0607 25.5607L22.0607 33.5607C21.4749 34.1464 20.5251 34.1464 19.9393 33.5607C19.3536 32.9749 19.3536 32.0251 19.9393 31.4393L26.8787 24.5L19.9393 17.5607C19.3536 16.9749 19.3536 16.0251 19.9393 15.4393Z"
            fill="#333333" />
        </svg>
      </section>
    </section>
    <section class="grid grid-cols-8 mt-6 justify-items-center gap-36">
      <section></section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '27/03/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '28/03/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '29/03/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '30/03/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '31/03/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section class="tile grid h-40 gap-6 mt-5">
        <section v-show="appointment[2] == '01/04/2023'" v-for="appointment in appointments" :key="appointment">
          <EventBox :name="appointment[0]" :description="appointment[1]" :color="appointment[4]" :time="appointment[3]" />
        </section>
      </section>
      <section></section>
    </section>

  </main>
</template>
