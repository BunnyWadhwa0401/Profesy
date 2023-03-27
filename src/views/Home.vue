<script lang="ts" setup>
import ProgressDial from "../components/ProgressDial.vue";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";

let orders = ref(localStorage.getItem("Orders"));
orders.value = JSON.parse(orders.value.replace(/'/g, '"'));

function formatDate(dateString) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateArr = dateString.split("/");
  const day = parseInt(dateArr[0]);
  const month = parseInt(dateArr[1]) - 1;
  const year = parseInt(dateArr[2]);
  const date = new Date(year, month, day);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (date.toDateString() === today.toDateString()) {
    return "to be delivered today";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "to be delivered tomorrow";
  } else {
    const weekdayIndex = date.getDay();
    const weekday = weekdays[weekdayIndex];
    return `to be delivered on ${weekday}`;
  }
}

function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

onMounted(() => {
  const timeLine = gsap.timeline({
    Defaults: { Easing: "Expo.easeInOut" },
  });
  timeLine
    .fromTo(
      "#welcome *",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
      }
    )
    .fromTo(
      ".ltor",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "-=0.5"
    )
    .fromTo(
      ".ltor circle",
      {
        strokeDasharray: 0,
        opacity: 0,
      },
      {
        strokeDasharray: 436,
        opacity: 1,
        stagger: 0.2,
      },
      "-=0.5"
    )
    .fromTo(
      ".tile",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
      },
      "-=1"
    )
    .fromTo(
      ".head *",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
      },
      "-=6.4"
    );

  let randomProgress = function () {
    return randomNum(5, 95);
  }; // set the progress percentage here

  let progressBar = document.querySelectorAll(".progress");
  progressBar.forEach((el, index) => {
    let progress = randomProgress();
    el.style.width = `${progress}%`;
    document.querySelectorAll(".progress-text")[
      index
    ].innerHTML = `${progress}%`;
  });
});
const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
});
const formattedDate = computed(() => {
  const date = new Date();
  const day = date.getDate();
  let suffix;
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
  return `${day}${suffix} ${month}, ${dayOfWeek}`;
});
</script>

<template>
  <main class="home-page">
    <div class="flex justify-between">
      <section id="welcome">
        <h1 class="font-heading text-4xl mb-0">{{ greeting }}, Ginni !</h1>
        <h3 class="font-text font-normal text-base text-grey mt-0">
          {{ formattedDate }} | 4 appointments
        </h3>
      </section>
      <section class="grid grid-cols-2 items-center w-12 gap-4">
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_21_29)">
            <circle cx="16" cy="9" r="1" fill="#FF2400" fill-opacity="0.8" shape-rendering="crispEdges" />
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.9999 6C12.9999 5.44772 12.5522 5 11.9999 5C11.4477 5 10.9999 5.44772 10.9999 6V6.75H10.4425C8.21745 6.75 6.37585 8.48001 6.23695 10.7007L6.01595 14.2342C5.93169 15.5814 5.4794 16.8797 4.70834 17.9876C4.01166 18.9886 4.63188 20.3712 5.84281 20.5165L9.24994 20.9254V22C9.24994 23.5188 10.4812 24.75 11.9999 24.75C13.5187 24.75 14.7499 23.5188 14.7499 22V20.9254L18.1571 20.5165C19.368 20.3712 19.9882 18.9886 19.2915 17.9876C18.5205 16.8797 18.0682 15.5814 17.9839 14.2342L17.7629 10.7007C17.624 8.48001 15.7824 6.75 13.5573 6.75H12.9999V6ZM10.4425 8.25C9.00952 8.25 7.82348 9.36417 7.73403 10.7944L7.51303 14.3278C7.41163 15.949 6.86738 17.5112 5.93953 18.8444C5.88918 18.9168 5.934 19.0167 6.02153 19.0272L9.75919 19.4757C11.2477 19.6543 12.7522 19.6543 14.2407 19.4757L17.9783 19.0272C18.0659 19.0167 18.1107 18.9168 18.0603 18.8444C17.1325 17.5112 16.5882 15.949 16.4868 14.3278L16.2658 10.7944C16.1764 9.36417 14.9903 8.25 13.5573 8.25H10.4425ZM11.9999 23.25C11.3096 23.25 10.7499 22.6904 10.7499 22V21.25H13.2499V22C13.2499 22.6904 12.6903 23.25 11.9999 23.25Z"
            fill="#333333" />
          <defs>
            <filter id="filter0_d_21_29" x="7" y="0" width="18" height="18" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_21_29" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.141176 0 0 0 0 0 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_29" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_29" result="shape" />
            </filter>
          </defs>
        </svg>

        <svg class="mt-[2.5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.3851 15.4457C11.7349 17.5684 7.85544 17.4013 5.39866 14.9445C2.76262 12.3085 2.76262 8.03464 5.39866 5.3986C8.0347 2.76256 12.3086 2.76256 14.9446 5.3986C17.4014 7.85538 17.5685 11.7348 15.4458 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8337 20.8943 19.5408 20.6014L14.3851 15.4457ZM6.45932 13.8839C4.40907 11.8336 4.40907 8.50951 6.45932 6.45926C8.50957 4.40901 11.8337 4.40901 13.8839 6.45926C15.9327 8.50801 15.9342 11.8287 13.8885 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50807 15.9326 6.45932 13.8839Z"
            fill="#333333" />
        </svg>
      </section>
    </div>
    <div class="grid grid-cols-3 w-full h-[14rem] gap-4 justify-between">
      <div class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2">
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">DELIVERIES</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">2</h2>
            <h2 class="font-heading text-dark text-xl pt-2">remaining</h2>
          </section>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333" fill-opacity="0.5" />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </section>
        <ProgressDial />
      </div>
      <div class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2">
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">APPOINTMENTS</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">3</h2>
            <h2 class="font-heading text-dark text-xl pt-2">remaining</h2>
          </section>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333" fill-opacity="0.5" />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </section>
        <section>
          <ProgressDial />
        </section>
      </div>
      <div class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2">
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">ORDERS</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">14</h2>
            <h2 class="font-heading text-dark text-xl pt-2">cooking</h2>
          </section>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333" fill-opacity="0.5" />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </section>
        <ProgressDial />
      </div>
    </div>
    <div class="grid mt-20 gap-3">
      <div class="head flex justify-between p-4">
        <section>
          <h1 class="font-heading text-4xl">Orders in Queue</h1>
        </section>
        <section class="grid grid-cols-2 items-center w-48 gap-4">
          <div class="flex gap-1">
            <h4 class="font-text text-sm">Search</h4>
            <svg class="pt-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.59002 10.2971C7.82317 11.7122 5.23688 11.6009 3.59903 9.96302C1.84167 8.20566 1.84167 5.35642 3.59903 3.59906C5.35638 1.8417 8.20563 1.8417 9.96299 3.59906C11.6008 5.23691 11.7122 7.82319 10.2971 9.59004L13.7342 13.0271C13.9295 13.2224 13.9295 13.539 13.7342 13.7342C13.5389 13.9295 13.2224 13.9295 13.0271 13.7342L9.59002 10.2971ZM4.30613 9.25591C2.9393 7.88907 2.9393 5.673 4.30613 4.30616C5.67297 2.93933 7.88904 2.93933 9.25588 4.30616C10.6217 5.67199 10.6227 7.88582 9.25889 9.2529C9.25788 9.25389 9.25687 9.25489 9.25587 9.25589C9.25487 9.2569 9.25387 9.2579 9.25287 9.25891C7.8858 10.6227 5.67197 10.6217 4.30613 9.25591Z"
                fill="#333333" />
            </svg>
          </div>
          <div class="flex gap-2">
            <h4 class="font-text text-sm">Sort by</h4>
            <svg class="pt-1" width="14" height="16" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.94872 4.80769C7.94872 4.48907 7.77652 4.23077 7.5641 4.23077H0.384615C0.172198 4.23077 0 4.48907 0 4.80769C0 5.12632 0.172198 5.38462 0.384615 5.38462H7.5641C7.77652 5.38462 7.94872 5.12632 7.94872 4.80769Z"
                fill="#333333" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.94872 0.961538C7.94872 0.642913 7.77652 0.384615 7.5641 0.384615H0.384615C0.172198 0.384615 0 0.642913 0 0.961538C0 1.28016 0.172198 1.53846 0.384615 1.53846H7.5641C7.77652 1.53846 7.94872 1.28016 7.94872 0.961538Z"
                fill="#333333" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.94872 8.65385C7.94872 8.33522 7.77652 8.07692 7.5641 8.07692H0.384615C0.172198 8.07692 0 8.33522 0 8.65385C0 8.97247 0.172198 9.23077 0.384615 9.23077H7.5641C7.77652 9.23077 7.94872 8.97247 7.94872 8.65385Z"
                fill="#333333" />
              <path
                d="M13.7821 8.03026L15.8741 5.93821C16.0994 5.7129 16.4647 5.7129 16.69 5.93821C16.9153 6.16351 16.9153 6.5288 16.69 6.7541L13.6131 9.83102C13.3878 10.0563 13.0225 10.0563 12.7972 9.83102L9.72026 6.7541C9.49496 6.5288 9.49496 6.16351 9.72026 5.93821C9.94556 5.7129 10.3108 5.7129 10.5362 5.93821L12.6282 8.03026V0.576923C12.6282 0.258298 12.8865 0 13.2051 0C13.5238 0 13.7821 0.258298 13.7821 0.576923V8.03026Z"
                fill="#333333" />
            </svg>
          </div>
        </section>
      </div>
      <section v-for="order in orders" :key="order"
        class="tile grid grid-cols-[1fr_2fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center">
        <section class="text-center font-heading">#{{ order[0] }}</section>
        <section class="font-heading text-lg">{{ order[1] }}</section>
        <section class="font-text">{{ order[2] }}</section>
        <section class="flex gap-4 px-2">
          <svg v-show="order[3] == 'Ready'" class="fill-black" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z" />
          </svg>

          <svg v-show="order[3] == 'Inspection'" width="24" height="24" viewBox="0 0 24 25" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.2455 18.3172C12.3184 21.4625 6.56994 21.2149 2.92952 17.5745C-0.976508 13.6685 -0.976508 7.33556 2.92952 3.42953C6.83556 -0.476509 13.1685 -0.476508 17.0745 3.42953C20.7149 7.06994 20.9625 12.8184 17.8172 16.7455L23.2342 22.6028C23.6682 23.0368 23.6682 23.7405 23.2342 24.1745C22.8002 24.6085 22.0966 24.6085 21.6626 24.1745L16.2455 18.3172ZM4.50119 16.0029C1.46317 12.9648 1.46317 8.03922 4.50119 5.00119C7.53922 1.96317 12.4648 1.96317 15.5029 5.00119C18.5387 8.03699 18.5409 12.9576 15.5095 15.9962C15.5073 15.9984 15.5051 16.0006 15.5028 16.0028C15.5006 16.005 15.4984 16.0073 15.4962 16.0095C12.4576 19.0409 7.53699 19.0387 4.50119 16.0029Z"
              fill="#222222" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.0956 8.38408C14.2765 8.56492 14.2765 8.85811 14.0956 9.03894L9.77378 13.3608C9.59295 13.5416 9.29976 13.5416 9.11892 13.3608L6.64929 10.8912C6.46845 10.7103 6.46845 10.4171 6.64929 10.2363C6.83012 10.0555 7.12331 10.0555 7.30415 10.2363L9.44635 12.3785L13.4408 8.38408C13.6216 8.20325 13.9148 8.20325 14.0956 8.38408Z"
              fill="#222222" />
          </svg>

          <svg v-show="order[3] == 'Handwork'" class="stroke-black" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.29942 13.9269L21 8M8.29942 13.9269C8.73669 13.4057 9 12.7336 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.92326 15 7.7491 14.5829 8.29942 13.9269ZM10.7398 17.0273L16 3M10.7398 17.0273C10.2791 17.5547 10 18.2447 10 19C10 20.6569 11.3431 22 13 22C14.6569 22 16 20.6569 16 19C16 17.3431 14.6569 16 13 16C12.0984 16 11.2897 16.3977 10.7398 17.0273Z"
              stroke-width="2" stroke-linecap="round" />
          </svg>

          <svg v-show="order[3] == 'Dyeing'" class="fill-black" width="24" height="24" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_227_425)">
              <path
                d="M0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790176 0.551088 0 0.75 0L8.25 0C8.44891 0 8.63968 0.0790176 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75V8.6655L15.2205 2.469C15.3611 2.3284 15.5519 2.24941 15.7507 2.24941C15.9496 2.24941 16.1404 2.3284 16.281 2.469L21.5835 7.773C21.6533 7.84267 21.7088 7.92543 21.7466 8.01655C21.7844 8.10767 21.8038 8.20535 21.8038 8.304C21.8038 8.40265 21.7844 8.50033 21.7466 8.59145C21.7088 8.68257 21.6533 8.76533 21.5835 8.835L15.3915 15H23.25C23.4489 15 23.6397 15.079 23.7803 15.2197C23.921 15.3603 24 15.5511 24 15.75V23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24H4.5C3.90898 24.0007 3.32365 23.8846 2.77765 23.6583C2.23166 23.432 1.73577 23.1001 1.3185 22.6815C0.489166 21.8549 0.0159661 20.7368 0 19.566M9 19.251L19.992 8.301L15.7485 4.059L9 10.782V19.2525V19.251ZM6.75 19.5C6.75 18.9033 6.51295 18.331 6.09099 17.909C5.66903 17.4871 5.09674 17.25 4.5 17.25C3.90326 17.25 3.33097 17.4871 2.90901 17.909C2.48705 18.331 2.25 18.9033 2.25 19.5C2.25 20.0967 2.48705 20.669 2.90901 21.091C3.33097 21.5129 3.90326 21.75 4.5 21.75C5.09674 21.75 5.66903 21.5129 6.09099 21.091C6.51295 20.669 6.75 20.0967 6.75 19.5ZM22.5 22.5V16.5H13.887L7.8645 22.5H22.5Z" />
            </g>
            <defs>
              <clipPath id="clip0_227_425">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg v-show="order[3] == 'Khaaka'" class="stroke-black" width="24" height="24" fill="none" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L16.5 5.5L18 13L13 18L5.5 16.5L2 2ZM2 2L9.586 9.586M12 19L19 12L22 15L15 22L12 19ZM13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h4 class="font-text">{{ order[3] }}</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section class="bg-primary/10 flex justify-center px-6 py-2 rounded-xl">
          {{ formatDate(order[4]) }}
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped>
#progress {
  width: 0%;
}
</style>
