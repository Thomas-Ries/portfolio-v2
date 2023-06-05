<template>
    <div class="flex justify-center items-center absolute bottom-3 text-white
    lg:hidden">
    <router-link
        :to="{
          name: 'Home',
          hash: '#about'
        }"
        class="text-lg">
            En savoir plus
        </router-link>
        <svg class="animate-bounce h-4 w-4 ml-2" fill="#FFFF" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
    </div>

    <div class="hidden lg:flex justify-center items-center absolute bottom-2 right-4 text-dark">
        <router-link
        :to="{
          name: 'Home',
          hash: '#about'
        }">
            En savoir plus
        </router-link>
        <svg class="animate-bounce h-4 w-4 ml-2" fill="#000" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
    </div>

</template>