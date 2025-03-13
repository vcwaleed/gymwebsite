<script setup>
import { ref, onMounted, computed } from "vue";
import NavbarPage from "../components/NavbarPage.vue";
import axios from "axios";
const bmiData = ref([]);
onMounted(async () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const userEmail = userInfo?.email;
  if (!userEmail) return;

  try {
    const response = await axios.get("http://localhost:5000/bmidata");
    bmiData.value = response.data.filter(entry => entry.email === userEmail);
  } catch (error) {
    console.error("Error fetching BMI data:", error);
  }
});

const averageBmi = computed(() => {
  if (bmiData.value.length === 0) return 0;

  const totalBmi = bmiData.value.reduce((sum, entry) => {
    const bmiValue = parseFloat(entry.bmi);
    return sum + (isNaN(bmiValue) ? 0 : bmiValue); 
  }, 0);

  return (totalBmi / bmiData.value.length).toFixed(2);
});
</script>

<template>
  <NavbarPage />
  <div class="bmi-history-container">
    <h3 v-if="bmiData.length > 0"> BMI History - {{ bmiData[bmiData.length -1].name }}</h3>
    <table v-if="bmiData.length > 0">
      <thead>
        <tr>
          <th>Weight (kg)</th>
          <th>Height (cm)</th>
          <th>BMI</th>
          <th>Date & Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in bmiData" :key="index">
          <td>{{ entry.weight }}</td>
          <td>{{ entry.height }}</td>
          <td>{{ entry.bmi }}</td>
          <td>{{ new Date(entry.dateTime).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
    <div class="average-bmi" v-if="bmiData.length > 0">
      <h4>Average BMI: {{ averageBmi }}</h4>
    </div>
    <p v-else>No BMI records found.</p>
  </div>
  
</template>

<style scoped lang="scss">
.bmi-history-container {
  max-width: 900px;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 55px;
  padding: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background: #48bb78;
  color: white;
  font-size: 16px;
}

td {
  text-align: center;
  font-size: 14px;
}

tr:nth-child(even) {
  background: #f3f3f3;
}

.average-bmi {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
