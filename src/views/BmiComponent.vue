<script setup>
import NavbarPage from "../components/NavbarPage.vue";
import FooterPage from "../components/FooterPage.vue";
import { UseBmiState } from "../stores/bmicalculate";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import axios from "axios";
const bmi_state = UseBmiState();
const { person_detail, bmi_person } = storeToRefs(bmi_state);
onMounted(async () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  if (userInfo?.email) {
    try {
      const response = await axios.get(`http://localhost:5000/bmidata?email=${userInfo.email}`);
      if (response.data.length > 0) {
        bmi_state.person_detail.name = response.data[0].name;
        bmi_state.person_detail.gender= response.data[0].gender
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
});
</script>

<template>
  <NavbarPage />
  <section class="container">
    <div class="calculator-card">
      <h1 class="title">BMI Calculator</h1>

      <div class="form-grid">
        <div class="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" v-model="person_detail.name" class="input-field">
        </div>
        <div class="input-group">
  <label>Gender</label>
  <div class="radio-group">
    <label>
      <input type="radio" value="male" v-model="person_detail.gender">
      Male
    </label>
    <label>
      <input type="radio" value="female" v-model="person_detail.gender">
      Female
    </label>
  </div>
</div>
        <div class="input-group">
          <label>Age</label>
          <input type="number" placeholder="Years" v-model="person_detail.age" class="input-field">
        </div>
        <div class="input-group">
          <label>Weight (kg)</label>
          <input type="number" placeholder="Kilograms" v-model="person_detail.weight" class="input-field">
        </div>
        <div class="input-group full-width">
          <label>Height (cm)</label>
          <input type="number" placeholder="Centimeters" v-model="person_detail.height" class="input-field">
        </div>
      </div>
      <button @click="bmi_state.bmi_calculate" class="calculate-btn">Calculate BMI</button>
      <div v-if="bmi_person > 0" class="result-card">
        <div class="result-content">
          <h3>Your BMI Score</h3>
          <div class="bmi-value">{{ bmi_person }}</div>
          <button @click="$router.push('/registrationfrom')" class="continue-btn">View Health Plan</button>
        </div>
      </div>
    </div>
  </section>
  <FooterPage />
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/ooo.jpg') no-repeat  center;
  background-size: cover;
}

.calculator-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.title {
  text-align: center;
  color: gray;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  row-gap: 1rem; 
  margin-bottom: 2rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.input-group {
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: gray;
    font-weight: 500;
  }
}

.input-field {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: $secondary-color;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    outline: none;
  }
}
.radio-group {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}
.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  font-weight: 500;
  cursor: pointer;
}
.radio-group input[type="radio"] {
  transform: scale(1.2); 
  accent-color: $secondary-color; 
}
.full-width {
  grid-column: span 2;

  @include mobile {
    grid-column: span 1;
  }
}

.calculate-btn {
  width: 100%;
  padding: 1rem;
  background: $secondary-color;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
}

.result-card {
  margin-top: 2rem;
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;

  h3 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .bmi-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
    margin: 1rem 0;
  }
}

.continue-btn {
  background: #48bb78;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #38a169;
  }
}


</style>
