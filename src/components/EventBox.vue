<template>
  <div class="bg-white grid rounded-2xl w-40 pb-2">
    <section class="bg-black h-6 rounded-2xl rounded-b-none"></section>
    <div class="flex items-center justify-between mt-4 mb-1 pl-4">
      <h3 class="font-heading">Babita Goel</h3>
      <section class="bg-[#00ccc2] w-4 h-2 rounded-l-full"></section>
    </div>
    <section class="px-4">
      <h4 class="text-grey font-text text-xs">New Client coming for trial</h4>
    </section>
    <section class="bg-black flex gap-1 w-fit mx-4 my-2 px-2 py-1 rounded-md">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49984 4.66669C8.49984 4.39054 8.27598 4.16669 7.99984 4.16669C7.7237 4.16669 7.49984 4.39054 7.49984 4.66669V8.00002C7.49984 8.17242 7.58865 8.33265 7.73484 8.42402L9.73484 9.67402C9.96901 9.82038 10.2775 9.74919 10.4238 9.51502C10.5702 9.28085 10.499 8.97238 10.2648 8.82602L8.49984 7.7229V4.66669Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.99984 2.16669C4.77818 2.16669 2.1665 4.77836 2.1665 8.00002C2.1665 11.2217 4.77818 13.8334 7.99984 13.8334C11.2215 13.8334 13.8332 11.2217 13.8332 8.00002C13.8332 4.77836 11.2215 2.16669 7.99984 2.16669ZM3.1665 8.00002C3.1665 5.33064 5.33046 3.16669 7.99984 3.16669C10.6692 3.16669 12.8332 5.33064 12.8332 8.00002C12.8332 10.6694 10.6692 12.8334 7.99984 12.8334C5.33046 12.8334 3.1665 10.6694 3.1665 8.00002Z"
          fill="white"
        />
      </svg>
      <h4 class="text-white text-xs font-heading font-light">12 00</h4>
    </section>
  </div>
</template>

<style lang="sass" scoped>
#eventBox
    &::after
        content: ""
        background: #2d83b6
        width: 2rem
        height: 0.75rem
        border-radius: 16px 0 0 16px
        position: relative
        top: 1rem
        right: 0
        z-index: 10
</style>
