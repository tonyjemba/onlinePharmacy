<template>
    <div class="min-h-full">
        <Disclosure as="nav" class="bg-slate-50" v-slot="{ open }">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <Icon :height="50" :width="50" :autoPlay="false" />
                        </div>
                        <div >
                            <div class="ml-10 flex items-baseline space-x-4">
                                <div>Online Pharmacy</div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block">
                        <div v-if="user !== []">
                            <div class="ml-4 flex items-center md:ml-6">
                                <!-- Profile dropdown -->
                                <Menu as="div" class="ml-6 relative">
                                    <div>
                                        <MenuButton
                                            class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span class="sr-only"
                                                >Open user menu</span
                                            >
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                :src="imageUrl"
                                                alt=""
                                            />
                                        </MenuButton>
                                    </div>
                                    <transition
                                        enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95"
                                    >
                                        <MenuItems
                                            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <MenuItem
                                                v-for="item in userNavigation"
                                                :key="item.name"
                                                v-slot="{ active }"
                                            >
                                                <div
                                                    :href="item.href"
                                                    :class="[
                                                        active
                                                            ? 'bg-gray-100'
                                                            : '',
                                                        'block px-4 py-2 text-sm text-gray-800',
                                                    ]"
                                                    @click="logout(item.name)"
                                                >
                                                    <router-link
                                                        :to="item.route"
                                                        >{{
                                                            item.name
                                                        }}</router-link
                                                    >
                                                </div>
                                            </MenuItem>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                        </div>
                        <div v-else >
                            <div class="ml-10 flex items-baseline space-x-4">
                                <div
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :class="[
                                        this.$route.path == item.route
                                            ? 'bg-indigo-900 text-white'
                                            : 'text-gray-800 hover:bg-indigo-200 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium',
                                    ]"
                                    :aria-current="
                                        item.current ? 'page' : undefined
                                    "
                                >
                                    <router-link
                                        :to="item.route"
                                        
                                        >{{ item.name }}</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span class="sr-only">Open main menu</span>
                            <MenuIcon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <!-- <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    Online Pharmacy
                </div> -->

                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full"
                                :src="imageUrl"
                                alt=""
                            />
                        </div>
                        <div class="ml-3">
                            <div
                                class="text-base font-medium leading-none text-gray-400"
                            >
                                Username: {{ user.user.name }}
                            </div>
                            <div
                                class="text-sm pt-2 font-medium leading-none text-gray-400"
                            >
                                Email: {{ user.user.email }}
                            </div>
                        </div>
                        <button
                            type="button"
                            class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <router-link to="/">
                                <HomeIcon class="h-6 w-6" aria-hidden="true" />
                            </router-link>
                        </button>
                    </div>
                    <div class="ml-3 mt-2">
                        <div
                            class="text-sm pt-2 font-medium leading-none text-gray-400"
                        >
                            Created: {{ user.user.updated_at }}
                        </div>

                        <div
                            class="text-sm pt-2 font-medium leading-none text-gray-400"
                        >
                            Token: {{ user.token }}
                        </div>

                        <div class="pt-4">
                            <DisclosureButton
                                @click="logout('Sign out')"
                                class="block px-3 py-2 rounded-md text-base font-medium text-indigo-400 hover:text-white hover:bg-indigo-700"
                                >Sign out</DisclosureButton
                            >
                        </div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900"></h1>
            </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <div>
                        Main Page is here again

                        <div>
                            <button @click="prod">get products</button>
                            <router-link to="/login">Login</router-link>
                        </div>
                    </div>
                </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
</template>

<script>
import axios from "axios";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import Icon from "../components/Icon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const userNavigation = [
    { name: "My Profile", route: "/myprofile" },

    { name: "Sign out", route: "/" },
];
const navigation = [
    { name: "Login", route: "/login" },
    { name: "Create Account", route: "/register" },
    
];
export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        HomeIcon,
        MenuIcon,
        XIcon,
        Icon,
    },
    setup() {
        function prod() {
            axios
                .get(
                    "https://online-pharmacy-project.herokuapp.com/api/products"
                )
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        const store = useStore();
        //if the user is logged then we use the logged in emain but registered we use the registered email
        const loggedEmail = computed(
            () => store.getters["login/getLoggedUser"]
        );

        function logout(name) {
            if (name === "Sign out") {
                store.dispatch("logout/submitLogout", loggedEmail.value);
            }
            return null;
        }
        return {
            //dispatch logout action
            logout,
            //accessing  logged in user state
            user: computed(() => store.state.login.loginUser),
            imageUrl:
                "https://firebasestorage.googleapis.com/v0/b/online-pharmacy-d7579.appspot.com/o/products%2Fuser.png?alt=media&token=5dce7c32-3c59-4e71-860e-96c9f84392cb",
            navigation,
            userNavigation,
         
            prod,
        };
    },
};
</script>
