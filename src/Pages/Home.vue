<template>
        <section class="relative">
            <img
            class="h-screen w-full object-cover"
            src="../assets/img/landingPage/hero.jpg" alt="road">

            <div
            class="nameHeader flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
                <h1 
                class="text-white text-5xl text-center">
                <span class="text-bamboo text-5xl font-bold">T</span>homas <span class="text-bamboo text-5xl font-bold">R</span>ies
                </h1>

                <p
                class="text-white text-xl text-center mt-2 font-light">
                    Développeur curieux & passioné 
                </p>
            </div>

        </section>

        <div class="flex justify-center mx-auto items-center">
            <ScrollDown />
        </div>

        <section
        class="flex flex-col items-center py-24
        md:px-12 md:flex-row md:justify-center">

                <img
                id="about"
                ref="targetImage"
                class="rounded-2xl h-80 w-80"
                src="../assets/img/landingPage/photo.jpg" alt="profil picture">

                <div
                class="flex flex-col items-center mt-8 px-4
                md:ml-12
                md:mt-0 md:items-start">
                    <h2
                    class="font-bold text-dark text-2xl
                    md:text-4xl">
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

        <section
        class="flex flex-col items-center py-24 bg-gunmetal 
        md:px-12 md:flex-row md:justify-center">

        <div
        class="flex flex-col
        md:items-center">
            <h2
            id="competences"
            class="font-bold text-white text-2xl text-center
            md:text-4xl">
                Mes compétences
            </h2>

            <p
            class="text-white font-light text-center px-4 mt-2
            md:w-3/5">
                Curieux des nouvelles tendances et technologies, mes compétences évoluent avec mes connaissances
            </p>
        </div>

        <div
        class="flex flex-col items-center mt-12
        md:flex-row">
            <CompetencesCard
            bgImg="ui-ux-design.jpg"
            imgTitle="Test"
            competence="Ui-UX Design"
            title="UI UX Design"
            content="Passionné par l'Ui et l'UX j'effectue une veille quotidienne sur ces sujets qui sont au coeur des applications que je développe" >
            
            <svg
            class="h-16 w-16 mt-8"
            xmlns="http://www.w3.org/2000/svg" fill="#FFFF" height="1em" viewBox="0 0 640 512"><path d="M48 48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H32C14.3 0 0 14.3 0 32V136c0 13.3 10.7 24 24 24s24-10.7 24-24V48zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80-32a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464V376c0-13.3-10.7-24-24-24s-24 10.7-24 24V480c0 17.7 14.3 32 32 32H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H608c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H504z"/></svg>
            <!-- <img
            class="object-cover h-44 w-44
            md:h-52 md:w-52"
            src="../assets/img/competences/ui-ux-design.jpg" alt=""> -->
            </CompetencesCard>
        </div>

        </section>

</template>
    
<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { useMotion } from '@vueuse/motion';

import ScrollDown from '../components/ScrollDown.vue';
import DownloadCv from '../components/button/DownloadCv.vue';
import ContactMe from '../components/button/ContactMe.vue';
import CompetencesCard from "../components/competences/competencesCard.vue";

onMounted(() => {
    gsap.from(".nameHeader", {
        opacity: 0, 
        y: -100, 
        duration: 2
    });
});

const targetImage = ref();
useMotion(targetImage, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 600,
            type: 'keyframes',
            ease: 'easeIn',
        },
    }
})
</script>