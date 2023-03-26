<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between">
    <section>
      <h1 class="font-heading text-4xl mb-0">{{ props.title }}</h1>
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
</template>
