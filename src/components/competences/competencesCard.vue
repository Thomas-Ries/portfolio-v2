<template>
    <div class="flex flex-col items-center border border-white rounded w-80">
        <slot></slot>
        <div class="flex flex-col p-4">
            <p class="text-white font-semibold text-3xl mb-2 text-center mt-4"> {{ title }}</p>
            <p class="text-white text-base text-center mt-4">{{ content }}</p>
        </div>
    </div>
</template>



<script setup>
const props = defineProps({
    imgTitle: String,
    competence: String,
    title: String,
    content: String
});

</script>