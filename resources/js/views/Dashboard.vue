<template>
    <div>
        <div>
            <div class="box pt-6">
                <div class="box-wrapper">
                    <div
                        class="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200"
                    >
                        <button
                            @click="getImages()"
                            class="outline-none focus:outline-none"
                        >
                            <svg
                                class="w-5 text-gray-600 h-5 cursor-pointer"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="search for products"
                            x-model="q"
                            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                        />
                        <div class="select">
                            <select
                                name=""
                                id=""
                                x-model="image_type"
                                class="text-sm outline-none focus:outline-none bg-transparent"
                            >
                                <option value="all" selected>All</option>
                                <option value="products">Products</option>
                                <option value="services">Servives</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="text-1xl md:text-2xl text-black">My products</h1>

            <div
                class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
            >
                <div v-for="product in products" :key="product.id">
                    <DashboardItemCard
                        :product_name="product.product_name"
                        :descprition="product.descprition"
                        :image_url="product.image_url"
                        :price="product.price"
                        :updated_at="product.updated_at"
                    />
                </div>
            </div>
        </div>
        <div>
            <h1 class="text-1xl md:text-2xl text-black">My services</h1>
            <div
                class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
            >
                <div v-for="service in services" :key="service.id">
                    <DashboardItemCard
                        :product_name="service.service_name"
                        :descprition="service.descprition"
                        :image_url="service.image_url"
                        :price="service.price"
                        :updated_at="service.updated_at"
                    />
                </div>
            </div>
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
        onMounted(() => {
            store.dispatch("products/fetchProcucts");
            store.dispatch("services/fetchServices");
        });
        return {
            products: computed(() => store.state.products.products),
            services: computed(() => store.state.services.services),
        };
    },
    components: {
        DashboardItemCard,
    },
};
</script>
