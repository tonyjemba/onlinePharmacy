<script setup>
// using the setup in the script
const author = "Tony Jemba."
</script>

<template>
    <footer class="bg-gray-100 w-full py-6  mt-auto ">
        <!-- marging just for display-->

        <div class="flex items-center w-full justify-center ">
            <p class="inline-flex text-blue-500  pl-6">
              Demo Project Built with
                <svg fill="#e53e3e" viewBox="0 0 24 24" class="w-5 h-5 mx-1 pt-px text-red-600" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg><span>by <a :href="`https://github.com/tonyjemba`" target="_blank"> {{ author }}</a></span>
            </p>

        </div>
    </footer>
</template>