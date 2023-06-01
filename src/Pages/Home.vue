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
        id="about"
        class="flex flex-col items-center py-24 bg-grey
        md:px-12 md:flex-row md:justify-center">

                <img
                ref="targetImage"
                class="rounded-2xl h-80 w-80"
                src="../assets/img/landingPage/photo.jpg" alt="profil picture">

                <div
                class="flex flex-col items-center mt-8 px-4
                md:ml-12
                md:mt-0 md:items-start">
                    <h2
                    class="font-bold text-dark text-3xl tracking-wider
                    md:text-4xl">
                        A PROPOS
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
                    poussant mes connaissances à s’étendre. Passionné d’UI, d’UX, de design et de photographie, je
                    crée au sein d'une entreprise du digital, des expériences utilisateurs uniques et immersives.
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
        id="competences"
        class="flex flex-col items-center py-24 bg-dark 
        md:px-12 md:justify-center">

        <div
        class="flex flex-col
        md:items-center">
            <h2
            class="font-bold text-white text-3xl text-center tracking-wider	
            md:text-4xl">
                MES COMPETENCES GENERALES
            </h2>

            <p
            class="text-white font-light text-center px-4 mt-2
            md:w-3/5">
                Curieux des nouvelles tendances et technologies, mes compétences évoluent avec mes connaissances
            </p>
        </div>

        <div
        class="flex flex-col items-center
        xl:flex-row xl:mt-12">
            <CompetencesCard
            class="xl:mr-8"
            title="UI UX Design"
            content="Passionné par l'UI et l'UX, j'effectue une veille régulière sur ces sujets afin de pouvoir être force de propositions et comprendre ces enjeux déterminants dans la conception de solutions web." >
                <img
                class="object-cover h-64 w-full"
                src="../assets/img/competences/ui-ux-design.jpg" alt="">
            </CompetencesCard>

            <CompetencesCard
            class="xl:mr-8"
            title="Développement Web"
            content="Je me suis engagé pleinement dans l'univers du développement web afin de pouvoir penser, créer et développer des sites orientés design, fonctionnabilités et accessibilités." >
                <img
                class="object-cover h-64 w-full"
                src="../assets/img/competences/web-dev.jpg" alt="developpement web">
            </CompetencesCard>

            <CompetencesCard
            title="Ventes & Négociations"
            content="Fort de nombreuses années d'expériences en ventes et en négociations, j'ai acquis de solides compétences dans ce domaine me permettant d'être rapidement autonome." >
                <img
                class="object-cover h-64 w-full"
                src="../assets/img/competences/negociation.jpg" alt="ventes et négociations">
            </CompetencesCard>

        </div>

        <div
        class="flex flex-col mt-20
        md:items-center md:mt-32">
            <h2
            class="font-bold text-white text-3xl text-center tracking-wider	
            md:text-4xl">
                MES COMPETENCES TECHNIQUES
            </h2>

            <p
            class="text-white font-light text-center px-4 mt-2
            md:w-3/5">
                En tant que Développeur, je suis ammené à travailler avec certains outils et languages sur lesquels j'acroît mes compétences au quotidien.
            </p>
        </div>

        <div class="flex items-center mt-8">
            <TechCompetences/>
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
import TechCompetences from "../components/competences/TechCompetences.vue";

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