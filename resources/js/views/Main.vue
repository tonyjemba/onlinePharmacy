<template>
    <div>
        Main Page is here again

        <div>
            <button @click="prod">get products</button>
            <router-link to="/login">Login</router-link>

            <router-link :to=path>{{ Edit }}</router-link>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    setup() {
        const path = "/editproduct/1"
        function prod() {
            axios
                .get(
                    "https://online-pharmacy-project.herokuapp.com/api/products"
                )
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }

        return {
            prod,
            path,
        };
    },
};
</script>
