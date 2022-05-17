<template>
  <div>{{routeId}}</div>
  <router-link to="/">
      <div>Back Home</div>
  </router-link>

</template>

<script>
import { useRoute } from "vue-router";
export default {

setup(){
        const route = useRoute();
    const routeId = route.params.id;
    return {
        routeId
    }
}
}
</script>