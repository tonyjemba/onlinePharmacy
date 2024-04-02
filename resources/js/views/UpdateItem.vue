<template>
    <form @submit.prevent="updateProduct" method="POST">
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
            <div>
                <router-link to="/dashboard">
                        <IconBack :width="'30px'" :height="'25px'" class="cursor-pointer"/>
                </router-link>
            </div>
            <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                <h1
                    className="text-center text-2xl font-bold text-gray-500 mb-10"
                >
                    Edit
                </h1>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="productName"
                            className="text-lx font-serif"
                        >
                            Product Name:</label
                        >
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            id="productName"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.product_name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="pharmacyname"
                            className="text-lx font-serif"
                            >Pharmacy Name:</label
                        >
                        <input
                            type="text"
                            placeholder="Pharmacy"
                            id="pharmacyname"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.Pharmacy_name"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="text-lx font-serif"
                            >Location:</label
                        >
                        <input
                            type="text"
                            placeholder="Location"
                            id="location"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.location"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-lx font-serif"
                            >Price:</label
                        >
                        <input
                            type="text"
                            placeholder="UGX"
                            id="price"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.price"
                        />
                    </div>
                    <div>
                        <label htmlFor="disease" className="text-lx font-serif"
                            >Disease:</label
                        >
                        <input
                            type="text"
                            placeholder=""
                            id="disease"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.disease"
                        />
                    </div>
                    <!-- add contact for your drug shop -->
                    <div>
                        <label htmlFor="contact" className="text-lx font-serif"
                            >Contact:</label
                        >
                        <input
                            type="text"
                            placeholder="Phone Number"
                            id="contact"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="state.contact"
                        />
                    </div>
                    <!-- add image for the product -->
                    <div>
                        <label className="text-lx font-serif">Add image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            @change="previewImage"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                        />
                    </div>
                    <!-- image preview section -->
                    <div v-if="state.imageData">
                        <img height="268" width="356" :src="state.imageData" />
                        <br />
                    </div>
                    <div v-else>
                        <img height="268" width="356" :src="`${state.imageUrl}`" />
                        <br />
                    </div>
                    <!-- prescriptions for the medicine -->
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-lg font-serif"
                            >Description:</label
                        >
                        <textarea
                            id="description"
                            cols="{30}"
                            rows="{10}"
                            placeholder="Type here"
                            className="w-full font-serif
                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                            v-model="state.descprition"
                        />
                    </div>

                    <button
                        className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
                    >
                     <div class="flex justify-center align-middle">
                            <div v-if="isLoading">
                                <ButtonSpinner />
                            </div>

                            <div>Edit Product</div>
                        </div>
                        
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from "axios";
import IconBack from "../components/IconBack.vue"
import ButtonSpinner from "../components/ButtonSpinner.vue";
import { computed } from "vue";

export default {
    components:{IconBack,ButtonSpinner},
    setup() {
        const store = useStore();
        const route = useRoute();

        const routeId = route.params.id;

        const state = reactive({
            imageData: null,
            imageUrl: "",
            imageName: null,
            btnState: "upload",
            //properties of product to edit
            product_name: "",
            Pharmacy_name: "",
            location: "",
            price: "",
            disease: "",
            descprition: "",
            contact: "",
            imageFile: null
        });
        const isLoading = computed(() => store.state.products.isLoading);
        onMounted(async () => {
            const res = await axios.get(
                `/api/products/${routeId}`
            );

            state.product_name = res.data.product_name;
            state.Pharmacy_name = res.data.Pharmacy_name;
            state.location = res.data.location;
            state.price = res.data.price;
            state.disease = res.data.disease;
            state.descprition = res.data.descprition;
            state.contact = res.data.contact;
            state.imageUrl = res.data.image_url;
        });


        function previewImage(event) {
            const image = event.target.files[0];
            state.imageName = image.name;
            state.imageFile = image;
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (e) => {
                state.imageData = e.target.result;
            };
        }
        

        return {
            previewImage,
            isLoading,
            state,
            //edit the product
            updateProduct: () =>
                store.dispatch("products/updateProduct", {
                    id: routeId,
                    product_name: state.product_name,
                    Pharmacy_name: state.Pharmacy_name,
                    location: state.location,
                    price: state.price,
                    disease: state.disease,
                    descprition: state.descprition,
                    contact: state.contact,
                    image_url: state.imageUrl,
                    imageFile:state.imageFile
                }),
        };
    },
};
</script>
