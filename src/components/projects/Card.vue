<template>

<div 
 class="flex flex-col mt-16">
    <div class="flex items-center justify-center rounded-t-md">
    <a
    class="relative block w-80 h-80 md:h-96 bg-gray-100 group rounded-t-md"
    href="#">

        <slot></slot>

        <div class="relative h-96 rounded-t-md">
            <div class="">
                <div
                class="transition-all h-96 transform translate-y-8 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:translate-y-0">
                    <div class="px-6 bg-dark opacity-70 h-96 rounded-t-md flex flex-col justify-center">
                        <h3 class="text-bamboo font-bold text-xl pt-8">
                            {{ title }}
                        </h3>
                        
                        <p class="text-white py-1">
                            {{ content }}
                        </p>
                        <router-link
                        :to="{ name: route }"
                        class="my-6 absolute inset-x-0 bottom-0 h-12 w-40 mx-auto text-center text-dark rounded-xl border border-black bg-white px-4 py-2 transition-all duration-[550ms] ease-out
                        hover:bg-white hover:text-bamboo hover:w-64">
                            Découvrir le projet
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </a>
    </div>
    <div class="sm:hidden bg-bamboo opacity-80 relative px-6 h-60 w-80">
        <h3 class="text-dark font-bold text-lg pt-8">
            {{ title }}
        </h3>
        <p class="text-dark py-1 mb-4">
            {{ content }}
        </p>
        <router-link
        :to="{ name: route }"
        class="h-12 w-50 rounded-md border border-black text-white bg-black px-4 py-2 absolute inset-x-0 bottom-4 w-40 mx-auto text-center">
          Découvrir le projet
        </router-link>
    </div>
</div>

</template>

<script setup>

const props = defineProps({
    title: String,
    content: String,
    href: String,
    route: String
});


</script>