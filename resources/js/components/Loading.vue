<template>
  <Vue3Lottie :animationData="loading" :height= "height" :width="width" :speed="1" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
import loading from '../assets/loading.json';

export default {
  components: {
    Vue3Lottie,
  },
  
  data() {
    return {
      loading,
    }
  },
  props:["height","width","autoPlay"],
 
}
</script>