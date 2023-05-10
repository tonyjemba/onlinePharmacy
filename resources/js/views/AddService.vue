<template>
    <div className="bg-indigo-50 min-h-screen md:px-20 pt-6 pb-12">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
                ADD SERVICE
            </h1>
            <VeeForm
                v-slot="{ handleSubmit }"
                :validation-schema="schema"
                as="div"
            >
                <form
                    @submit="handleSubmit($event, onSubmitService)"
                    class="flex flex-col gap-y-5"
                >
                    <div class="flex flex-col">
                        <div>
                            <label for="service_name" class="font-bold"
                                >Service Name</label
                            >
                        </div>
                        <div>
                            <Field
                                name="service_name"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="service_name" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="phamacy_name" class="font-bold"
                                >Pharmacy Name</label
                            >
                        </div>
                        <div>
                            <Field
                                name="phamacy_name"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="phamacy_name" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="location" class="font-bold"
                                >Location</label
                            >
                        </div>
                        <div>
                            <Field
                                name="location"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="location" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="price" class="font-bold">Price</label>
                        </div>
                        <div>
                            <Field
                                name="price"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="price" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="disease" class="font-bold"
                                >Disease</label
                            >
                        </div>
                        <div>
                            <Field
                                name="disease"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="disease" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="contact" class="font-bold"
                                >Contact</label
                            >
                        </div>
                        <div>
                            <Field
                                name="contact"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="contact" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="service_image" class="font-bold"
                                >Add Image</label
                            >
                        </div>
                        <div>
                            <Field
                                name="service_image"
                                v-slot="{ handleChange }"
                            >
                                <input type="file" @change="handleChange" />
                            </Field>
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="service_image" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label for="description" class="font-bold"
                                >Description</label
                            >
                        </div>
                        <div>
                            <Field
                                name="description"
                                as="textarea"
                                type="text"
                                class="rounded w-4/5"
                            />
                        </div>
                        <div class="text-red-500 text-sm">
                            <ErrorMessage name="description" />
                        </div>
                    </div>

                    <button
                        className=" px-6 py-2 mt-10 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
                    >
                        Add Service
                    </button>
                </form>
            </VeeForm>
        </div>
    </div>
</template>

<script setup>
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";

//vuex store
const store = useStore();

//logged user is stored in localstorage, we get his id
const ls = JSON.parse(localStorage.getItem("vuex"));
const userId = ls.login.loginUser.user.id;

const schema = yup.object({
    service_name: yup.string().required("The Service Name is a required field"),
    phamacy_name: yup
        .string()
        .required("The Pharmacy Name is a required field"),
    location: yup.string().required("The Location is a required field"),
    price: yup
        .number()
        .required("The Price is a required field")
        .positive()
        .integer(),
    disease: yup.string().required("The Disease is a required field"),
    contact: yup
        .string("The  Contact is a required field")
        .matches(/^\+?\d{10,20}$/, "Please enter a valid Phone number")
        .required("The Phone number is required"),
    service_image: yup
        .mixed()
        .required("The Service Image is required")
        .test("fileSize", "File too large", (value) => {
            return value && value.size <= 10000000; //file should be less or equal to 10MB
        }),
    description: yup
        .string()
        .required("The Service Description is a required field"),
});

const onSubmitService = (values) => {
    // Submit values to API...
    console.log('form Values',values);
    store.dispatch("services/addService", { ...values, user_id: userId });
};
</script>
