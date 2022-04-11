<template>
    <div>Main Page is here again

        <div>
    <button @click="prod">get products</button>
       <router-link to="/login"
                            >Login</router-link
                        >

        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {

    setup() {
       function prod(){
            axios.get('https://online-pharmacy-project.herokuapp.com/api/products').then(
            (res)=>console.log(res)
        ).catch(
            err=>console.log(err)
        )
       }

       return {
           prod
       }
    }
    
}
</script>
