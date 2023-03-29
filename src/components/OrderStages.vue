<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  stage: {
    type: String,
    required: true,
  },
  svgNum: {
    type: Number,
    required: true,
  },
});

const container = ref(null);
const text1 = ref(null);
const text2 = ref(null);
const icon = ref(null);
const icon2 = ref(null);
const icon3 = ref(null);
const icon4 = ref(null);
const icon5 = ref(null);
const status = ref(true);

onMounted(() => {
  //   setInterval(() => {
  if (status.value == true) {
    container.value.classList.add("bg-black");
    container.value.classList.remove("bg-white");
    text1.value.classList.add("text-white");
    text1.value.classList.remove("text-black");
    text2.value.classList.add("text-white");
    text2.value.classList.remove("text-black");
    icon.value.classList.add("stroke-white");
    icon.value.classList.remove("stroke-black");
    icon2.value.classList.add("fill-white");
    icon2.value.classList.remove("fill-black");
    icon3.value.classList.add("stroke-white");
    icon3.value.classList.remove("stroke-black");
    icon4.value.classList.add("fill-white");
    icon4.value.classList.remove("fill-black");
    icon5.value.classList.add("fill-white");
    icon5.value.classList.remove("fill-black");
  } else {
    container.value.classList.add("bg-white");
    container.value.classList.remove("bg-black");
    text1.value.classList.add("text-black");
    text1.value.classList.remove("text-white");
    text2.value.classList.add("text-black");
    text2.value.classList.remove("text-white");
    icon.value.classList.add("stroke-black");
    icon.value.classList.remove("stroke-white");
    icon2.value.classList.add("fill-black");
    icon2.value.classList.remove("fill-white");
    icon3.value.classList.add("stroke-black");
    icon3.value.classList.remove("stroke-white");
    icon4.value.classList.add("fill-black");
    icon4.value.classList.remove("fill-white");
    icon5.value.classList.add("fill-black");
    icon5.value.classList.remove("fill-white");
  }
  //   }, 1000);
});
</script>

<template>
  <div ref="container" class="py-[1.25rem] px-8 bg-white w-[45rem] rounded-2xl shadow-lg shadow-grey/10">
    <div class="flex justify-between">
      <section class="grid grid-flow-col-dense items-center gap-4">
        <svg v-show="svgNum === 4" class="fill-black" ref="icon5" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.25002 7.25V7.13012C7.25002 4.96238 8.71763 3.06964 10.8171 2.52979C11.5931 2.33024 12.407 2.33024 13.183 2.52979C15.2824 3.06964 16.75 4.96238 16.75 7.13013V7.25H18.2511C18.8224 7.25 19.3073 7.66898 19.3901 8.23423L19.6088 9.72668C20.0393 12.6651 20.0393 15.6507 19.6088 18.5891C19.4008 20.0081 18.2565 21.1052 16.83 21.2531L16.2011 21.3183C13.4079 21.608 10.5921 21.608 7.79888 21.3183L7.17001 21.2531C5.74347 21.1052 4.59918 20.0081 4.39127 18.5891C3.96072 15.6507 3.96072 12.6651 4.39127 9.72668L4.60994 8.23423C4.69276 7.66898 5.17761 7.25 5.74889 7.25H7.25002ZM11.1906 3.98252C11.7216 3.84599 12.2784 3.84599 12.8094 3.98252C14.2459 4.3519 15.25 5.64693 15.25 7.13013V7.25H8.75002V7.13012C8.75002 5.64693 9.75417 4.3519 11.1906 3.98252ZM7.25002 8.75V11C7.25002 11.4142 7.5858 11.75 8.00002 11.75C8.41423 11.75 8.75002 11.4142 8.75002 11V8.75H15.25V11C15.25 11.4142 15.5858 11.75 16 11.75C16.4142 11.75 16.75 11.4142 16.75 11V8.75H17.9496L18.1246 9.94414C18.534 12.7384 18.534 15.5774 18.1246 18.3717C18.0162 19.1118 17.4193 19.684 16.6753 19.7611L16.0464 19.8264C13.356 20.1054 10.644 20.1054 7.95361 19.8264L7.32474 19.7611C6.5807 19.684 5.98386 19.1118 5.87542 18.3717C5.46601 15.5774 5.46601 12.7384 5.87542 9.94414L6.05039 8.75H7.25002Z" />
        </svg>

        <svg v-show="svgNum === 3" ref="icon4" class="fill-black" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.3854 15.4457C11.7351 17.5684 7.85569 17.4013 5.3989 14.9445C2.76287 12.3085 2.76287 8.03464 5.3989 5.3986C8.03494 2.76256 12.3088 2.76256 14.9448 5.3986C17.4016 7.85538 17.5687 11.7348 15.446 14.3851L20.6017 19.5407C20.8946 19.8336 20.8946 20.3085 20.6017 20.6014C20.3088 20.8943 19.8339 20.8943 19.541 20.6014L14.3854 15.4457ZM6.45956 13.8839C4.40931 11.8336 4.40931 8.50951 6.45956 6.45926C8.50982 4.40901 11.8339 4.40901 13.8842 6.45926C15.9329 8.50801 15.9344 11.8287 13.8887 13.8794C13.8872 13.8809 13.8857 13.8823 13.8842 13.8839C13.8827 13.8854 13.8812 13.8869 13.8797 13.8884C11.8291 15.9341 8.50831 15.9326 6.45956 13.8839Z" />
        </svg>
        <svg v-show="svgNum === 2" class="stroke-black" ref="icon3" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.29942 13.9269L21 8M8.29942 13.9269C8.73669 13.4057 9 12.7336 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.92326 15 7.7491 14.5829 8.29942 13.9269ZM10.7398 17.0273L16 3M10.7398 17.0273C10.2791 17.5547 10 18.2447 10 19C10 20.6569 11.3431 22 13 22C14.6569 22 16 20.6569 16 19C16 17.3431 14.6569 16 13 16C12.0984 16 11.2897 16.3977 10.7398 17.0273Z"
            stroke-width="2" stroke-linecap="round" />
        </svg>

        <svg v-show="svgNum === 1" ref="icon2" class="fill-black" width="24" height="24" viewBox="0 0 24 24"
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

        <svg v-show="svgNum === 0" class="stroke-black" ref="icon" width="24" height="24" fill="none" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 2L16.5 5.5L18 13L13 18L5.5 16.5L2 2ZM2 2L9.586 9.586M12 19L19 12L22 15L15 22L12 19ZM13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2 ref="text1" class="font-text text-black">{{ props.stage }}</h2>
      </section>
      <section class="grid grid-cols-2 gap-2">
        <h3 ref="text2" class="font-text pt-1.5 text-black text-sm">
          {{ status ? "COMPLETED" : "STAND BY" }}
        </h3>
        <svg v-show="!status" class="mt-1" width="24" height="24" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.9997 9.33331C16.9997 8.78103 16.552 8.33331 15.9997 8.33331C15.4474 8.33331 14.9997 8.78103 14.9997 9.33331V16C14.9997 16.3448 15.1773 16.6652 15.4697 16.848L19.4697 19.348C19.938 19.6407 20.555 19.4983 20.8477 19.03C21.1404 18.5616 20.998 17.9447 20.5297 17.652L16.9997 15.4457V9.33331Z"
            fill="#333333" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M15.9997 4.33331C9.55635 4.33331 4.33301 9.55666 4.33301 16C4.33301 22.4433 9.55635 27.6666 15.9997 27.6666C22.443 27.6666 27.6663 22.4433 27.6663 16C27.6663 9.55666 22.443 4.33331 15.9997 4.33331ZM6.33301 16C6.33301 10.6612 10.6609 6.33331 15.9997 6.33331C21.3384 6.33331 25.6663 10.6612 25.6663 16C25.6663 21.3387 21.3384 25.6666 15.9997 25.6666C10.6609 25.6666 6.33301 21.3387 6.33301 16Z"
            fill="#333333" />
        </svg>
        <svg class="pt-1" v-show="status" width="28" height="28" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="16" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M22.0303 11.9697C22.3232 12.2626 22.3232 12.7374 22.0303 13.0303L15.0303 20.0303C14.7374 20.3232 14.2626 20.3232 13.9697 20.0303L9.96967 16.0303C9.67678 15.7374 9.67678 15.2626 9.96967 14.9697C10.2626 14.6768 10.7374 14.6768 11.0303 14.9697L14.5 18.4393L20.9697 11.9697C21.2626 11.6768 21.7374 11.6768 22.0303 11.9697Z"
            fill="#222222" />
        </svg>
      </section>
    </div>
  </div>
</template>
