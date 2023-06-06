<template>
    <section class="relative">
        <img
        class="h-96 w-full object-cover opacity-70"
        src="../assets/img/medium/medium.jpg" alt="blog">

        <div
        class="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
            <h1 
            class="text-white text-5xl text-center">
                <span class="text-bamboo text-8xl font-bold">B</span>log
            </h1>
        </div>
    </section>

    <section
    class="mb-18">
        <h2 class="text-center text-5xl mt-24 mb-8
        md:mb-4">
            Mes derniers articles
        </h2>

        <p
        class="text-gray-500 font-light text-center mb-8 px-4
        md:w-1/3 md:mx-auto">
            Quand le temps m'est offert et que l'inspiration est au rendez-vous, j'écris sur Medium des pensées relatives à mon quotidien de Développeur.
        </p>
    </section>

    <section
    class="xl:flex xl:justify-center">
    
        <div class="flex flex-col pb-12">
            <ArticleCard />
        </div>

        <aside class="asideFollow hidden right-14 xl:block xl:inset-y-0 2xl:right-32 xl:top-[70%] xl:w-96 xl:absolute xl:h-screen xl:border-gray-100 xl:border-l-2 pl-8">
            <div class="sticky top-20">
                <h2 class="text-2xl text-center"> Me suivre sur les réseaux</h2>
                <p
                class="text-gray-500 text-center font-light mt-4 mb-2">
                    Vous désirez découvrir plus en détail mes écrits, parcourir mon Github ou me suivre sur différents réseaux sociaux ?
                </p>

                <p
                class="text-gray-500 text-center font-light mb-8">
                    N'hésitez pas et bonne lecture !
                </p>

                <SocialBar />

                <h2 class="text-2xl text-center mt-20">
                    Travailler ensemble
                </h2>

                <p
                class="text-gray-500 text-center font-light mt-4">
                    Vous désirez me contacter afin d'améliorer votre site Internet, revisiter votre UI/UX ou encore pour des conseils inhérent à votre image sur le web ?
                </p>

                <div class="flex justify-center mt-8">
                    <PrimaryBlackButton
                    href="mailto:thomasries.dev@gmail.com"
                    content="Me contacter"
                    :svgMail=true
                    childClass="hover:bg-white"
                    class="md:ml-6 mt-4 md:mt-0"/> 
                </div>
            </div>
        </aside>
    </section>

</template>
    
<script setup>
import gsap from "gsap";
import { onMounted } from "vue";

import ArticleCard from '../components/blog/ArticleCard.vue';
import SocialBar from '../components/socials/SocialBar.vue';
import PrimaryBlackButton from '../components/button/PrimaryBlackButton.vue';

onMounted(() => {
    gsap.from(".asideFollow", {
        opacity: 0, 
        x: 100, 
        duration: 1.5,
        delay: 2,
    });
});

</script>