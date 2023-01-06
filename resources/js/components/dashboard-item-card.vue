<script>
//using vueUse to change how time is displayed.
import { useTimeAgo } from "@vueuse/core";

export default {
    props: {
        product_name: String,
        updated_at: String,
        descprition: String,
        price: String,
        image_url: String,
        buttons: Boolean,
    },
    setup(props) {
        const timeAgo = useTimeAgo(props.updated_at);

        return {
            timeAgo,
        };
    },
};
</script>
<template>
    <!-- component for dashboard item -->
    <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
        <img class="h-56 lg:h-60 w-full object-cover" :src="image_url" alt="" />
        <div class="p-3">
            <span class="text-sm text-primary">Last Update: {{ timeAgo }}
            </span>

            <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                {{ product_name }}
            </h3>
            <p class="paragraph-normal text-gray-600 line-clamp-2">
                {{ descprition }}
            </p>
            <div class="w-full flex flex-row justify-between mt-3">
                <div class="block">UGX: {{ price }}</div>
                <div v-if="buttons === false" class="hover:text-blue-600 cursor-pointer" @click="$emit('view')">
                    view
                </div>
            </div>

            <div v-if="buttons === true" className="flex items-center justify-end mt-4 top-auto">
                <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline"
                    @click="$emit('delItem')">
                    Delete
                </button>

                <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2" @click="$emit('edit')">
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>


