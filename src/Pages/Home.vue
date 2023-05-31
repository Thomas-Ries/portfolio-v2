<template>
        <section class="relative">
            <img
            class="h-screen w-full object-cover"
            src="../assets/img/landingPage/hero.jpg" alt="road">
        </section>

        <div class="flex justify-center mx-auto items-center">
            <ScrollDown />
        </div>

        <section
        class="flex flex-col items-center py-24
        md:px-12 md:flex-row md:justify-center">

                <img
                id="about"
                class="rounded-2xl h-80 w-80"
                src="../assets/img/landingPage/photo.jpg" alt="profil picture">

                <div
                class="flex flex-col items-center mt-8 px-4
                md:ml-12
                md:mt-0 md:items-start">
                    <h2
                    class="font-bold text-dark text-2xl">
                        A Propos
                    </h2>
                    <p
                    class="text-gray-500 font-light text-center
                    md:text-left">
                        Développeur curieux & passioné
                    </p>
                    
                    <p
                    class="py-4 px-4
                    md:px-0 md:w-96">
                    D’expériences riches et variées, je suis un développeur innovant, curieux et en constante évolution.
                    J’aime concevoir et maintenir des sites web responsive à l’aide de frameworks modernes tout en
                    poussant mes connaissances à s’étendre. Passionné d’UI, d’UX, de design et de photographies, je
                    crée des expériences utilisateurs uniques et immersives.
                    </p>

                    <div
                    class="flex flex-col items-center
                    md:flex-row">
                        <DownloadCv /> 
                        <ContactMe
                        class="md:ml-6 mt-4 md:mt-0"/> 
                    </div>

                </div>

        </section>

</template>
    
<script setup>
import ScrollDown from '../components/ScrollDown.vue';
import DownloadCv from '../components/button/DownloadCv.vue';
import ContactMe from '../components/button/ContactMe.vue'
</script>