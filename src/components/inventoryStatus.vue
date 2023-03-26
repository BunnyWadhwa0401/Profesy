<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  status: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  item: {
    type: String,
    required: true,
  },
});
const isLow = ref(false);
let percentage = Math.floor((props.status * 100) / props.total) - 2;
if (percentage < 25) isLow.value = true;
percentage += "%";
const battery = ref(null);
const status = ref(null);
onMounted(() => {
  let el = battery.value as HTMLElement;
  el.style.setProperty("--after-width", percentage);
  if (isLow.value) {
    el.style.setProperty("--after-bg", "#ff24002b");
    status.value.style.color = "#ff2400";
  }
});
</script>

<template>
  <section id="battery" ref="battery" class="bg-white shadow-xl mt-5 rounded-3xl p-6 w-full h-48 relative z-20">
    <div class="flex items-end gap-2 w-full mt-4">
      <h3 ref="status" class="font-heading text-primary text-3xl">{{ props.status }}</h3>
      <h3 class="font-text w-full">meters left</h3>
    </div>
    <h5 class="font-text text-sm font-medium mt-2 uppercase">
      {{ props.item }}
    </h5>
    <h3 class="font-heading font-medium text-end text-lg text-grey mt-6">
      {{ percentage }}
    </h3>
  </section>
</template>

<style lang="sass" scoped>
#battery
  &::after
    content: ""
    background: var(--after-bg, #00CCC220)
    border-radius: 1.25rem
    position: absolute
    top: 4px
    left: 4px
    z-index: -10
    width: var(--after-width, 0)
    height: 96%
</style>
