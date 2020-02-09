<template>
  <div class="view--cv">
    <div class="header">
      Hi I am header
    </div>
    <div class="body">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<style scoped>
.view--cv {
  font-family: 'Mukta', 'sans-serif';
  background-color: #0C1A1D;
  color: #fff;
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
