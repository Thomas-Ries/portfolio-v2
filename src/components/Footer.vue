<template>
    <footer class="bg-grey">
        <div class="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
            <div class="flex justify-center">
                <router-link to="/" >
                    <h2 class="text-dark text-xl font-bold">
                <span class="text-bamboo text-2xl font-bold">T</span>homas <span class="text-bamboo text-2xl font-bold">R</span>ies</h2>
                </router-link>
            </div>

            <p class="mx-auto mt-1 max-w-md text-center leading-relaxed text-gray-500">
                Développeur Web Front-End
            </p>

            <nav aria-label="Footer Nav" class="mt-12">
            <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                    <router-link
                    to="/"
                    class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                        Accueil
                    </router-link>
                </li>

                <li>
                    <router-link
                    to="/experiences"
                    class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                        Experiences
                    </router-link>
                </li>

                <li>
                    <router-link
                    to="/blog"
                    class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                        Blog
                    </router-link>
                </li>

                <li>
                    <a href="mailto:thomasries.dev@gmail.com"
                    class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                        Contact
                    </a>
                </li>
            </ul>
            </nav>

            <nav aria-label="Footer Nav" class="mt-4">
                <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <router-link
                        to="/"
                        class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                            Mentions Légales
                        </router-link>
                    </li>
                    <li>
                        <router-link
                        to="/"
                        class="text-gray-700 transition hover:text-gray-700/75 cool-hover">
                            Politique de confidentialité
                        </router-link>
                    </li>
                </ul>
            </nav>

            <SocialBar />

        </div>

        <p class="mx-auto mt-1 max-w-md text-center leading-relaxed text-gray-500">
               © Site réalisé par Thomas Ries - 2023
            </p>
    </footer>
</template>

<script setup>
import SocialBar from './socials/SocialBar.vue'
</script>