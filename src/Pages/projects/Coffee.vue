<template>

<section class="relative h-80">
    <div
    class="flex flex-col px-4 pt-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-full">
        <h1 
        class="text-bamboo text-5xl font-bold text-center">
            Café Tech Vue.js3
        </h1>
        <p class="text-gray-800 mt-3 text-center
        md:mt-2">
            Première présentation Tech devant des collègues
        </p>
    </div>
</section>

<section class="relative flex flex-col mt-0 py-12 px-4
md:flex-row md:items-start md:mt-0">

    <img
    src="../../assets/img/projects/cafe-tech.jpg"
    alt="acheter-ou"
    class="w-full object-contain
    md:w-3/5 sm:sticky sm:top-32 md:pr-4">

    <asside
    class="flex flex-col w-full mb-4
    md:px-4 md:border-l-2 md:border-gray-200">

        <div
        class="flex flex-col mt-8
        md:ml-8 md:mt-0 md:w-full md:pr-6">
            <div class="flex items-center">
                <svg fill="#CF8E55" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-4" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                <h2
                class="text-xl text-bamboo
                md:text-4xl">
                    Description du projet
                </h2>
            </div>

            <p class="text-dark mt-3
            md:mt-4">
                Au sein du pôle développement, nous sommes enouragés à faire découvrir les technologies que nous utilisons ou que nous avons rencontrés à travers des présentation.
            </p>

            <p class="text-dark mt-1
            md:mt-4">
                J'ai donc décidé de présenter le framework Vue.js3. Les améliorations et bénefices que cette dernère version apporte dans mon quotidien de développeur Front.
            </p>

            <p class="text-dark mt-1
            md:mt-4">
                Il aura notament été question, dans ma présentation, des sujets suivants :
            </p>

            <ul
            class="list-disc ml-4 mt-3">
                <li>La notion de script setup</li>
                <li>De la composition API et ses différences notoires vis à vis de la composition API</li>
                <li>La réactivité ref() revue</li>
                <li>La possibilité de bind css</li>
                <li>Qu'est-ce que des composables</li>
                <li>L'accès au DOM</li>
            </ul>
        </div>


    </asside>

    <div
    class="hidden absolute md:flex md:items-center
    md:bottom-2 md:right-4 text-dark">
        <svg class="animate-shake h-4 w-4 mr-4" fill="#000"  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <router-link
        class="cool-hover"
        to="/projets">
            Retour aux projets
        </router-link>
    </div>
</section>

</template>