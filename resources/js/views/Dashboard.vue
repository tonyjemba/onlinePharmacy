<template>
    <div>
        <div>
            <h1 class="text-1xl md:text-2xl text-black ">My products</h1>
            <div
                class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
            >
                <!-- display data from databese in dashbaord item  -->
                <!-- Card 1 -->
                <DashboardItemCard />

                <!-- Card 2 -->
                <DashboardItemCard />
                <!-- Card 3 -->
                <DashboardItemCard />

                <!-- Card 4 -->
                <DashboardItemCard />

                <!-- Card 5 -->
                <DashboardItemCard />

                <!-- Card 6 -->
                <DashboardItemCard />
            </div>
        </div>
        <div>
            <h1 class="text-1xltext-2xl  md:text-black ">My services</h1>
            <div
        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
    >
        <!-- Card 1 -->
        <DashboardItemCard />

        <!-- Card 2 -->
        <DashboardItemCard />
        <!-- Card 3 -->
        <DashboardItemCard />

        <!-- Card 4 -->
        <DashboardItemCard />

        <!-- Card 5 -->
        <DashboardItemCard />

        <!-- Card 6 -->
        <DashboardItemCard />
    </div>
        </div>
    </div>
</template>

<script>
import DashboardItemCard from "../components/dashboard-item-card.vue";
import { useStore } from "vuex";
import { onMounted } from 'vue'

export default {

    setup() {
       const store = useStore();
       onMounted(() => {
 store.dispatch("products/fetchProcucts")
})
      return{
    
      
      }
    },
    components: {
        DashboardItemCard,
    },
};
</script>
