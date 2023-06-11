<template>
    <section class="relative">
        <img
        class="h-96 w-full object-cover opacity-70"
        src="../assets/img/projects/projects.jpg" alt="Mes Projets">

        <div
        class="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
            <h1 
            class="text-white text-5xl text-center">
                <span class="text-bamboo text-8xl font-bold">M</span>es
                <span class="text-bamboo text-8xl font-bold">P</span>rojets
            </h1>
        </div>
    </section>

    <section
    class="mb-18 px-4">
        <h2 class="text-center text-5xl mt-24 mb-8
        md:mb-4">
            Mes derniers projets
        </h2>

        <p
        class="text-gray-500 font-light text-center mb-8
        md:w-1/3 md:mx-auto">
            Je travaille pour une entreprise du digital basée en Alsace. Je crée au quotidien des sites, applications et outils nécessaires à l'entreprise, à ses business unit et à ses partenaires.
        </p>
    </section>

    <section class="flex flex-col justify-content items-center py-8 mb-8
    md:flex-row md:items-center md:justify-between md:flex-wrap md:w-5/6 md:mx-auto">

        <Card
        title="Acheter-ou-shop"
        content="Création d'une marketplace régionale afin d'offrir une visibilité à tous les commerçants locaux."
        :route="'marketplace'">
            <img src="../assets/img/projects/acheter-ou.png" alt="acheter-ou"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="PqP-Regie"
        content="Site de la régie de Plus que Pro"
        :route="'regie'">
            <img src="../assets/img/projects/pqp-regie.png" alt="pqp-regie"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Projet interne"
        content="Outil d'aide à la vente pour franchisés en PWA (Progressive Web App)"
        :route="'sns'">
            <img src="../assets/img/projects/pwa.jpg" alt="projet interne pwa"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Application de recommandations d'entreprises"
        content="Application permettant de recommander des entreprise"
        :route="'club'">
            <img src="../assets/img/projects/companies-reco.jpg" alt="projet interne recommandation"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Projet interne"
        content="Création d'un Page Builder à destination des intégrateurs"
        :route="'page-builder'">
            <img src="../assets/img/projects/page-builder.jpg" alt="projet interne page-builder"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Projet interne"
        content="Développement d'un outil orienté SEO à destination de nos clients"
        :route="'smartcampaign'">
            <img src="../assets/img/projects/seo.jpg" alt="projet interne"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Network Plus que Pro"
        content="Intégrations et développement de pages & résolutions de bugs sur le site dédié aux futurs partenaires"
        :route="'network'">
            <img src="../assets/img/projects/network.jpg" alt="Network plus que pro"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Rejoindre Plus que Pro"
        content="Intégration et développement de pages / Création de custom post type / résolution de bugs sur le site dédié à la promotion de la marque"
        :route="'rejoindre'">
            <img src="../assets/img/projects/rejoindre.jpg" alt="Rejoindre Plus que Pro"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        title="Café Tech"
        content="Présentation de Vue3 et du script setup avec option API"
        :route="'coffee'">
            <img src="../assets/img/projects/cafe-tech.jpg" alt="présentation tech"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        :route="'portfolio-first'"
        title="Portfolio 2021"
        content="Découvrir mon premier portfolio réalisé en sorti de cursus Epitech">
            <img src="../assets/img/projects/portfolio-v1.jpg" alt="portfolio 2021"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <Card
        class="mr-4"
        :route="'portfolio-second'"
        title="Portfolio 2023"
        content="Découvrir en détail mon portfolio actuel">
            <img src="../assets/img/projects/portfolio-2023.jpg" alt="portfolio 2023"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </Card>

        <CardExternalLink
        class="mr-4"
        href="https://github.com/Thomas-Ries"
        title="Projets personnels"
        content="Accès vers mon Github personnel où je commit dès que je peux"
        titleCta="Accès à mon Github">
            <img src="../assets/img/projects/github.jpg" alt="Github"
            class="absolute inset-0 object-cover w-full h-full group-hover:opacity-100 transition duration-500 ease-in-out group-hover:blur-sm rounded-t-md">
        </CardExternalLink>

    </section>

</template>
    
<script setup>
import Card from '../components/projects/Card.vue';
import CardExternalLink from '../components/projects/CardExternalLink.vue';
</script>