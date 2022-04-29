

<template>
<!-- component for dashboard item -->
 <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img class="h-56 lg:h-60 w-full object-cover" :src=image_url  alt="" />
            <div class="p-3">
                <span class="text-sm text-primary">Last Update:{{ updated_at }}</span>
                <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                {{product_name }}
                </h3>
                <p class="paragraph-normal text-gray-600 line-clamp-2">
               {{ descprition }}
                </p>
                <div class="mt-3 block" >UGX: {{price}}</div>
                <div className="flex items-center justify-end mt-4 top-auto">
            <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
            <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
          </div>
            </div>
        </div>

</template>

<script>


export default {
props: ['product_name','updated_at','descprition','price','image_url'],
 
}
</script>



