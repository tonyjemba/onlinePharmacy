<template>
    <div>
        <div>
            <div class="box pt-6 pb-6">
                <div class="box-wrapper">
                    <div
                        class="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200"
                    >
                        <div class="flex flex-col w-full">
                            <!-- search bar -->
                            <div class="flex flex-row w-full">
                                <button
                                    @click="getSearchedData"
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
                                    placeholder="search for items"
                                    class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                                    v-on:input="getSearchedData($event)"
                                />
                                <div class="select">
                                    <select
                                        name=""
                                        id=""
                                        v-model="state.category"
                                        class="text-sm outline-none focus:outline-none bg-transparent"
                                    >
                                        <option value="all" selected>
                                            All
                                        </option>
                                        <option value="products">
                                            Products
                                        </option>
                                        <option value="services">
                                            Services
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- search results -->
                            <div
                                class="pt-4 flex flex-col"
                                v-if="state.show === true"
                            >
                                <div
                                    v-if="
                                        state.category == 'all' ||
                                        state.category == 'products'
                                    "
                                >
                                    <div
                                        class="text-1xl md:text-2xl text-black"
                                    >
                                        Results in products
                                    </div>
                                    <div
                                        v-if="searchedProducts.length > 0"
                                        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
                                    >
                                        <div
                                            v-for="product in searchedProducts"
                                            :key="product.id"
                                        >
                                            <DashboardItemCard
                                                :product_name="
                                                    product.product_name
                                                "
                                                :descprition="
                                                    product.descprition
                                                "
                                                :image_url="product.image_url"
                                                :price="product.price"
                                                :updated_at="product.updated_at"
                                                :buttons="false"
                                                @view="viewProduct(product.id)"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        v-else
                                        class="flex w-full text-center items-center justify-center"
                                    >
                                        <div class="pt-6 pb-6">
                                            Nothing Found in Products :)
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="pt-4"
                                    v-if="
                                        state.category == 'all' ||
                                        state.category == 'services'
                                    "
                                >
                                    <div
                                        class="text-1xl md:text-2xl text-black"
                                    >
                                        Results in Services
                                    </div>
                                    <div
                                        v-if="searchedServices.length > 0"
                                        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
                                    >
                                        <div
                                            v-for="product in searchedServices"
                                            :key="product.id"
                                        >
                                            <DashboardItemCard
                                                :product_name="
                                                    product.product_name
                                                "
                                                :descprition="
                                                    product.descprition
                                                "
                                                :image_url="product.image_url"
                                                :price="product.price"
                                                :updated_at="product.updated_at"
                                                :buttons="false"
                                                @view="viewProduct(product.id)"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        v-else
                                        class="flex w-full text-center items-center justify-center"
                                    >
                                        <div class="pt-6 pb-6">
                                            Nothing Found in Services :)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1
                class="text-1xl md:text-2xl text-black"
                v-if="products.length != 0"
            >
                Products
            </h1>

            <div
                class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
                v-if="products.length != 0"
            >
                <div v-for="product in products" :key="product.id">
                    <DashboardItemCard
                        :product_name="product.product_name"
                        :descprition="product.descprition"
                        :image_url="product.image_url"
                        :price="product.price"
                        :updated_at="product.updated_at"
                        :buttons="false"
                        @view="viewProduct(product.id)"
                    />
                </div>
            </div>
        </div>
        <div>
            <h1
                class="text-1xl md:text-2xl text-black"
                v-if="services.length != 0"
            >
                Services
            </h1>
            <div
                class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
                v-if="services.length != 0"
            >
                <div v-for="service in services" :key="service.id">
                    <DashboardItemCard
                        :product_name="service.service_name"
                        :descprition="service.descprition"
                        :image_url="service.image_url"
                        :price="service.price"
                        :updated_at="service.updated_at"
                        :buttons="false"
                        @view="viewService(service.id)"
                    />
                </div>
            </div>
        </div>
        <div
            class="w-full h-100 flex justify-center items-center mt-6"
            v-if="products.length == 0 && services.length == 0"
        >
            <div class="font-bold text-slate-500">
                No Item has been added :)
            </div>
        </div>
    </div>
</template>

<script>
import DashboardItemCard from "../components/dashboard-item-card.vue";
import { useStore } from "vuex";
import { onMounted, computed, reactive } from "vue";
import router from "../router/index";
import products from "../store/modules/products";
import services from "../store/modules/services";

export default {
    setup() {
        const store = useStore();
        const state = reactive({
            itemName: "",
            show: false,
            category: "all",
        });

        //on mount get the products and services
        onMounted(() => {
            store.dispatch("products/fetchProcucts");
            store.dispatch("services/fetchServices");
        });
        function getSearchedData(e) {
            let searchValue = e.target.value;

            // searchValue.length>3 ? state.show = false : state.show = true;
            if (searchValue.length > 3) {
                store.dispatch("products/searchProduct", searchValue);
                store.dispatch("services/searchService", searchValue);
                state.show = true;
            }
        }
        function viewProduct(id) {
            router.push(`/view-product/${id}`);
        }
        function viewService(id) {
            router.push(`/view-service/${id}`);
        }
        return {
            products: computed(() => store.state.products.products),
            services: computed(() => store.state.services.services),
            searchedProducts: computed(() => store.state.products.searched),
            searchedServices: computed(() => store.state.services.searched),
            getSearchedData,
            viewProduct,
            viewService,
            state,
        };
    },
    components: {
        DashboardItemCard,
    },
};
</script>
