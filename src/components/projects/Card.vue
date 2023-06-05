<template>
    <div class="w-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-[550ms] ease-out mt-16 first:mt-0
    md:mt-0 md:w-96">
        <slot class="w-full"> </slot>
        <div class="px-6 py-4 mt-8">
            <h3 class="font-bold text-xl mb-1">
                {{ title }}
            </h3>
            <p class="text-gray-700 text-base">
                {{ content }}
            </p>
            <button
            class="group my-6 relative h-12 w-50 border border-black bg-black px-4 py-2 transition-all duration-[550ms] ease-out hover:bg-white"
            :class="childClass">
                <a
                :href="href"
                class="flex items-center mr-4 text-white group-hover:text-black">
                    En savoir plus
                </a>
            </button>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    content: String,
    href: String,
});
</script>