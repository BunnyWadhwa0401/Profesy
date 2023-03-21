<script setup>
import sideBar from "./components/sideBar.vue";
import firebase from 'firebase/app';
import 'firebase/database';
</script>

<template>
  <div class="app">
    <sideBar />
    <router-view />
  </div>
</template>

<style>
main {
  margin-left: 11vw;
  margin-top: 4vh;
  padding-right: 4vw;
}

* {
  margin-left: 0px;
  padding: 0;
}

body {
  background: #f4f4f4;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
