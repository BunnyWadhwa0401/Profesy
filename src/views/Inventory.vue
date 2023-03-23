<script setup>
import { onMounted } from "vue";
import gsap from 'gsap';
import inventoryStatus from "../components/inventoryStatus.vue";


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const status = randomNum(5, 30)
const total = randomNum(35, 60)

onMounted(() => {
  const timeLine = gsap.timeline({
    Defaults: { Easing: "Expo.easeInOut" },
  });
  timeLine
    .fromTo(".fadeIn *",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      },
    )
    .fromTo(".tile",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
      },
      "-=0.2"
    )
})
</script>

<template>
  <main class="Inventory-page">
    <div class="flex justify-between">
      <section>
        <h1 class="font-heading text-4xl mb-0">Material Status</h1>
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
    <div class="fadeIn grid grid-cols-3 w-full h-[14rem] gap-4 justify-between">
      <inventory-status item="buckram" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
      <inventory-status item="organza" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
      <inventory-status item="georgette" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
      <inventory-status item="velvet" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
      <inventory-status item="cotton" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
      <inventory-status item="brocade" :status="randomNum(5, 30)" :total="randomNum(35, 60)" />
    </div>
    <div class="flex justify-between mt-[35vh]">
      <section>
        <h1 class="font-heading text-4xl mb-0">Usage Record</h1>
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
    <div class="grid w-full mt-8">
      <section
        class="fadeIn grid grid-cols-[1fr_2fr_3fr_2fr] items-center bg-black rounded-t-3xl font-heading text-white font-medium py-4">
        <h3 class="flex justify-center border-r-2 border-white">TIME</h3>
        <h3 class="flex justify-center border-r-2 border-white">MATERIAL</h3>
        <h3 class="flex justify-center border-r-2 border-white">ORDER</h3>
        <h3 class="flex justify-center ">QUANITITY</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="flex justify-center">1:20</h3>
        <h3 class="flex justify-center">Organza</h3>
        <h3 class="flex justify-center">Dupatta for Archana's Set</h3>
        <h3 class="flex justify-center">2 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="flex justify-center">2:50</h3>
        <h3 class="flex justify-center">Georgette</h3>
        <h3 class="flex justify-center">Anshu Lakhwani Black Jumpsuit</h3>
        <h3 class="flex justify-center">10 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="flex justify-center">3:20</h3>
        <h3 class="flex justify-center">Brocade</h3>
        <h3 class="flex justify-center">Babita Goel Kurta Set</h3>
        <h3 class="flex justify-center">6 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="flex justify-center">5:40</h3>
        <h3 class="flex justify-center">Organza</h3>
        <h3 class="flex justify-center">Coat for Archana's Kimono</h3>
        <h3 class="flex justify-center">3 meters</h3>
      </section>
    </div>
  </main>
</template>
