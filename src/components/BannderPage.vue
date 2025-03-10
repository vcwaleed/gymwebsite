<script setup>
const socialLinks = [
  { icon: "fa-brands fa-facebook", url: "https://facebook.com" },
  { icon: "fa-brands fa-twitter", url: "https://twitter.com" },
  { icon: "fa-brands fa-instagram", url: "https://instagram.com" }
];
</script>

<template>
  <section class="banner">
    <div class="img_con">
      <img src="../assets/banner.jpeg" alt="Gym Banner" />
      <div class="text_conn">
        <h1>Elevate your workout</h1>
        <span> 
          “I hate every minute of training. But I said, don’t quit. 
          Suffer now and live the rest of your life as a champion.” 
          — Mohammad Ali
        </span>
        <button class="btn_nav">Get start</button>
      </div>
    </div>
    <div class="social-icons">
      <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank">
        <i :class="social.icon"></i>
      </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "sass:color";
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .img_con {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(50%); 
    }
  }
  .text_conn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 2;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
    span {
      display: block;
      font-size: 1rem;
      margin-top: 10px;
      max-width: 600px;
    }
    .btn_nav {
      margin-top: 20px;
      background-color: white;
      color: $primary-color;
      padding: 12px 20px;
      font-size: 1.2rem;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: color.adjust($secondary-color, $lightness: -10%);
        color:white
      }
    }
  }
  .social-icons {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
    a {
      color: white;
      font-size: 20px;
      transition: color 0.3s ease;
      &:hover {
        color: $secondary-color;
      }
    }
  }
}
</style>
