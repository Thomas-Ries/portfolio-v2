<template>
        <section class="relative">
            <img
            class="h-screen w-full object-cover"
            src="../assets/img/landingPage/hero.jpg" alt="road">
        </section>

        <div class="flex justify-center mx-auto items-center">
            <ScrollDown />
        </div>

        <section
        class="flex flex-col items-center py-24
            md:px-12 md:flex-row md:justify-center">

                <img
                class="rounded-2xl h-80 w-80"
                src="../assets/img/landingPage/photo.jpg" alt="profil picture">

                <div
                class="flex flex-col items-center mt-8 px-4
                md:ml-12
                md:mt-0 md:items-start">
                    <h2
                    class="font-bold text-dark text-2xl">
                        A Propos
                    </h2>
                    <p
                    class="text-gray-500 font-light text-center
                    md:text-left">
                        Développeur curieux & passioné
                    </p>
                    
                    <p
                    class="py-8 px-4
                    md:px-0 md:w-96">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eius voluptatem, exercitationem ea iusto maiores rerum dicta nesciunt culpa maxime iure aperiam sed fugit commodi fugiat recusandae. Voluptate, cumque reiciendis!
                    Autem ea dolore facere iste consequuntur in illo vel asperiores, animi, placeat facilis commodi quae quia ipsa magni natus debitis quidem suscipit? Similique laborum quod soluta. Blanditiis, nemo. Qui, quia!
                    </p>

                </div>

        </section>

</template>
    
<script setup>
import ScrollDown from '../components/ScrollDown.vue';
</script>