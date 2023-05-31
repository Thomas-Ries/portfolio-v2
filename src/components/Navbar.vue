<template>
  <header class="z-10 drop-shadow-xl bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 fixed w-full">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>        
        <router-link to="/" >
          <h1 class="text-dark text-xl font-bold">
          <span class="text-bamboo text-2xl font-bold">T</span>homas <span class="text-bamboo text-2xl font-bold">R</span>ies</h1>
        </router-link>
      </div>
      <div class="sm:hidden">
        <button
        @click="isNavbarOpen = !isNavbarOpen"
        type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class=" h-6 w-6" viewBox="0 0 24 24">
            <path v-if="isNavbarOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isNavbarOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav
    :class="isNavbarOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <router-link
        to="/"
        class="mt-1 block px-2 py-1 text-dark rounded sm:mt-0 sm:ml-2 cool-hover">
          Accueil
        </router-link>
        <router-link
        :to="{
          name: 'Home',
          hash: '#about'
        }"
        class="mt-1 block px-2 py-1 text-dark rounded sm:mt-0 sm:ml-2 cool-hover">
          A Propos
        </router-link>

        <router-link
        to="/experiences"
        class="mt-1 block px-2 py-1 text-dark rounded sm:mt-0 sm:ml-2 cool-hover">
          Experiences
        </router-link>
        <router-link
        to="/blog"
        class="mt-1 block px-2 py-1 text-dark rounded sm:mt-0 sm:ml-2 cool-hover">
          Blog
        </router-link>
          <a
          href="mailto:thomasries.dev@gmail.com"
          class="mt-1 block px-2 py-1 text-dark rounded sm:mt-0 sm:ml-2 cool-hover">
            Me contacter
          </a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

let isNavbarOpen = ref(false);
</script>