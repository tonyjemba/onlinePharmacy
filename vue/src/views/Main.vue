<template>
    <div>Main Page

        <div>
    <button @click="prod">get products</button>

        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {

    setup() {
       function prod(){
            axios.get('http://localhost:8000/api/products').then(
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
