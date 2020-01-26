<template>
  <div class="view--home">
    <div class="hero">
      <img alt="Vue logo" src="../assets/logo.png">
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
}
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 720px;
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
.body {
  color: #fff;
  padding: 2rem;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
