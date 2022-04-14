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
                        <label className="text-lx font-serif">Add Image:</label>
                        <div class="example-simple">
                            <h1 id="example-title" class="example-title">
                                Simple Example
                            </h1>
                            <div class="upload">
                                <ul>
                                    <li v-for="file in files" :key="file.id">
                                        <span>{{ file.name }}</span> -
                                        <span>{{
                                            $formatSize(file.size)
                                        }}</span>
                                        -
                                        <span v-if="file.error">{{
                                            file.error
                                        }}</span>
                                        <span v-else-if="file.success"
                                            >success</span
                                        >
                                        <span v-else-if="file.active"
                                            >active</span
                                        >
                                        <span v-else-if="!!file.error">{{
                                            file.error
                                        }}</span>
                                        <span v-else></span>
                                    </li>
                                </ul>
                                <div class="example-btn">
                                    <file-upload
                                        class="btn btn-primary"
                                        post-action="/upload/post"
                                        extensions="gif,jpg,jpeg,png,webp"
                                        accept="image/png,image/gif,image/jpeg,image/webp"
                                        :size="1024 * 1024 * 10"
                                        :maximum="1"
                                        v-model="files"
                                        @input-filter="inputFilter"
                                        @input-file="inputFile"
                                        ref="upload"
                                    >
                                        <i class="fa fa-plus"></i>
                                        Select files
                                    </file-upload>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        v-if="!upload || !upload.active"
                                        @click.prevent="upload.active = true"
                                    >
                                        <i
                                            class="fa fa-arrow-up"
                                            aria-hidden="true"
                                        ></i>
                                        Start Upload
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        v-else
                                        @click.prevent="upload.active = false"
                                    >
                                        <i
                                            class="fa fa-stop"
                                            aria-hidden="true"
                                        ></i>
                                        Stop Upload
                                    </button>
                                </div>
                            </div>
                    
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
<style>
.example-simple label.btn {
    margin-bottom: 0;
    margin-right: 1rem;
}
</style>
<script>
import { ref } from "vue";
import FileUpload from "vue-upload-component";
export default {
    components: {
        FileUpload,
    },
    setup(props, context) {
        const upload = ref(null);

        const files = ref([]);
        function inputFilter(newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                //only allow images
                if (
                    /(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)
                ) {
                    return prevent();
                }

                if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                    return prevent();
                }
            }
        }
        function inputFile(newFile, oldFile) {
            if (newFile && !oldFile) {
                // add
                console.log("add", newFile);
            }
            if (newFile && oldFile) {
                // update
                console.log("update", newFile);
            }
            if (!newFile && oldFile) {
                // remove
                console.log("remove", oldFile);
            }
        }
        return {
            files,
            upload,
            inputFilter,
            inputFile,
        };
    },
};
</script>
