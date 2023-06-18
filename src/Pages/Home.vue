<template>
        <section class="relative lg:hidden">
            <img
            class="h-screen w-full object-cover"
            src="../assets/img/landingPage/landing-page.jpg" alt="landing-page">

            <div
            class="nameHeader flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
                <h1 
                class="text-white text-5xl text-center">
                <span class="text-bamboo text-5xl font-bold">T</span>homas <span class="text-bamboo text-5xl font-bold">R</span>ies
                </h1>

                <div class="flex items-center justify-center">
                    <p
                    class="text-white text-xl text-center mt-2 mr-1">
                        Développeur
                    </p>
                    <VueWriter
                    class="typing text-bamboo text-xl text-center mt-2"
                    :array="arrayTyping" />
                </div>
            </div>
        </section>

        <section
        class="relative hidden lg:flex xl:items-center bg-white">
            <img
            class="h-screen object-cover w-3/5 rounded-r-full"
            src="../assets/img/landingPage/landing-page.jpg" alt="road">

            <div
            class="nameHeader absolute top-[40%] right-0 w-2/5 flex flex-col items-center h-16">

                <h1 
                class="text-dark text-5xl text-center">
                <span class="text-bamboo text-6xl font-bold">T</span>homas <span class="text-bamboo text-6xl font-bold">R</span>ies
                </h1>

                <div class="flex items-center">
                    <p
                    class="text-dark text-2xl text-center mt-2 font-light mr-1">
                        Développeur
                    </p>
                    <VueWriter
                    class="text-bamboo text-2xl text-center mt-2"
                    :array="arrayTyping" />
                </div>

                <SocialBar
                class="socialHeader" />

            </div>
        </section>

        <div
        ref="scrollDownVisibility"
        class=" scrollDown flex justify-center mx-auto items-center">
            <ScrollDown />
        </div>

        <section
        id="about"
        class="flex flex-col items-center pt-28 pb-32 bg-white
        md:px-12 md:flex-row md:justify-center">
            
            <img
            ref="targetImage"
            class="w-80 h-80 rounded-full object-cover mb-4"
            src="../assets/img/landingPage/meAvatar.png" alt="avatar">

                <div
                class="flex flex-col items-center mt-8 px-4
                md:ml-12
                md:mt-0 md:items-start">
                    <h2
                    class="font-bold text-bamboo text-3xl tracking-wider
                    md:text-5xl">
                        A PROPOS
                    </h2>
                    <p
                    class="text-gray-500 font-light text-center
                    md:text-left">
                        Développeur curieux & passioné
                    </p>
                    
                    <p
                    class="pt-4 pb-2 px-4
                    md:px-0 md:w-96">
                    D’expériences riches et variées, je suis un développeur innovant, curieux et en constante évolution.
                    J’aime concevoir et maintenir des sites web responsive à l’aide de frameworks modernes tout en
                    accroissant mes connaissances.
                    </p>

                    <p
                    class="pb-4 px-4
                    md:px-0 md:w-96">
                    Passionné d’UI, d’UX, de design et de photographie, je
                    crée, au sein d'une entreprise du digital, des expériences utilisateurs uniques et immersives.
                    </p>



                    <div
                    class="flex flex-col items-center
                    md:flex-row">
                        <DownloadCv /> 
                        <PrimaryBlackButton
                        href="mailto:thomasries.dev@gmail.com"
                        content="Me contacter"
                        svgMail="true"
                        childClass="hover:bg-white"
                        class="md:ml-6 mt-4 md:mt-0"/> 
                    </div>

                </div>

        </section>

        <section
        id="competences"
        class="flex flex-col items-center py-24 bg-competences 
        md:px-12 md:py-44 md:justify-center">

            <div
            class="flex flex-col
            md:items-center">
                <h2
                class="font-bold text-bamboo text-3xl text-center tracking-wider	
                md:text-5xl">
                    MES COMPETENCES GENERALES
                </h2>

                <p
                class="text-white font-light text-center px-4 mt-2
                md:w-3/5
                lg:text-xl">
                    Passionné de nouvelles tendances et technologies, j'applique quotidiennement mes découvertes à mon travail
                </p>
            </div>

            <div
            ref="targetGeneralCompetences"
            class="flex flex-col items-center
            xl:flex-row xl:mt-20">
                <CompetencesCard
                class="xl:mr-8"
                title="Développement Web"
                content="Engagé pleinement dans l'univers du développement web afin de pouvoir je pense, crée et développe des sites orientés design, fonctionnalités et accessibilité." >
                    <img
                    class="object-cover h-64 w-full"
                    src="../assets/img/competences/web-dev.jpg" alt="developpement web">
                </CompetencesCard>

                <CompetencesCard
                class="xl:mr-8"
                title="UI UX Design"
                content="Passionné par l'UI et l'UX, j'effectue une veille régulière sur ces sujets afin de pouvoir être force de propositions et comprendre ces enjeux déterminants dans la conception de solutions web." >
                    <img
                    class="object-cover h-64 w-full"
                    src="../assets/img/competences/ui-ux-design.jpg" alt="">
                </CompetencesCard>

                <CompetencesCard
                title="Vente & Négociation"
                content="Fort de nombreuses années d'expériences en vente et en négociations, j'ai acquis de solides compétences qui me permettent d'être rapidement autonome." >
                    <img
                    class="object-cover h-64 w-full"
                    src="../assets/img/competences/negociation.jpg" alt="ventes et négociations">
                </CompetencesCard>

            </div>

            <div
            class="flex flex-col mt-20
            md:items-center md:mt-48">
                <h2
                class="font-bold text-bamboo text-3xl text-center tracking-wider	
                md:text-5xl">
                    MES COMPETENCES TECHNIQUES
                </h2>
            </div>

            <div
            ref="targetTechCompetences"
            class="flex items-center mt-8">
                <TechCompetences/>
            </div>

        </section>

</template>
    
<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { useMotion } from '@vueuse/motion';
import VueWriter from 'vue-writer'

import ScrollDown from '../components/ScrollDown.vue';
import DownloadCv from '../components/button/DownloadCv.vue';
import PrimaryBlackButton from '../components/button/PrimaryBlackButton.vue';
import CompetencesCard from "../components/competences/competencesCard.vue";
import TechCompetences from "../components/competences/TechCompetences.vue";
import SocialBar from '../components/socials/SocialBar.vue';

const targetImage = ref();
const targetGeneralCompetences = ref();
const targetTechCompetences = ref();
const scrollDownVisibility = ref(null);

let arrayTyping = ref(["Web", "Curieux", "Passionné", "Front-End"])

onMounted(() => {
    gsap.from(".nameHeader", {
        opacity: 0, 
        y: -200, 
        duration: 2,
    });

    gsap.from(".socialHeader", {
        opacity: 0, 
        x: 200, 
        duration: 2,
        delay: 1,
    });

    gsap.from(".scrollDown", {
        opacity: 0, 
        x: 200, 
        duration: 2,
        delay: 1,
    });

    window.addEventListener("scroll", () => {
        var curr = window.pageYOffset;

        if (curr >= 100) {
            scrollDownVisibility.value.classList.add("hidden");
        }else{
            scrollDownVisibility.value.classList.remove("hidden");
        }
    });
});

useMotion(targetImage, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 800,
            type: 'keyframes',
            ease: 'easeIn',
        },
    }
});

useMotion(targetGeneralCompetences, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 800,
            type: 'keyframes',
            ease: 'easeIn',
        },
    }
});

useMotion(targetTechCompetences, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 800,
            type: 'keyframes',
            ease: 'easeIn',
        },
    }
});
</script>