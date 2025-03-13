<template>
  <div class="signup-container">
    <form @submit.prevent="login" class="animated-form">
      <h1 class="main_heading">
        <span class="gradient-text">Welcome Back!</span>
      </h1>
      <div class="input-group">
        <input type="email" id="email" v-model="email" required  placeholder="Email"/>
       
        <i class="fas fa-envelope"></i>
      </div>
      <div class="input-group">
        <input type="password" id="password" v-model="password" required  placeholder="Password"/>
        <i class="fas fa-lock"></i>
      </div>
      <button type="submit" :disabled="isLoading" class="submit-btn">
        <span v-if="!isLoading">Login</span>
        <div v-else class="loader"></div>
      </button>
      <p v-if="errorMessage" class="error-message">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </p>
      <div class="alternative-actions">
        <router-link to="/signup" class="link">
          Don't have an account? <span>Sign Up</span>
        </router-link>
        <div class="social-login">
          <p>Or continue with</p>
          <div class="social-icons">
            <button type="button" class="google">
              <i class="fab fa-google"></i>
            </button>
            <button type="button" class="github">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const router = useRouter();
const login = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const response = await axios.get(
      `http://localhost:5000/users?email=${email.value}&password=${password.value}`
    );

    if (response.data.length === 0) {
      errorMessage.value = 'Invalid email or password.';
      email.value = '';
      password.value = '';
    } else {
      const userInfo = response.data[0];
      localStorage.setItem('user-info', JSON.stringify(userInfo));
      router.push('/');
    }
  } catch (error) {
    errorMessage.value = 'An error occurred while logging in.';
    console.error('Login Error:', error);
  } finally {
    isLoading.value = false;
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
  min-height: 100vh;
}

.animated-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  animation: formEntrance 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
}

.main_heading {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  .gradient-text {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}

.input-group {
  position: relative;
  margin: 0.2rem 0;
  
  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: $secondary-color;
      box-shadow: 0 0 15px rgba(78, 205, 196, 0.2);
      
      ~ label {
        transform: translateY(-120%);
        font-size: 0.8rem;
        color: $secondary-color;
      }
    }
    
    &:valid ~ label {
      transform: translateY(-120%);
      font-size: 0.8rem;
    }
  }
  
  label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 0.3rem;
    background: white;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  
  i {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
}

.submit-btn {
  padding: 1rem;
  margin-top: 1.5rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(78, 205, 196, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.error-message {
  padding: 0.8rem;
  margin-top: 1rem;
  background: #ffe3e3;
  color: #ff4444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    font-size: 1.2rem;
  }
}

.alternative-actions {
  margin-top: 2rem;
  text-align: center;
  
  .link {
    color: #666;
    text-decoration: none;
    
    span {
      color: $secondary-color;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    
    &:hover span {
      color: color.adjust($secondary-color, $lightness: -15%);

    }
  }
}

.social-login {
  margin-top: 1.5rem;
  
  p {
    color: #666;
    margin: 1rem 0;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    button {
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
      }
      
      &.google {
        background: #db4437;
        color: white;
      }
      
      &.github {
        background: #333;
        color: white;
      }
    }
  }
}

.loader {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes formEntrance {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .animated-form {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>