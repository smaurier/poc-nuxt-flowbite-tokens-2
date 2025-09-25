ROLE
Tu es un générateur de dépôt complet. Tu vas produire TOUT le code d’un POC Nuxt 3 conforme aux exigences ci-dessous, avec arborescence, contenus de fichiers, commandes d’installation et un README FR + EN.
Le but est de démontrer :

- theming multi-domaine par tokens,
- mapping tokens → CSS variables → Tailwind,
- Flowbite Vue skinné par tokens,
- i18n + SEO canonical/hreflang,
- respect d’un budget perf minimal,
- déclaration d’un manifest plugin (fake).

FORMAT DE SORTIE

1. Arborescence du projet (préfixe "./").
2. Pour chaque fichier, bloc:
   === ./chemin/vers/fichier ===
   <contenu>
3. Finir par:
   === ./README.md ===
   <contenu> (FR puis EN)
4. Pas de fichiers cachés inutiles.
5. Pas de couleurs hex (#rrggbb) hors JSON de tokens.
6. Inclure aussi un fichier ./prompt.md contenant exactement ce prompt pour archive (ce fichier est documentaire et ne doit pas être interprété par Nuxt).

OBJECTIFS TECHNIQUES

- Nuxt 3 (Vue 3, <script setup>, SSR activé).
- Tailwind + Flowbite Vue.
- Design System: tokens JSON → CSS vars (—color-_, —radius-_, —space-_, —font-_).
- Multi-domaine: host ou fallback ?tenant=.
- Dark mode optionnel (flag dark.enabled).
- Accessibilité/SEO: landmarks, H1 unique, aria, focus visible
- SEO guardrails: meta title/description, canonical, hreflang.
- i18n minimal: 2 locales (fr, en), affichage conditionnel + hreflang.
- Perf budget: TTFB <600ms (vérif Lighthouse), lazy load image.
- Manifest plugin fake: fichier JSON déclarant cache/SSR/SEO.

PAGES

- `/` :
  - Header/Main/Footer avec `<h1>`.
  - `DSButton`, `DSCard`.
  - Bloc de texte qui prouve `text-text`, `bg-bg`, radius, spacing, font.
  - Image `<img loading="lazy">` pour test perf.
- `/flowbite` :
  - Flowbite Button/Modal/Alert/Tabs skinnés par classes Tailwind mappées à var(--...).
  - Token Debug Panel (fetch `/api/theme`).
  - Toggle Dark si `dark.enabled`.
- `/fr` et `/en` :
  - Version localisée simple (titre/texte).
  - useHead : canonical et `<link rel="alternate" hreflang="fr">`, `<link hreflang="en">`, `<link hreflang="x-default">`.
- `error.vue` (404 customisée) :
  - Doit utiliser les tokens (`bg-bg`, `text-text`, `color.primary`) pour rester brandée.
  - Contenu simple : “Page non trouvée” + bouton DSButton qui redirige vers `/`.

TAILWIND

- `content`: inclure flowbite et flowbite-vue.
- `theme.extend` branché sur var(--...).
- `plugins: [require('flowbite/plugin')]`.

FILES À PRODUIRE

- ./nuxt.config.ts
- ./tailwind.config.js
- ./postcss.config.js
- ./package.json
- ./app.vue (ou ./layouts/default.vue) — injecter le `<style id="tenant-tokens">` dans le head SSR pour éviter le FOUC.
- ./server/middleware/tenant.ts
- ./server/utils/theme.ts
- ./server/api/theme.get.ts
- ./plugins/flowbite.client.ts
- ./assets/css/tailwind.css
- ./tokens/acme.tokens.json
- ./tokens/beta.tokens.json
- ./tokens/gamma.tokens.json
- ./components/DSButton.vue
- ./components/DSCard.vue
- ./pages/index.vue
- ./pages/flowbite.vue
- ./pages/fr.vue
- ./pages/en.vue
- ./error.vue (404 customisée)
- ./public/ (logo.svg optionnel)
- ./manifest.json (fake plugin manifest)
- ./README.md (FR puis EN)
- ./prompt.md (copie intégrale de ce prompt)

TOKENS (à intégrer tels quels)

- ./tokens/acme.tokens.json
  { ... }
- ./tokens/beta.tokens.json
  { ... }
- ./tokens/gamma.tokens.json
  { ... }

README (FR puis EN)

- Expliquer le projet en termes simples (étudiants 1ère année).
- Pourquoi tokens, multi-domaine, Flowbite, i18n, SEO, perf, manifest.
- Comment lancer (`pnpm i`, `pnpm dev`).
- Comment tester chaque point :
  - Tokens appliqués (DSButton/DSCard).
  - Multi-tenant host ou ?tenant= (acme, beta, gamma).
  - Flowbite skinné.
  - Dark mode.
  - i18n (/fr, /en, hreflang).
  - SEO tags (canonical + hreflang).
  - Perf: image lazy + Lighthouse (TTFB).
  - Manifest plugin visible (`./manifest.json`).
  - 404 customisée : vérifier qu’elle respecte les tokens et que le bouton ramène vers `/`.
- Comment customiser (ajouter tokens, tenants → exemple gamma).
- Check "zéro hex en dur" avec `git grep`.
- Limites connues (Flowbite classes internes récalcitrantes, FOUC possible si on n’injecte pas tôt, fonts à gérer si besoin).
- 🚀 Utiliser ce POC comme base du projet futur (pipeline tokens, multi-tenant DB, BO/FO séparés, SEO complet, CDN, Unlayer, preview, SSO, RBAC, CI/CD, observabilité).

DoD

- `/`, `/flowbite`, `/fr`, `/en` fonctionnent en dev.
- Switch tenant = tokens changent partout.
- Flowbite reflète tokens sans override CSS.
- Dark mode OK si activé.
- i18n OK (`hreflang` présent).
- Canonical tag généré.
- Image lazy présente.
- Manifest JSON présent.
- 404 customisée présente et skinnée via tokens. Son bouton ramène vers `/`.
- Zéro hex hors tokens JSON.

ADDENDA (EXIGENCES DE PRÉCISION)

- Node >= 18.17. Écrire dans package.json les versions:
  "nuxt":"^3.12.0", "tailwindcss":"^3.4.10", "flowbite":"^2.3.0", "flowbite-vue":"^0.3.0", "postcss":"^8.4.35", "autoprefixer":"^10.4.19"
- Dans nuxt.config.ts:
  export default defineNuxtConfig({
  ssr: true,
  build: { transpile: ['flowbite-vue'] },
  vite: { ssr: { noExternal: ['flowbite-vue'] } }
  })
- Dans tailwind.config.js, étendre 'content' avec:
  ['./app.vue','./error.vue','./app.config.ts',
  './components/**/*.{vue,js,ts}','./layouts/**/*.{vue,js,ts}',
  './pages/**/*.{vue,js,ts}','./plugins/**/*.{js,ts}','./server/**/*.{js,ts}',
  './node_modules/flowbite/**/*.{js,vue,ts}','./node_modules/flowbite-vue/**/*.{js,vue,ts}']
- Middleware: lire host depuis req.headers['x-forwarded-host'] || req.headers.host; supporter ?tenant= pour override en dev. Ajouter `gamma` comme 3e tenant possible. Si aucun tenant valide n’est trouvé, fallback automatique sur un tenant par défaut défini dans une constante (par ex. `DEFAULT_TENANT = 'acme'`).
- useHead: injecter htmlAttrs { 'data-tenant': ..., 'data-theme': ... } + <link rel="canonical"> + alternates hreflang: fr, en, x-default.
- README: documenter /etc/hosts (acme.localhost, beta.localhost, gamma.localhost) OU ?tenant=; indiquer comment lancer Lighthouse et où voir TTFB (<600ms).
- README: ajouter une section “✅ Tests à exécuter” avec cases à cocher pour chaque exigence (tokens, multi-tenant, Flowbite, dark, i18n, canonical/hreflang, perf, manifest, 404 custom, grep hex).
- README: préciser que le test Lighthouse/TTFB se fait sur build prod: pnpm build && pnpm start.
- Fonts: préciser que les stacks (`Inter`, `Manrope`, `Poppins`) utilisent fallback système. Pour prod, documenter l’ajout de la font (self-host/import) sans casser la règle des tokens.
