# R&D for portfolio V2

## Modals
This is the component
```javascript
<template>
    <div 
    class="modal">
        <div
        v-if="openModal"
        class="absolute bg-black/40 backdrop-blur-sm inset-0 z-40">
        </div>

        <div
        v-if="openModal"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 z-50
        flex justify-center items-center">
            <div
            class="relative mx-auto w-80 max-w-2xl">
                <div
                class="bg-white w-full py-3 px-2 rounded-2xl">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    openModal: Boolean,
});
</script>
```

___

This is the template to use the modal in action

```javascript
<template>

    <div
    @click="deleteAccountModal = !deleteAccountModal"
    class="rounded-md bg-white mb-2 py-3 pl-4 mt-3 flex items-center font-semibold">
        <svg
        class="mr-2"
        xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
            <path d="M12 15.0003C11.8022 15.0003 11.6088 15.0589 11.4444 15.1688C11.2799 15.2787 11.1518 15.4349 11.0761 15.6176C11.0004 15.8003 10.9806 16.0014 11.0192 16.1954C11.0578 16.3893 11.153 16.5675 11.2929 16.7074C11.4327 16.8472 11.6109 16.9425 11.8049 16.9811C11.9989 17.0196 12.1999 16.9998 12.3827 16.9242C12.5654 16.8485 12.7216 16.7203 12.8314 16.5558C12.9413 16.3914 $/>
        </svg>
        Supprimer mon compte
    </div>


<CenterSlotBlurModal
:openModal="confirmDeleteAccountModal">
    <svg
    @click="confirmDeleteAccountModal = !confirmDeleteAccountModal"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="w-6 h-6 absolute top-4 right-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

    <img
    class="mx-auto"
    src="../../../../img/delete-basket.png"
    alt="Confirmation de suppression de compte">

    <div
    class="flex flex-col px-4 pb-8">
        <h3
        class="text-center mx-auto font-semibold mt-8 text-xl">
            À très vite !
        </h3>

        <p class="text-disabledText mt-4 text-sm text-center">
            Vous pouvez annuler l'opération en vous reconnectant à votre compte dans un délais de 30 jours. 
        </p>

        <p class="text-disabledText mt-4 text-sm text-center">
            À l'expiration de ce délai, votre compte et toutes vos données seront définitivement supprimées et nous ne pourrez plus y accéder 
        </p>
    </div>
</CenterSlotBlurModal>
</template>

<script setup>
import { ref } from 'vue';
import CenterSlotBlurModal from '@/Components/modals/CenterSlotBlurModal.vue';

let deleteAccountModal = ref(false);
</script>
```

## Tailwind config file
```javascript
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Globals
                'primary': '#FF7500',
                'secondary': '#707070',
                'tertiary': '#000',
                'dark': '#000',
                'dark-input': '#24282C',
                'red': 'red',
                'red-light': '#F04438',
                'disabledText': '#7B8085',
                'password-green': '#12B76A',
                'error': '#F04438',

                // Texts
                'dark-titles': '#24282C',

                // Backgrounds
                'primary-bg': '#FFF2E5',
                'disabledBtn' : '#EDEDED',
                'custom-grey': '#707070',
                'custom-light-grey': '#E2E2E2',
                'custom-bg': '#F0F0F0',
                'custom-light--grey': '#E5E5E5',
                'placeholder': '#F9F9F9',
                'error-light': '#FEF3F2',

                // Borders
                'border-top--grey': '#F0F0F0',
                'border-bottom--grey': '#F0F0F0',
                'border-bottom--secondary': '#707070',
            },
            backgroundImage: {
                'primary-gradient': "linear-gradient(180deg, #FFFFFF 0%, #FDFDFD 18.75%, #FEF9F6 35.94%, #FFF1E6 100%)",
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
```