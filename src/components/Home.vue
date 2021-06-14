<template>
  <div class="container" :style="{
    backgroundImage: `url(${heroImageSrc})`
  }"></div>
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
.container {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 640px;
  max-height: 100%;
}
</style>
