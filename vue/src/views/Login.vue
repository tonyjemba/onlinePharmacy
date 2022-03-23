<template>
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
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ " " }}
                    <a
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        <router-link to="/register"
                            >Register if you have no account</router-link
                        >
                    </a>
                </p>
            </div>
            <form
                class="mt-8 space-y-6"
                action=""
                method="POST"
                @submit.prevent="login"
            >
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only"
                            >Email address</label
                        >
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            v-model="credentials.password"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </a>
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
                        Sign in
                    </button>
                </div>
            </form>
            {{ token }}
        </div>
    </div>
</template>

<script>
import Icon from "../components/Icon.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { onBeforeRouteLeave } from "vue-router";
import { computed } from "vue";

export default {
    setup() {
        const store = useStore();
        const credentials = ref({
            email: "",
            password: "",
        });
        // onBeforeRouteLeave(async(to, from) => {
        //     if (
                
        //         // make sure the user is authenticated
        //         !token &&
        //         // ❗️ Avoid an infinite redirect
        //         to.name !== "Login"
        //     ) {
        //         // redirect the user to the login page
        //         return { name: "Login" };
        //     }else{
        //         return{name:"Dashboard"}
        //     }
        // });

        return {
            credentials,
            //actions
            login: () =>
                store.dispatch("login/submitLoginForm", credentials.value),
            //getters
            token: computed(() => store.getters['login/getToken']),
        };
    },
    components: {
        Icon,
    },
};
</script>
