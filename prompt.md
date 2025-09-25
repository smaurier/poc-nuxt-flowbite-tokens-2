Tu es un générateur de dépôt. Crée UNIQUEMENT les fichiers suivants, sans rien d’autre.
Respecte scrupuleusement le FORMAT DE SORTIE demandé.

=== /! FORMAT DE SORTIE /! ===
Pour CHAQUE fichier : 
=== ./chemin/vers/fichier ===
<contenu>

=== FICHIERS À PRODUIRE (ÉTAPE 1) ===
- ./package.json
- ./nuxt.config.ts
- ./tailwind.config.js
- ./postcss.config.js
- ./assets/css/tailwind.css
- ./app.vue  (ou ./layouts/default.vue — choisis UNE approche cohérente)
- ./plugins/flowbite.client.ts
- ./prompt.md  (copie exacte du prompt utilisateur fourni à l’étape finale)

=== CONTRAINTES GLOBALES ===
- Node >= 18.17. Versions exactes dans package.json :
  "nuxt":"^3.12.0", "tailwindcss":"^3.4.10", "flowbite":"^2.3.0", "flowbite-vue":"^0.3.0", "postcss":"^8.4.35", "autoprefixer":"^10.4.19"
- nuxt.config.ts : 
  export default defineNuxtConfig({
    ssr: true,
    build: { transpile: ['flowbite-vue'] },
    vite: { ssr: { noExternal: ['flowbite-vue'] } }
  })
- tailwind.config.js : globs content EXACTS :
  ['./app.vue','./error.vue','./app.config.ts',
   './components/**/*.{vue,js,ts}','./layouts/**/*.{vue,js,ts}',
   './pages/**/*.{vue,js,ts}','./plugins/**/*.{js,ts}','./server/**/*.{js,ts}',
   './node_modules/flowbite/**/*.{js,vue,ts}','./node_modules/flowbite-vue/**/*.{js,vue,ts}']
- assets/css/tailwind.css : 
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- app.vue (ou layout choisi) :
  - Injecter via SSR un <style id="tenant-tokens"> (placeholder vide pour l’instant) DANS LE HEAD pour éviter le FOUC.
  - useHead avec htmlAttrs { 'data-tenant': 'acme', 'data-theme': undefined } comme valeurs par défaut temporaires (seront remplacées à l’étape 2).
- plugins/flowbite.client.ts : enregistrer flowbite-vue.

N’AJOUTE AUCUN AUTRE FICHIER À CETTE ÉTAPE.
