<template>
    <div
    v-if="loading"
    class="flex flex-col items-center justify-center">
        <RotateLoader />
        Chargement...
    </div>

    <div 
    v-for="item in mediumData" :key="item.id"
    class="max-w-sm w-80 flex flex-col mx-auto
    lg:max-w-full lg:flex lg:w-96
    border-gray-200 border-b-2 last:border-0 py-12">

        <div class="flex items-center">
            <img
            src="../../assets/img/landingPage/photo.jpg"
            class="h-8 w-8 rounded-full" alt="profil">

            <p class="text-sm text-black flex items-center ml-2 mr-1">
                {{ item.author }} 
            </p>
                <span> · </span>
            <p class="text-sm text-gray-500 flex items-center ml-1">
                {{ moment(item.pubDate).startOf('hour').fromNow() }}
            </p>
        </div>

        <div class="flex items-start justify-between mt-2">
            <div class="flex flex-col lg:mr-4">
                <a
                :href="item.link"
                target="_blank"
                class="text-gray-900 font-bold text-xl mb-2">
                    {{ item.title }}
                </a>
                <div class="flex items-center mt-2">
                    <span class="inline-flex w-max items-center rounded-xl bg-gray-100 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">
                        {{ item.categories[0] }}
                    </span>
                    <span class="inline-flex w-max items-center rounded-xl bg-gray-100 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10 ml-2">
                        {{ item.categories[1] }}
                    </span>
                </div>
            </div>
            <img
            class="object-cover h-24 w-24"
            :src="item.thumbnail"
            :alt="item.title"/>
        </div>

        <button
        class="group relative h-10 w-max border border-black bg-black px-4 py-2 hover:bg-white transition-all duration-[550ms] ease-out mt-5">
        <a
        :href="item.link"
        target="_blank"
        class="flex items-center mr-4 text-white group-hover:text-black">

            <svg
            class="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
                Lire l'article
          </a>
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { momentFr } from '../../composables/moment/momentFr';
import RotateLoader from '../../components/loader/RotateLoader.vue';

import axios from 'axios';
import moment from 'moment';

momentFr();
moment.locale('fr');

const loading = ref(true);
let mediumData = ref([]);

axios
.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thomasries')
.then((response) => {
    mediumData.value = response.data.items;
    loading.value = false;
})
.catch((error) => {
    console.log(error)
})
</script>