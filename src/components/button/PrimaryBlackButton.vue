<template>
    <button
    class="group relative h-12 w-50 border border-black bg-black px-4 py-2 transition-all duration-[550ms] ease-out"
    :class="childClass">
        <a
          :href="href"
          class="flex items-center mr-4 text-white group-hover:text-black">
            <svg
            v-if="svgMail"
            class="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {{ content }}
          </a>
    </button>

</template>

<script setup>
const props = defineProps({
    childClass: String,
    href: String,
    content: String,
    svgMail: Boolean,
});

</script>