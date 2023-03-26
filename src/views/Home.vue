<script lang="ts" setup>
import ProgressDial from "../components/ProgressDial.vue";
import { computed, onMounted } from "vue";
import gsap from "gsap";

function randomNum(min, max) {
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
      "-=2"
    );

  let randomProgress = function () {
    return randomNum(5, 95);
  }; // set the progress percentage here

  let progressBar = document.querySelectorAll(".progress");
  progressBar.forEach((el, index) => {
    let progress = randomProgress();
    el.style.width = `${progress}%`;
    document.querySelectorAll(".progress-text")[index].innerHTML = `${progress}%`;
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
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
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
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_21_29)">
            <circle
              cx="16"
              cy="9"
              r="1"
              fill="#FF2400"
              fill-opacity="0.8"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9999 6C12.9999 5.44772 12.5522 5 11.9999 5C11.4477 5 10.9999 5.44772 10.9999 6V6.75H10.4425C8.21745 6.75 6.37585 8.48001 6.23695 10.7007L6.01595 14.2342C5.93169 15.5814 5.4794 16.8797 4.70834 17.9876C4.01166 18.9886 4.63188 20.3712 5.84281 20.5165L9.24994 20.9254V22C9.24994 23.5188 10.4812 24.75 11.9999 24.75C13.5187 24.75 14.7499 23.5188 14.7499 22V20.9254L18.1571 20.5165C19.368 20.3712 19.9882 18.9886 19.2915 17.9876C18.5205 16.8797 18.0682 15.5814 17.9839 14.2342L17.7629 10.7007C17.624 8.48001 15.7824 6.75 13.5573 6.75H12.9999V6ZM10.4425 8.25C9.00952 8.25 7.82348 9.36417 7.73403 10.7944L7.51303 14.3278C7.41163 15.949 6.86738 17.5112 5.93953 18.8444C5.88918 18.9168 5.934 19.0167 6.02153 19.0272L9.75919 19.4757C11.2477 19.6543 12.7522 19.6543 14.2407 19.4757L17.9783 19.0272C18.0659 19.0167 18.1107 18.9168 18.0603 18.8444C17.1325 17.5112 16.5882 15.949 16.4868 14.3278L16.2658 10.7944C16.1764 9.36417 14.9903 8.25 13.5573 8.25H10.4425ZM11.9999 23.25C11.3096 23.25 10.7499 22.6904 10.7499 22V21.25H13.2499V22C13.2499 22.6904 12.6903 23.25 11.9999 23.25Z"
            fill="#333333"
          />
          <defs>
            <filter
              id="filter0_d_21_29"
              x="7"
              y="0"
              width="18"
              height="18"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_21_29"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.141176 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_21_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_21_29"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <svg
          class="mt-[2.5px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3851 15.4457C11.7349 17.5684 7.85544 17.4013 5.39866 14.9445C2.76262 12.3085 2.76262 8.03464 5.39866 5.3986C8.0347 2.76256 12.3086 2.76256 14.9446 5.3986C17.4014 7.85538 17.5685 11.7348 15.4458 14.3851L20.6014 19.5407C20.8943 19.8336 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8337 20.8943 19.5408 20.6014L14.3851 15.4457ZM6.45932 13.8839C4.40907 11.8336 4.40907 8.50951 6.45932 6.45926C8.50957 4.40901 11.8337 4.40901 13.8839 6.45926C15.9327 8.50801 15.9342 11.8287 13.8885 13.8794C13.8869 13.8809 13.8854 13.8823 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9341 8.50807 15.9326 6.45932 13.8839Z"
            fill="#333333"
          />
        </svg>
      </section>
    </div>
    <div class="grid grid-cols-3 w-full h-[14rem] gap-4 justify-between">
      <div
        class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2"
      >
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">DELIVERIES</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">2</h2>
            <h2 class="font-heading text-dark text-xl pt-2">remaining</h2>
          </section>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333"
              fill-opacity="0.5"
            />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </section>
        <ProgressDial />
      </div>
      <div
        class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2"
      >
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">APPOINTMENTS</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">3</h2>
            <h2 class="font-heading text-dark text-xl pt-2">remaining</h2>
          </section>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333"
              fill-opacity="0.5"
            />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </section>
        <section>
          <ProgressDial />
        </section>
      </div>
      <div
        class="ltor bg-white mt-8 rounded-[32px] shadow-xl shadow-grey/5 grid grid-cols-2"
      >
        <section class="flex flex-col pl-6 justify-center gap-3">
          <h4 class="font-text text-sm text-grey">ORDERS</h4>
          <section class="flex gap-2 mb-8">
            <h2 class="font-heading text-dark text-3xl">14</h2>
            <h2 class="font-heading text-dark text-xl pt-2">cooking</h2>
          </section>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.252 9.24838C16.252 9.04947 16.173 8.8587 16.0323 8.71805C15.8915 8.5774 15.701 8.49838 15.5019 8.49838H8.34278C8.14376 8.49838 7.95318 8.5774 7.81245 8.71805C7.67172 8.8587 7.59277 9.04947 7.59277 9.24838C7.59277 9.44729 7.67172 9.63806 7.81245 9.77871C7.95318 9.91936 8.14376 9.99838 8.34278 9.99838L13.6914 9.99838L3.9398 19.4364C3.79889 19.5772 3.71985 19.7682 3.71985 19.9674C3.71985 20.1665 3.79889 20.3576 3.9398 20.4984C4.08071 20.6392 4.27153 20.7183 4.47081 20.7183C4.67008 20.7183 4.8609 20.6392 5.00181 20.4984L14.7519 11.0589V16.7484C14.7519 16.9473 14.8309 17.1381 14.9716 17.2787C15.1123 17.4194 15.3029 17.4984 15.5019 17.4984C15.701 17.4984 15.8915 17.4194 16.0323 17.2787C16.173 17.1381 16.252 16.9473 16.252 16.7484V9.24838Z"
              fill="#333333"
              fill-opacity="0.5"
            />
            <path
              d="M4.5 12V7C4.5 4.79086 6.29086 3 8.5 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H11.25"
              stroke="#333333"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linecap="round"
            />
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
            <svg
              class="pt-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.59002 10.2971C7.82317 11.7122 5.23688 11.6009 3.59903 9.96302C1.84167 8.20566 1.84167 5.35642 3.59903 3.59906C5.35638 1.8417 8.20563 1.8417 9.96299 3.59906C11.6008 5.23691 11.7122 7.82319 10.2971 9.59004L13.7342 13.0271C13.9295 13.2224 13.9295 13.539 13.7342 13.7342C13.5389 13.9295 13.2224 13.9295 13.0271 13.7342L9.59002 10.2971ZM4.30613 9.25591C2.9393 7.88907 2.9393 5.673 4.30613 4.30616C5.67297 2.93933 7.88904 2.93933 9.25588 4.30616C10.6217 5.67199 10.6227 7.88582 9.25889 9.2529C9.25788 9.25389 9.25687 9.25489 9.25587 9.25589C9.25487 9.2569 9.25387 9.2579 9.25287 9.25891C7.8858 10.6227 5.67197 10.6217 4.30613 9.25591Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div class="flex gap-2">
            <h4 class="font-text text-sm">Sort by</h4>
            <svg
              class="pt-1"
              width="14"
              height="16"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.94872 4.80769C7.94872 4.48907 7.77652 4.23077 7.5641 4.23077H0.384615C0.172198 4.23077 0 4.48907 0 4.80769C0 5.12632 0.172198 5.38462 0.384615 5.38462H7.5641C7.77652 5.38462 7.94872 5.12632 7.94872 4.80769Z"
                fill="#333333"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.94872 0.961538C7.94872 0.642913 7.77652 0.384615 7.5641 0.384615H0.384615C0.172198 0.384615 0 0.642913 0 0.961538C0 1.28016 0.172198 1.53846 0.384615 1.53846H7.5641C7.77652 1.53846 7.94872 1.28016 7.94872 0.961538Z"
                fill="#333333"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.94872 8.65385C7.94872 8.33522 7.77652 8.07692 7.5641 8.07692H0.384615C0.172198 8.07692 0 8.33522 0 8.65385C0 8.97247 0.172198 9.23077 0.384615 9.23077H7.5641C7.77652 9.23077 7.94872 8.97247 7.94872 8.65385Z"
                fill="#333333"
              />
              <path
                d="M13.7821 8.03026L15.8741 5.93821C16.0994 5.7129 16.4647 5.7129 16.69 5.93821C16.9153 6.16351 16.9153 6.5288 16.69 6.7541L13.6131 9.83102C13.3878 10.0563 13.0225 10.0563 12.7972 9.83102L9.72026 6.7541C9.49496 6.5288 9.49496 6.16351 9.72026 5.93821C9.94556 5.7129 10.3108 5.7129 10.5362 5.93821L12.6282 8.03026V0.576923C12.6282 0.258298 12.8865 0 13.2051 0C13.5238 0 13.7821 0.258298 13.7821 0.576923V8.03026Z"
                fill="#333333"
              />
            </svg>
          </div>
        </section>
      </div>
      <section
        class="tile grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center"
      >
        <section class="flex justify-center font-heading">#3021</section>
        <section class="flex justify-center font-heading">Meenakshi Savant</section>
        <section class="flex justify-center font-text">Pink Lehenga</section>
        <section class="flex justify-center gap-2">
          <img class="h-6 w-6" src="../images/Iron image.png" alt="Iron Image" />
          <h4 class="font-text">Ironing</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div
              class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"
            ></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section class="bg-primary/10 flex justify-center px-4 py-2 rounded-xl">
          To be delivered today
        </section>
      </section>
      <section
        class="tile grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center"
      >
        <section class="flex justify-center font-heading">#0604</section>
        <section class="flex justify-center font-heading">Anshu Lakhwani</section>
        <section class="flex justify-center font-text">Black jumpsuit</section>
        <section class="flex justify-center gap-1">
          <img class="h-5 w-5" src="../images/Inspect Icon.png" alt="Inspect icon" />
          <h4 class="font-text">Inspection</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div
              class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"
            ></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section
          class="bg-primary/10 flex justify-center w-fit m-auto px-4 py-2 rounded-xl"
        >
          To be delivered today
        </section>
      </section>
      <section
        class="tile grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center"
      >
        <section class="flex justify-center font-heading">#2996</section>
        <section class="flex justify-center font-heading">Archana Chabbra</section>
        <section class="flex justify-center font-text">Maroon Kurta Set</section>
        <section class="flex justify-center gap-1">
          <img class="h-5 w-5 mt-1" src="../images/Dyeing.png" alt="Dyeing" />
          <h4 class="font-text">Dyeing</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div
              class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"
            ></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section
          class="bg-primary/10 flex justify-center w-fit m-auto px-4 py-2 rounded-xl"
        >
          Due Tomorrow
        </section>
      </section>
      <section
        class="tile grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center"
      >
        <section class="flex justify-center font-heading">#3079</section>
        <section class="flex justify-center font-heading">Tanisha Agarwal</section>
        <section class="flex justify-center font-text">Red cotton kurta set</section>
        <section class="flex justify-center gap-1">
          <img class="h-5 w-5 mt-1" src="../images/Dyeing.png" alt="Dyeing" />
          <h4 class="font-text">Dyeing</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div
              class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"
            ></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section
          class="bg-primary/10 flex justify-center w-fit m-auto px-4 py-2 rounded-xl"
        >
          Due tomorrow
        </section>
      </section>
      <section
        class="tile grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr] gap-6 bg-white rounded-[24px] w-full h-[5rem] px-8 shadow-lg shadow-grey/5 items-center"
      >
        <section class="flex justify-center font-heading">#2347</section>
        <section class="flex justify-center font-heading">Bina Agarwal</section>
        <section class="flex justify-center font-text">Green jumpsuit</section>
        <section class="flex justify-center gap-2">
          <img class="h-6 w-6" src="../images/Iron image.png" alt="Iron Image" />
          <h4 class="font-text">Ironing</h4>
        </section>
        <section class="flex items-center font-heading">
          <div class="flex items-center relative w-4/6 h-1">
            <div
              class="progress absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary rounded-full"
            ></div>
          </div>
          <div class="progress-text mr-2"></div>
        </section>
        <section
          class="bg-primary/10 flex justify-center w-fit m-auto px-4 py-2 rounded-xl"
        >
          Due Wednesday
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
