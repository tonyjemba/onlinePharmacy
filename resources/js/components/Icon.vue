<template>
    <Vue3Lottie
        :animationData="icon"
        :height="height"
        :width="width"
        :speed="0.4"
        :loop="false"
        :delay="6000"
        :autoPlay="autoPlay"
    />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import icon from "../assets/icon.json";

export default {
    components: {
        Vue3Lottie,
    },

    data() {
        return {
            icon,
        };
    },
    props: ["height", "width", "autoPlay"],
};
</script>
