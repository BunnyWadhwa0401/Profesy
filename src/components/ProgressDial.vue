<script setup>
import { ref } from "vue"

const props = defineProps({ percentage: String })
const circle = ref(null)
circle.value?.style.setProperty("--percent", props.percentage);
</script>

<template>
  <div class="card">
    <div class="percent">
      <svg>
        <circle cx="75" cy="75" r="70"></circle>
        <circle cx="75" cy="75" r="70" ref="circle"></circle>
      </svg>
      <div class="number">
        <h4 class="font-heading font-semibold text-primary text-2xl">{{ props.percentage }}%</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 3rem;
  width: 70%;
  height: 70%;
}

.card .percent {
  position: relative;
}

.card svg {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.card svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #f0f0f0;
  stroke-width: 10;
  stroke-linecap: round;
}

.card svg circle:last-of-type {
  stroke-dasharray: 436px;
  stroke-dashoffset: calc(436px - (436px * var(--percent)) / 100);
  stroke: #222;
  opacity: 0;
}

.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card .title h2 {
  margin: 25px 0 0;
}
</style>