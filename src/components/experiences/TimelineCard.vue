<template>
    <div
    class="mb-8 flex justify-between items-center w-full"
    :class="childClass">
        <div class="order-1 w-5/12"></div>
        <div class="order-1 w-5/12 px-1 py-4 text-right">
            <p
            class="mb-3 text-base text-bamboo"
            :class="textAlign">
                {{ date }}
            </p>
            <h4
            :class="textAlign"
            class="mb-1 font-bold text-lg md:text-2xl">
                {{ jobTitle }}
            </h4>
            <p
            :class="textAlign"
            class="mb-4 font-bold text-md italic">
                {{ company }}
            </p>
            <p
            :class="textAlign"
            class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    {{  content  }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    date: String,
    jobTitle: String,
    company: String,
    content: String,
    childClass: String,
    textAlign: String
});
</script>