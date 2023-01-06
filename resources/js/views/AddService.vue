<template>
    <form @submit.prevent="addService" method="POST">
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
            <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
                    ADD SERVICE
                </h1>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="productName" className="text-lx font-serif">Service Name:</label>
                        <input type="text" placeholder="Service Name" id="productName"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.service_name" />
                    </div>
                    <div>
                        <label htmlFor="pharmacyname" className="text-lx font-serif">Pharmacy Name:</label>
                        <input type="text" placeholder="Pharmacy" id="pharmacyname"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.Pharmacy_name" />
                    </div>
                    <div>
                        <label htmlFor="location" className="text-lx font-serif">Location:</label>
                        <input type="text" placeholder="Location" id="location"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.location" />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-lx font-serif">Price:</label>
                        <input type="text" placeholder="UGX" id="price"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.price" />
                    </div>
                    <div>
                        <label htmlFor="disease" className="text-lx font-serif">Disease:</label>
                        <input type="text" placeholder="" id="disease"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.disease" />
                    </div>
                    <!-- add contact for your drug shop -->
                    <div>
                        <label htmlFor="contact" className="text-lx font-serif">Contact:</label>
                        <input type="text" placeholder="Phone Number" id="contact"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                            v-model="serviceData.contact" />
                    </div>
                    <!-- add image for the product -->
                    <div>
                        <label className="text-lx font-serif">Add image:</label>
                        <input type="file" accept="image/*" @change="previewImage"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                    </div>
                    <!-- image preview section -->
                    <div v-if="state.imageData">
                        <img height="268" width="356" :src="state.imageData" />
                        <br />
                        <button @click.prevent="upload(state.imageName)"
                            className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                            {{ state.btnState }}
                        </button>
                    </div>
                    <!-- prescriptions for the medicine -->
                    <div>
                        <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
                        <textarea id="description" cols="{30}" rows="{10}" placeholder="Talk more about the Service.."
                            className="w-full font-serif
                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" v-model="serviceData.descprition" />
                    </div>

                    <button
                        className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                        ADD MEDICINE
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { reactive } from "vue";
import {
    getStorage,
    ref,
    uploadString,
    getDownloadURL,
} from "firebase/storage";
import { useStore } from "vuex";
import { ref as vueref, computed } from "vue";

export default {
    setup() {
        const store = useStore();
        const state = reactive({
            imageData: null,
            imageUrl: "",
            imageName: null,
            btnState: "upload",
        });
        //logged user is stored in localstorage, we get his id
        const ls = JSON.parse(localStorage.getItem("vuex"));
        const userId = ls.login.loginUser.user.id;

        const storage = getStorage();
        const serviceData = vueref({
            service_name: "",
            Pharmacy_name: "",
            location: "",
            price: "",
            disease: "",
            descprition: "",
            contact: "",
        });
        function previewImage(event) {
            const image = event.target.files[0];
            state.imageName = image.name;
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (e) => {
                state.imageData = e.target.result;
            };
        }
        //uploading function
        function upload(imageName) {
            state.btnState = "uploading";
            uploadString(
                ref(storage, `products/${imageName}`),
                state.imageData,
                "data_url"
            )
                .then((snapshot) => {
                    console.log(snapshot);
                })
                .then(() => {
                    state.btnState = "uploaded";
                    getDownloadURL(ref(storage, `products/${imageName}`)).then(
                        (url) => {
                            state.imageUrl = url;
                        }
                    );
                });
        }

        return {
            previewImage,
            upload,
            state,
            serviceData,
            addService: () =>
                store.dispatch("services/addService", {
                    image_url: state.imageUrl,
                    user_id: userId,
                    ...serviceData.value,
                }),
        };
    },
};
</script>
