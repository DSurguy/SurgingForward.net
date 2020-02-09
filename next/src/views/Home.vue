<template>
  <div class="view--home">
    <div class="hero">
      <div class="hero__content">
        <div class="hero__header">
          <h1>Derek Surguy</h1>
        </div>
        <div class="hero__subheader">
          <h2>Modern Front-End Software &amp; Websites</h2>
        </div>
      </div>
      <div class="hero__gradient"></div>
    </div>
    <div class="body">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<style scoped>
.view--home {
  font-family: 'Mukta', 'sans-serif';
  background-color: #0C1A1D;
  color: #fff;
}
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~@/assets/hero.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.hero__gradient {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: rgb(12,26,29);
  background: -moz-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c1a1d",endColorstr="#0c1a1d",GradientType=1);
}
.hero__content {
  flex: 0;
  flex-basis: 390px;
  width: 390px;
  height: 190px;
  margin: 0 1rem;
  margin-top: -40px;
  border: 4px solid #fff;
}
.hero__header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  height: 50%;
  width: 100%;
  text-align: center;
  line-height: 2.5rem;
}
.hero__header::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 2.5rem;
  left: 2.5rem;
  height: 2px;
  background-color: #fff;
  display: block;
}
.hero__header h1 {
  margin: 0;
}
.hero__subheader {
  display: flex;
  justify-content: center;
  font-size: 0.85rem;
  margin-top: 1.25rem;
  text-align: center;
}
.hero__subheader h2 {
  font-weight: 400;
  margin: 0 1rem;
}
.body {
  padding: 2rem;
}
</style>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
