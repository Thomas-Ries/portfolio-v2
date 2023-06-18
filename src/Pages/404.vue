<template>

<section class="relative h-screen">
    <div
    class="w-full pt-12 flex flex-col items-center absolute 
    md:flex-row md:pt-36 md:w-4/5 md:pb-12 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">

        <NotFound/>

        <div
        class="flex flex-col justify-center items-center mt-4 text-center">
            <h1
            class="text-3xl text-bamboo"> Vous êtes perdu ?
            </h1>

            <p
            class="text-xl mt-12">
                Hum ! Il n'y a pas grand chose à découvrir de ce côté du site. Pour continuer à naviguer, rendez-vous à l'accueil.
            </p>

            <button
            class="group relative h-12 w-40 mx-auto rounded mt-12 border border-black bg-black px-4 transition-all duration-[550ms] ease-out
            md:hover:bg-white md:hover:text-dark">
                <router-link
                to="/"
                class="mt-1 block px-2 text-white md:hover:text-dark">
                Accueil
                </router-link>
            </button>
        </div>
    </div>

</section>

</template>

<script setup>
import NotFound from '../assets/svg/NotFound.vue'
</script>