<template>
    <div>
        <div v-if="products.length != 0">
            <h1 class="pt-4 text-1xl md:text-2xl text-black" >My products</h1>

            <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                <div v-for="product in products" :key="product.id">
                    <DashboardItemCard :product_name="product.product_name" :descprition="product.descprition"
                        :image_url="product.image_url" :price="product.price" :updated_at="product.updated_at"
                        :buttons="true" @delItem="deleteProduct(product.id)" @edit="editProduct(product.id)" />
                </div>
            </div>
        </div>
        <div v-if="services.length != 0">
            <h1 class="text-1xl md:text-2xl text-black" >My services</h1>
            <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                <div v-for="service in services" :key="service.id">
                    <DashboardItemCard :product_name="service.service_name" :descprition="service.descprition"
                        :image_url="service.image_url" :price="service.price" :buttons="true"
                        :updated_at="service.updated_at" @delItem="deleteService(service.id)"
                        @edit="editService(service.id)" />
                </div>
            </div>
        </div>
        <div class=" w-full h-[28rem] flex justify-center " v-if="products.length == 0 && services.length == 0">
            <div class="font-bold text-slate-500">You don't have any Products :)</div>
        </div>
    </div>
</template>

<script>
import DashboardItemCard from "../components/dashboard-item-card.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export default {
    setup() {
        const store = useStore();
        const refreshed = false;

        //on mount get the products and services for the registered user
        onMounted(() => {
            //logged user is stored in localstorage, we get his id
            const ls = JSON.parse(localStorage.getItem("vuex"));
            const userId = ls.login.loginUser.user.id;
            store.dispatch("login/getProducts", { id: userId });
            store.dispatch("login/getServices", { id: userId });

            
           
        });
        return {
            products: computed(() => store.state.login.myProducts),
            services: computed(() => store.state.login.myServices),
            deleteProduct: (id) => store.dispatch("products/deleteProduct", id),
            deleteService: (id) => store.dispatch("services/deleteService", id),
            editProduct: (id) => store.dispatch("products/editProduct", id),
            editService: (id) => store.dispatch("services/editService", id),
        };
    },
    components: {
        DashboardItemCard,
    },
};
</script>
