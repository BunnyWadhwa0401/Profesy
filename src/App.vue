<script setup>
import axios from 'axios';
import { onMounted } from "vue";
import sideBar from "./components/sideBar.vue";

onMounted(async () => {
  try {
    const [sheet1Response, sheet2Response, sheet3Response, sheet4Response] = await axios.all([
      axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-a28aiFABT2GF-6AZCdf5iusnA92I2Ay_CPsRbnXl9Rtd7zR6AzGB-3NaG67BOWsa-A0_KwhKrddY/pub?gid=0&single=true&output=csv'),
      axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-a28aiFABT2GF-6AZCdf5iusnA92I2Ay_CPsRbnXl9Rtd7zR6AzGB-3NaG67BOWsa-A0_KwhKrddY/pub?gid=505295928&single=true&output=csv'),
      axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-a28aiFABT2GF-6AZCdf5iusnA92I2Ay_CPsRbnXl9Rtd7zR6AzGB-3NaG67BOWsa-A0_KwhKrddY/pub?gid=1078116388&single=true&output=csv'),
      axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-a28aiFABT2GF-6AZCdf5iusnA92I2Ay_CPsRbnXl9Rtd7zR6AzGB-3NaG67BOWsa-A0_KwhKrddY/pub?gid=1767035826&single=true&output=csv'),
    ]);


    function processData(response) {
      const csv = response.data;
      const rows = csv.split('\n');
      let sheet = []
      for (let i = 1; i < rows.length; i++) {
        let row = rows[i].split(',');
        sheet.push(row);
      }
      sheet.shift();
      return sheet;
    }

    const appointments = processData(sheet1Response)
    const orders = processData(sheet2Response)
    const deliveries = processData(sheet3Response)
    const inventory = processData(sheet4Response)

    localStorage.setItem("Appointments", JSON.stringify(appointments))
    localStorage.setItem("Orders", JSON.stringify(orders))
    localStorage.setItem("Deliveries", JSON.stringify(deliveries))
    localStorage.setItem("Inventory", JSON.stringify(inventory))

  } catch (e) {
    console.log(e);
  }
})
</script>

<template>
  <div class="app">
    <sideBar />
    <router-view />
    <div class="bg-black text-grey grid place-content-center w-full mt-16 pt-4 pb-2">
      <h2>Profesy 2021 © Made in India</h2>
    </div>
  </div>
</template>

<style>
main {
  margin-left: 11vw;
  margin-top: 4vh;
  padding-right: 4vw;
  color: #333;
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
