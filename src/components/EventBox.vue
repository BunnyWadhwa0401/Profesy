<script setup>
import { onMounted, ref } from "vue";

const indianWomenNames = [
  "Sonia Mehra",
  "Kavita Patel",
  "Radha Sharma",
  "Priya Kaur",
  "Rashmi Gupta",
  "Sapna Yadav",
  "Neha Malhotra",
  "Anjali Chauhan",
  "Preeti Verma",
  "Anushka Reddy"
];
const Name = "Babita Goel";

function getNameColor(name) {
  // Generate a deterministic lightness value based on the name
  const hash = name.split('').reduce((acc, char) => {
    acc = ((acc << 5) - acc) + char.charCodeAt(0);
    return acc & acc;
  }, 0);
  const lightness = (hash % 31) + 50;

  // Convert the lightness value to an HSL color
  const hue = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
  const saturation = 80; // x% saturation
  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // Convert the HSL color to a hex color code
  const rgbColor = HSLtoRGB(hue, saturation, lightness);
  const hexColor = RGBtoHEX(rgbColor.r, rgbColor.g, rgbColor.b);

  return hexColor;
}

// Helper functions to convert HSL to RGB and RGB to hex
function HSLtoRGB(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h / 360 + 1 / 3);
    g = hue2rgb(p, q, h / 360);
    b = hue2rgb(p, q, h / 360 - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function RGBtoHEX(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

const ribbon = ref(null)
onMounted(() => {
  ribbon.value.style.backgroundColor = getNameColor(indianWomenNames[Math.floor(Math.random() * (8))])
})
</script>

<template>
  <div class="bg-white grid rounded-2xl w-40 pb-2 shadow-xl shadow-grey/10">
    <section class="bg-black h-6 rounded-2xl rounded-b-none"></section>
    <div class="flex items-center justify-between mt-4 mb-1 pl-4">
      <h3 class="font-heading">{{ indianWomenNames[Math.floor(Math.random() * (10))] }}</h3>
      <section ref="ribbon" class="w-4 h-2 rounded-l-full"></section>
    </div>
    <section class="px-4">
      <h4 class="text-grey font-text text-xs">New Client coming for trial</h4>
    </section>
    <section class="bg-black flex gap-1 w-fit mx-4 my-2 px-2 py-1 rounded-md">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.49984 4.66669C8.49984 4.39054 8.27598 4.16669 7.99984 4.16669C7.7237 4.16669 7.49984 4.39054 7.49984 4.66669V8.00002C7.49984 8.17242 7.58865 8.33265 7.73484 8.42402L9.73484 9.67402C9.96901 9.82038 10.2775 9.74919 10.4238 9.51502C10.5702 9.28085 10.499 8.97238 10.2648 8.82602L8.49984 7.7229V4.66669Z"
          fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.99984 2.16669C4.77818 2.16669 2.1665 4.77836 2.1665 8.00002C2.1665 11.2217 4.77818 13.8334 7.99984 13.8334C11.2215 13.8334 13.8332 11.2217 13.8332 8.00002C13.8332 4.77836 11.2215 2.16669 7.99984 2.16669ZM3.1665 8.00002C3.1665 5.33064 5.33046 3.16669 7.99984 3.16669C10.6692 3.16669 12.8332 5.33064 12.8332 8.00002C12.8332 10.6694 10.6692 12.8334 7.99984 12.8334C5.33046 12.8334 3.1665 10.6694 3.1665 8.00002Z"
          fill="white" />
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
