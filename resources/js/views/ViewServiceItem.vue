<template>
    <div class="container w-full flex justify-center items-center text-sm md:text-base">
        <div class="w-11/12 sm:w-4/5 md:w-2/4 my-10 space-y-4">
            <div>
                <img :src="state.imageUrl" class="object-cover shadow-lg h-64 sm:h-80 w-full" alt="product image" />
            </div>

            <div class="flex w-full flex-row justify-between">
                <div class="text-neutral-300 font-light">
                    Updated: {{ state.date }}
                </div>
                <div class="text-neutral-300 font-light">
                    {{ state.disease }}
                </div>
            </div>
            <div class="flex flex-row justify-between">
                <div class="text-neutral-600 leading-tight tracking-tight font-bold">
                    {{ state.name }}
                </div>
                <div class="text-neutral-600 leading-tight tracking-tight font-bold">
                    UGX: {{ state.price }}
                </div>
            </div>
            <div class="text-neutral-600 font-light">
                {{ state.Pharmacy_name }}
            </div>
            <div class="text-neutral-600 font-light text-lg ">
                {{ state.descprition }}
            </div>
            <div
                class="flex w-full justify-end text-neutral-600 leading-tight tracking-tight font-bold hover:text-blue-600">
                <div>
                    Contact: {{ state.contact }}
                    <div></div>
                </div>
            </div>
            <router-link to="/">
                <div class="px-6 py-2 mt-12 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 text-center " >
                    Back
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { useTimeAgo } from "@vueuse/core";

export default {
    setup() {
        const route = useRoute();
        const routeId = route.params.id;

        const state = reactive({
            imageUrl: "",
            name: "",
            Pharmacy_name: "",
            location: "",
            price: "",
            disease: "",
            descprition: "",
            contact: "",
            date: "",
        });
        //get data to edit when the component is mounted
        onMounted(async () => {
            const res = await axios.get(
                `/api/services/${routeId}`
            );
            console.log(res);
            //update state on component mount
            state.name = res.data.service_name;
            state.Pharmacy_name = res.data.Pharmacy_name;
            state.location = res.data.location;
            state.price = res.data.price;
            state.disease = res.data.disease;
            state.descprition = res.data.descprition;
            state.contact = res.data.contact;
            state.imageUrl = res.data.image_url;
            state.date = useTimeAgo(res.data.updated_at);
        });

        return {
            routeId,
            state,
        };
    },
};
</script>
