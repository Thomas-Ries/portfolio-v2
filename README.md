# Portfolio V2

## Informations

Ce projet constitue mon nouveau portfolio

## Date estimée de mise en prod

Version 1.0.0 => 18/06/2023

## Prochaines features

Version 1.1.0 => Mise en place de transitions entre pages via Vue Router

## Project setup

### Pour setup le projet

```bash
- git clone depuis la branche main
- git checkout -b nom_de_la_branche
- npm install
```

### Pour lancer le projet quotidiennement

A la racine du projet

```bash
- cd project
- npm run dev
```

### Pour build le projet en prod

A la racine du projet

```bash
- cd project
- npm run build
```

### Liens utiles

- Url en localhost : via npm run dev

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

- **Moment JS** => Via composable afin d'avoir un rendu Fr dans la partie Blog su site

---

## Fichier principaux

Le projet est composé principalement sous forme de components afin de customiser rapidement les différentes vues et élements intégrés.
Tout est injecté depuis un `<slot></slot>` au sein du layout Default => *resources/js/Layouts/DefaultLayout.vue*

Les **vues** se trouvent dans : **src/Pages/**

Les **components** se trouvent dans : **src/components/** et sont divisés en sous dossiers pour garder une architecture rapidement et facilement compréhensible.

Les **composables** se trouvent dans : **src/composables** et sont découpés vis-à-vis des fonctions JS qu'ils exécutent. ***Le passage des dates sous format FR se fait via un composable afin de limiter la place prise par le JSON au sein d'une vue***

=> Un composable est un bout de code JS découpé de la balise script qui lui permet d'être alors importé dans les vues où il est nécessaire. Evite les redondances de code, les soucis de mixins et de props

Les **routes** se trouvent dans : **src/router/routes.js** et permettent de naviguer au sein de l'application. Le fichier principal se trouve au sein de la même racine mais sous ***index.js***
