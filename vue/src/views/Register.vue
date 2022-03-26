<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div>
                <div>
                    <Icon :height="110" :width="110" :autoPlay="true" />
                </div>
                <h2
                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                >
                    Register to create account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ " " }}
                    <a
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        <router-link to="/login"
                            >Login if you already have an account</router-link
                        >
                    </a>
                </p>
            </div>
            <form
                class="mt-8 space-y-6"
                @submit.prevent="submitRegForm"
                method="POST"
            >
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="name" class="sr-only">Username</label>
                        <input
                            id="name"
                            name="username"
                            type="text"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            v-model="credentials.name"
                        />
                    </div>
                    <div>
                        <label for="email" class="sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            v-model="credentials.email"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            v-model="credentials.password"
                        />
                    </div>
                    <div>
                        <label for="password_confirmation" class="sr-only"
                            >Confirm Password</label
                        >
                        <input
                            id="password_confirmation"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Confirm Password"
                            v-model="credentials.password_confirmation"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span
                            class="absolute left-0 inset-y-0 flex items-center pl-3"
                        >
                        </span>
                        Register
                    </button>
                </div>
            </form>
            {{ credentials.name }}
             {{ credentials.email }}
              {{ credentials.password }}
               {{ credentials.password_confirmation }}
        </div>
    </div>
</template>

<script>
import Icon from "../components/Icon.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
    components: {
        Icon,
    },

    setup() {
        const store = useStore();
        const credentials = ref({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
        return {
            credentials,
            submitRegForm: () =>
            store.dispatch("register/submitRegForm", credentials.value),
        };
    },
};
</script>
