<template>
    <div
        class="container w-full flex justify-center items-center text-sm md:text-base"
    >
        <div class="w-11/12 sm:w-4/5 my-10 space-y-4">
            <div>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/online-pharmacy-d7579.appspot.com/o/products%2Fpanadol_paracetamol_pain_relief_tablets_500mg_adva-front.jpg?alt=media&token=5f86cf93-b6ef-47ee-988f-0aab2438c883"
                    class="object-cover shadow-lg h-64 sm:h-80 w-full"
                    alt="product image"
                />
            </div>

            <div class="flex w-full flex-row justify-between">
                <div class="text-neutral-300 font-light">
                    Updated: 2mins ago
                </div>
                <div class="text-neutral-300 font-light">headache</div>
            </div>
            <div class="flex flex-row justify-between">
                <div
                    class="text-neutral-600 leading-tight tracking-tight font-bold"
                >
                    Panadol
                </div>
                <div
                    class="text-neutral-600 leading-tight tracking-tight font-bold"
                >
                    UGX: 2000
                </div>
            </div>
            <div class="text-neutral-600 font-light">Lords Mercy Pharmacy</div>
            <div class="text-neutral-600 font-light">
                This is onr og ths jojs joijf ojaifij oaidjf ijdf ajfoiadjf
                idfjadoifjasi iojdf dfaisojioj jdfasoidf s
            </div>
            <div
                class="flex w-full justify-end text-neutral-600 leading-tight tracking-tight font-bold hover:text-blue-600"
            >
                <div>
                    Contact: 0782345364
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
    setup() {
        const route = useRoute();
        const routeId = route.params.id;
        return {
            routeId,
        };
    },
};
</script>
