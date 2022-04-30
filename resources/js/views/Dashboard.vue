<template>
    <div>
        <div>
            <h1 class="text-1xl md:text-2xl text-black">My products</h1>
            <div
                class="flex min-h-screen w-full items-center justify-center bg-gray-900"
            >
                <!-- component -->
                <div
                    class="flex rounded bg-white w-[30rem]"
                    x-data="{ search: '' }"
                >
                    <input
                        type="search"
                        class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                        placeholder="Find product"
                        x-model="search"
                    />

                    <button
                        type="button"
                        class="m-2 rounded px-4 px-4 py-2 font-semibold text-gray-100"
                        :class="
                            search.length > 0
                                ? 'bg-purple-500'
                                : 'bg-gray-500 cursor-not-allowed'
                        "
                        :disabled="search.length == 0"
                    >
                        search
                    </button>
                </div>
            </div>
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
                class="flex min-h-screen w-full items-center justify-center bg-gray-900"
            >
                <!-- component -->
                <div
                    class="flex rounded bg-white w-[30rem]"
                    x-data="{ search: '' }"
                >
                    <input
                        type="search"
                        class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                        placeholder="Find service"
                        x-model="search"
                    />

                    <button
                        type="button"
                        class="m-2 rounded px-4 px-4 py-2 font-semibold text-gray-100"
                        :class="
                            search.length > 0
                                ? 'bg-purple-500'
                                : 'bg-gray-500 cursor-not-allowed'
                        "
                        :disabled="search.length == 0"
                    >
                        search
                    </button>
                </div>
            </div>
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
