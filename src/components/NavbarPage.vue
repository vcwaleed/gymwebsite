<script setup>
import { ref } from 'vue';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
<template>
  <nav class="navbar">
    <div class="brand">
      <img src="../assets/gymlogo.png" width="60" height="60" />
    </div>
    <ul class="nav-links" :class="{ 'active': isMenuOpen }">
      <li v-for="(link, index) in links" :key="index" @click="closeMenu">
        <a :href="link.path" class="nav-link">{{ link.name }}</a>
      </li>
    </ul>
    <button class="btn_nav">Join US</button>
    <button class="hamburger" @click="toggleMenu">
      <svg viewBox="0 0 100 80" width="25" height="25">
        <rect width="100" height="15" rx="8"></rect>
        <rect y="30" width="100" height="15" rx="8"></rect>
        <rect y="60" width="100" height="15" rx="8"></rect>
      </svg>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: $primary-color;
  color: $text-color;
  position: sticky;
  top: 0;
  width: auto;
  z-index: 1000;
  .brand {
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;

    .nav-link {
      color: gray;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }
  }

  .btn_nav {
    background-color:btn_col;
    color:black ;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: color.adjust($secondary-color, $lightness: -10%);
      color:white ;
     
    }
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1100;

    svg {
      width: 25px;
      height: 30px;
      rect {
        fill: white;
        transition: fill 0.3s ease;
      }
    }

    &:hover svg rect {
      fill: $secondary-color;
    }
  }

  @include mobile {
    .nav-links {
      position: absolute;
      top: 60px;
      right: 0;
      width: 100%;
      background-color:$primary-color;
      flex-direction: column;
      align-items: center;
      display: none;

      &.active {
        display: flex;
      }
    }

    .btn_nav {
      display: none; 
    }

    .hamburger {
      display: block; 
    }
  }
}
</style>
