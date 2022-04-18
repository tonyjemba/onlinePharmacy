<template>
    <form>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
            <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                <h1
                    className="text-center text-2xl font-bold text-gray-500 mb-10"
                >
                    ADD POST
                </h1>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="productName"
                            className="text-lx font-serif"
                            >Product Name:</label
                        >
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            id="productName"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
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
                        />
                    </div>
                    <div>
                        <label htmlFor="disease" className="text-lx font-serif"
                            >Disease:</label
                        >
                        <input
                            type="text"
                            placeholder="What does the medicine treat"
                            id="disease"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact" className="text-lx font-serif"
                            >Contact:</label
                        >
                        <input
                            type="text"
                            placeholder="Phone Number"
                            id="contact"
                            className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="text-lx font-serif"
                            >Add Image:</label
                        >
                        <div>
                            <v-btn @click="click1">choose a photo</v-btn>
                            <input
                                type="file"
                                ref="input1"
                                style="display: none"
                                @change="previewImage"
                                accept="image/*"
                            />
                        </div>
                        <div v-if="imageData != null">
                            <img
                                class="preview"
                                height="268"
                                width="356"
                                :src="img1"
                            />
                            <br />
                        </div>
                    </div>

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
                            placeholder="Talk more about the Product.."
                            className="w-full font-serif
                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                        />
                    </div>

                    <button
                        className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
                    >
                        ADD MEDICINE
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
      const imageData = null;
    function previewImage(event){
        console.log(event.target.files[0])
    }


        return {
          imageData,
          previewImage
        };
    },
};
</script>
