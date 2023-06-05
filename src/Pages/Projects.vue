<template>
    <section class="relative">
        <img
        class="h-96 w-full object-cover opacity-70"
        src="../assets/img/projects/projects.jpg" alt="Mes Projets">

        <div
        class="nameHeader flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
            <h1 
            class="text-white text-5xl text-center">
                <span class="text-bamboo text-8xl font-bold">M</span>es
                <span class="text-bamboo text-8xl font-bold">P</span>rojets
            </h1>
        </div>
    </section>

    <section
    class="mb-18">
        <h2 class="text-center text-5xl mt-24 mb-8
        md:mb-4">
            Mes derniers projets
        </h2>

        <p
        class="text-gray-500 font-light text-center mb-8 px-4
        md:w-1/3 md:mx-auto">
            Je travaille pour une entreprise du digital basée en Alsace. Je crée au quotidien des sites, applications et outils nécessaire à l'entreprise et à ses business unit.
        </p>
    </section>

    <section class="flex flex-col justify-content items-center py-12
    md:flex-row md:items-center md:justify-between">
        <Card
        title="Acheter-ou-shop"
        content="Création d'une marketplace"
        ctaContent="En savoir plus">
            <img src="../assets/img/projects/acheter-ou.png" alt="acheter-ou">
        </Card>

        <Card
        title="PqP-Regie"
        content="Site de la régie de Plus que Pro"
        ctaContent="En savoir plus">
            <img src="../assets/img/projects/pqp-regie.png" alt="pqp-regie">
        </Card>
    </section>

</template>
    
<script setup>
import Card from '../components/projects/Card.vue';
import PrimaryBlackButton from '../components/button/PrimaryBlackButton.vue';
</script>