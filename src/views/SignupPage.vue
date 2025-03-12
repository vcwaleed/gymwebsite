<template>
    <div class="signup-container">
      <form @submit.prevent="signUp">
        <h1 class="main_heading">Sign Up</h1>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
        <button type="submit">Sign Up</button>
        <router-link to="/login" class="link">Login</router-link>
      </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

const signUp = async () => {
  try {
    const response = await axios.post('http://localhost:5000/users', {
      email: email.value,
      password: password.value
    });
    console.log("User created", response.data);
    router.push('/');
  } catch (error) {
    console.error("Error signing up", error);
  }
};

onMounted(() => {
  if (localStorage.getItem('user-info')) {
    router.push('/');
  }
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "../styles/variables" as *;
@use "../styles/mixins" as *;

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.main_heading {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: $primary-color;
}

label {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

input {
  padding: 10px;
  margin-top: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: $secondary-color;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
  }
}

button {
  padding: 10px;
  margin-top: 15px;
  background-color: $secondary-color;
  color: $btn_col;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: color.adjust($secondary-color, $lightness: -10%);
  }
  &:disabled {
    background-color: color.adjust($secondary-color, $lightness: 30%);
    cursor: not-allowed;
  }
}

.link {
  text-align: center;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: $secondary-color;
}
</style>