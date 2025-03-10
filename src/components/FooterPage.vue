<script setup>
const year = new Date().getFullYear();
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];
const socialLinks = [
  { icon: "fa-brands fa-facebook", url: "https://facebook.com" },
  { icon: "fa-brands fa-twitter", url: "https://twitter.com" },
  { icon: "fa-brands fa-instagram", url: "https://instagram.com" }
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="social-icons">
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank">
          <i :class="social.icon"></i>
        </a>
      </div>
      <p class="footer-text">© {{ year }} Gym Website. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.footer {
  background-color: $primary-color;
  color: $text-color;
  text-align: center;
  

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 10px 0;

    li a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color:$secondary-color;
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin: 10px 0;

    a {
      color: white;
      font-size: 20px;
      transition: color 0.3s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }

  .footer-text {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
  }

  @include mobile {
    .footer-links {
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
