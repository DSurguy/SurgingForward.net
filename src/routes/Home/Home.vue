<template>
  <div class="ds-hero-container" :style="{
    backgroundImage: `url(${heroImageSrc})`
  }">
    <div class="ds-hero-body">
      <h1>Derek Surguy</h1>
      <div class="ds-hero-divider"></div>
      <h2>Front-End Software Engineer</h2>
    </div>
  </div>
  <div class="main-container">
    <div class="main-body">
      <nav class="nav">
        <router-link to="/" class="button is-ghost">Home</router-link>
      </nav>
      <p>hello</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heroImageSrc from '@/assets/hero.jpg';
export default defineComponent({
  name: 'Home',
  props: {},
  setup: () => {
    return {
      heroImageSrc
    }
  }
})
</script>

<style scoped>
.ds-hero-container {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 720px;
  max-height: 100%;
  box-sizing: border-box;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ds-hero-body {
  border: 4px solid #fdfdfd;
  color: #fdfdfd;
  text-shadow: 0 0 2px #000;
  width: 400px;
  margin-top: -2rem;
}
.ds-hero-body h1 {
  font-weight: 700;
  margin: 1rem 0;
}
.ds-hero-body h2 {
  font-weight: 400;
  margin: 1.5rem;
}
.ds-hero-divider {
  height: 2px;
  width: 80%;
  margin: 0 auto;
  background-color: #fdfdfd;
}
.main-container {
  width: 80%;
  min-height: 400px;
  margin: -5em auto 0 auto;
  background-color: #fdfdfd;
}
</style>
