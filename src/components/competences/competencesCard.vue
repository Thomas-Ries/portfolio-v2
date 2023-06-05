<template>
    <div class="flex flex-col items-center rounded w-80 my-12 pb-6
    md:w-96 xl:my-0">
        <slot></slot>
        <div class="flex flex-col p-4">
            <h3 class="text-white font-semibold text-3xl mb-2 text-center mt-2 tracking-wider">
                {{ title }}
            </h3>
            <p class="text-white text-base text-center mt-4">
                {{ content }}
            </p>
        </div>
    </div>
</template>



<script setup>
const props = defineProps({
    title: String,
    content: String
});

</script>