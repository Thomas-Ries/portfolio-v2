<template>
    <section class="relative">
        <img
        class="h-96 w-full object-cover opacity-70"
        src="../assets/img/experiences/experiences.jpg" alt="Expériences profesionnelles">

        <div
        class="nameHeader flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
            <h1 
            class="text-white text-5xl text-center">
                <span class="text-bamboo text-8xl font-bold">M</span>es
                <span class="text-bamboo text-8xl font-bold">E</span>xperiences
                <span class="text-bamboo text-8xl font-bold">P</span>rofessionnelles
            </h1>
        </div>
    </section>

        
        <!-- component -->
        <section>
        <div class="bg-dark text-white py-8">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">


        <div
        class="experiencesTitle flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4">
        <p class="text-bamboo uppercase tracking-loose">
                Mes Expériences Professionnelles Significatives
        </p>
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Un parcours atypique
        </p>
        <p class="text-sm md:text-base text-gray-50 mb-4">
                Mes expériences passées me permettent aujourd'hui d'être polyvalent, curieux tout en m'offrant une vision de travail transverse où la collaboration est au coeur de mon quotidien.
        </p>

        <div
        class="flex flex-col items-center
        lg:flex-row">
                <router-link
                to="/projets"
                class="bg-transparent mr-auto hover:bg-bamboo text-bamboo hover:text-white shadow hover:shadow-lg py-2 px-4 border border-bamboo hover:border-transparent transition-all duration-[550ms] ease-out">
                        Découvrir mes projets
                </router-link>

                <button
                class="group mt-2 relative bg-bamboo mr-auto hover:bg-transparent text-white hover:text-bamboo shadow hover:shadow-lg py-2 px-4 border border-bamboo hover:border-bamboo transition-all duration-[550ms] ease-out
                lg:mt-0">
                        <a
                        download
                        href="../../public/cv/CV-Thomas_Ries.pdf"
                        class="relative text-white group-hover:text-bamboo flex items-center px-2">
                                Télécharger mon cv
                        </a>
                </button>
        </div>

        </div>


        <div class="timeline ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full mt-8 lg:mt-0">
                <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 border-bamboo absolute h-full border" style="right: 50%; border: 2px solid #CF8E55; border-radius: 1%;"></div>
                <div class="border-2-2 border-bamboo absolute h-full border" style="left: 50%; border: 2px solid #CF8E55; border-radius: 1%;"></div>

                        <TimelineCard
                        childClass="left-timeline flex-row-reverse"
                        date="03/05/2021 - Aujourd'hui"
                        job-title="Développeur Front-End"
                        company="Plus que Pro"
                        content="En charge de la réflexion, création et maintenance de sites Internet, d’outils internes et externes. Je prends
                        également part aux décisions technologiques relatives au Front. En relation étroite avec le service Création, l’enjeu
                        de l’UI et UX des sites est au coeur de nos échanges"
                        />

                        <TimelineCard
                        childClass="right-timeline"
                        textAlign="text-left"
                        date="Février 2021 - Mai 2021"
                        job-title="Webmaster projet digital"
                        company="Crédit Agricole Alsace Vosges"
                        content="Stage effectuée dans le cadre de l’obtention de mon diplôme de Développeur au sein du service Projets Digital."
                        />

                        <TimelineCard
                        childClass="left-timeline flex-row-reverse"
                        date="10 ans d'expériences"
                        job-title="Conseiller Bancaire"
                        company="Banque Kolb / Banque Populaire d'Alsace"
                        content="Conseils & ventes de produits et servces bancaires mais aussi de solutions financières et d'assurances. Accompagnement des clients dans leurs projets de vie"
                        />

                        <TimelineCard
                        childClass="right-timeline"
                        textAlign="text-left"
                        date="2 ans d'expériences"
                        job-title="Dirigeant"
                        company="L'Atelier du Barbu"
                        content="Cuisinier à domicile / Bloggeur alimentation (publié)"
                        />

                        <TimelineCard
                        childClass="left-timeline flex-row-reverse"
                        date="1 an d'expérience"
                        job-title="Co-Dirigeant & Associé / Chef"
                        company="L'Eden Sans Gluten"
                        content="En charge de la communication externe et d'une partie du personnel, chef de cuisine au sein d'un restaurant"
                        />

                </div>
                <WorkSvg />
        </div>
        </div>
        </div>
        </div>
        </section>
        

</template>
    
<script setup>
import gsap from "gsap";
import { onMounted } from "vue";

import WorkSvg from '../assets/svg/experiences/WorkSvg.vue';
import TimelineCard from '../components/experiences/TimelineCard.vue';

onMounted(() => {
    gsap.from(".experiencesTitle", {
        opacity: 0, 
        y: -100, 
        duration: 1.5
    });

    gsap.from(".timeline", {
        opacity: 0, 
        x: 100, 
        duration: 1.5,
        delay: 1,
    });
});
</script>