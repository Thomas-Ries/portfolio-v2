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

            <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                <li>
                <a
                href="https://github.com/Thomas-Ries" target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75">
                    <span class="sr-only">GitHub</span>
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"/>
                    </svg>
                </a>
            </li>

                <li>
                    <a
                    href="https://www.pinterest.fr/ries1565/"
                    target="_blank"
                    class="text-gray-700 transition hover:text-gray-700/75">
                    <span class="sr-only">Pinterest</span>
                        <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                    </a>
                </li>
            </ul>
        </div>

        <p class="mx-auto mt-1 max-w-md text-center leading-relaxed text-gray-500">
               © Site réalisé par Thomas Ries - 2023
            </p>
    </footer>
</template>