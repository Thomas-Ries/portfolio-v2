# Portfolio V2

## Informations

Ce projet constitue mon nouveau portfolio -> Encore en cours de développement

## Date estimée de mise en prod

Version 1.0.0 => 31/08/2023

## Project setup

### Pour setup le projet

```bash
- git clone depuis la branche master
- git checkout -b nom_de_la_branche
- npm install
```

### Pour lancer le projet quotidiennement

A la racine du projet

```bash
- cd project
- npm run dev
```

### Liens utiles TEST

- Url en localhost : via Go Live de VSC

### Pour installer des dépendances

A la racine du terminal

```bash
- npm install dependance
```

## Languages utilisés en Front

- HTML 5
- CSS 3
- JavaScript

## Framework utilisés en Front

- Vite
- Vuejs 3 en script setup via composition API
- Vue Router 4
- Pinia
- Tailwind css

## Dépendances installées

- **Vue Star Rating** =    Système de notation via étoiles => Webview : *resources/js/Pages/Profile/Opinion/Index.vue*
- **Vue Qr Code** =        Générateur de QRCode pour permettre la visualisation d'une carte de visite => Webview : *resources/js/Pages/Profile/VisitCard.vue*
- **LibPhoneNumber** =     Dropdown pour sélection d'indicatif => Webview : *resources/js/Pages/Profile/PersonalInformations.vue* && *resources/js/Pages/Profile/UpdatePersonalInformations.vue*

---

## Documentations utiles

- <https://inertiajs.com/>
- <https://vuejs.org/guide/introduction.htm>l (Attention, prendre la doc Vue3 et regarder la composition API via script setup)
- <https://github.com/craigh411/vue-star-rating>
- <https://github.com/fengyuanchen/vue-qrcode>
- <https://quickchart.io/documentation/vcard-qr-codes/> => v-card qr code expliqué
- <https://louismazel.github.io/maz-ui-3/components/maz-phone-number-input>

## Fichier principaux

Le projet est composé principalement sous forme de components afin de customiser rapidement les différentes vues et élements intégrés.
Tout est injecté depuis un `<slot></slot>` au sein du layout Default => *resources/js/Layouts/DefaultLayout.vue*

Les **vues** se trouvent dans : **ressources/js/pages/**

Les **components** se trouvent dans : **ressources/js/components/** et sont divisés en sous dossiers pour garder une architecture rapidement et facilement compréhensible.

Les **composables** se trouvent dans : **ressources/js/composables** et sont découpés vis-à-vis des fonctions JS qu'ils exécutent. ***Le passage des dates sous format FR se fait via un composable afin de limiter la place prise par le JSON au sein d'une vue***

=> Un composable est un bout de code JS découpé de la balise script qui lui permet d'être alors importé dans les vues où il est nécessaire. Evite les redondances de code, les soucis de mixins et de props

---
