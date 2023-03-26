<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import inventoryStatus from "../components/inventoryStatus.vue";
import Header from "../components/Header.vue";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const status = randomNum(5, 30);
const total = randomNum(35, 60);

onMounted(() => {
  const timeLine = gsap.timeline({
    Defaults: { Easing: "Expo.easeInOut" },
  });
  timeLine
    .from(".fadeIn section",
      {
        width: 10,
        opacity: 0,
        stagger: 0.2,
      }
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
})
</script>

<template>
  <main class="Inventory-page">
    <Header title="Material Status" />
    <div class="fadeIn grid grid-cols-3 w-full h-[14rem] gap-4 justify-between">
      <inventory-status
        item="buckram"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
      <inventory-status
        item="organza"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
      <inventory-status
        item="georgette"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
      <inventory-status
        item="velvet"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
      <inventory-status
        item="cotton"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
      <inventory-status
        item="brocade"
        :status="randomNum(5, 30)"
        :total="randomNum(35, 60)"
      />
    </div>
    <div class="flex justify-between mt-[35vh]">
      <section>
        <h1 class="font-heading text-4xl mb-0">Usage Record</h1>
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
    <div class="grid w-full mt-8">
      <section
        class="grid grid-cols-[1fr_2fr_3fr_2fr] items-center bg-black rounded-t-3xl font-heading text-white font-medium py-4">
        <h3 class="text-center border-r-2 border-white">TIME</h3>
        <h3 class="text-center border-r-2 border-white">MATERIAL</h3>
        <h3 class="text-center border-r-2 border-white">ORDER</h3>
        <h3 class="text-center ">QUANITITY</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="text-center">1:20</h3>
        <h3 class="text-center">Organza</h3>
        <h3 class="text-center">Dupatta for Archana's Set</h3>
        <h3 class="text-center">2 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="text-center">2:50</h3>
        <h3 class="text-center">Georgette</h3>
        <h3 class="text-center">Anshu Lakhwani Black Jumpsuit</h3>
        <h3 class="text-center">10 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="text-center">3:20</h3>
        <h3 class="text-center">Brocade</h3>
        <h3 class="text-center">Babita Goel Kurta Set</h3>
        <h3 class="text-center">6 meters</h3>
      </section>
      <section class="tile grid grid-cols-[1fr_2fr_3fr_2fr] font-text font-normal items-center py-4">
        <h3 class="text-center">5:40</h3>
        <h3 class="text-center">Organza</h3>
        <h3 class="text-center">Coat for Archana's Kimono</h3>
        <h3 class="text-center">3 meters</h3>
      </section>
    </div>
  </main>
</template>
