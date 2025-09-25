# POC Nuxt + Flowbite Tokens

## Objectif (FR)
Ce proof of concept sert de terrain d'apprentissage pour des étudiants de 1ère année : il montre comment des design tokens alimentent des variables CSS, qui elles-mêmes sont consommées par Tailwind afin de produire une librairie de composants cohérente.

## Pourquoi ce POC
- Chaîne complète design tokens → variables CSS → classes utilitaires Tailwind.
- Multi-tenant par nom d'hôte ou paramètre `?tenant=` : chaque locataire applique ses propres tokens.
- Flowbite skinné uniquement via classes utilitaires, sans override CSS.
- Internationalisation complète avec routes `/fr` et `/en`, balises `hreflang` et canonicales cohérentes.
- Budget de performance : images lazy-load et objectif Lighthouse TTFB < 600 ms (`pnpm build && pnpm start`).
- `manifest.json` factice pour simuler un PWA manifest.

## Lancer le projet
```bash
pnpm i
pnpm dev
```

## Checklist de tests
- [ ] Tokens visibles sur `DSButton` et `DSCard`.
- [ ] Multi-tenant par host (`acme.localhost`, `beta.localhost`, `gamma.localhost`) ou `?tenant=acme|beta|gamma`.
- [ ] Flowbite skinné via util-classes (aucun override CSS).
- [ ] Mode sombre fonctionnel si activé.
- [ ] i18n `/fr` et `/en` avec `hreflang` et canonical corrects.
- [ ] Performance : images lazy-load + Lighthouse TTFB < 600 ms (`pnpm build && pnpm start`).
- [ ] `manifest.json` présent.
- [ ] Page 404 personnalisée respecte les tokens et le bouton renvoie vers `/`.
- [ ] Aucun hexadécimal hors de `./tokens/*.json` (`git grep`).

## Multi-tenant en local
- Ajouter dans `/etc/hosts` : `acme.localhost`, `beta.localhost`, `gamma.localhost`.
- Ou utiliser `http://localhost:3000?tenant=acme` (et `beta`, `gamma`).

## Ajouter un nouveau tenant
1. Copier un fichier de tokens JSON existant (par ex. `tokens/gamma.json`) et l'adapter.
2. Mettre à jour le resolver des tokens pour référencer le nouveau tenant.
3. Lancer l'appli et vérifier les composants clés (`DSButton`, `DSCard`).

## Polices
- Utiliser des stacks système en développement.
- Pour la production, auto-héberger ou importer les polices tout en respectant la règle : aucune couleur ou valeur hors des tokens.

## Utiliser ce POC comme base du projet futur
- Industrialiser la pipeline des tokens (outillage de génération + synchro design).
- Stocker les tenants et leurs tokens en base de données.
- Préparer back-office/front-office dédiés.
- Finaliser le SEO (sitemaps, métadonnées complètes, structured data).
- Distribuer via CDN avec stratégies d'invalidation par tenant.
- Intégrer Unlayer (ou équivalent) pour la génération de contenus.
- Mettre en place des environnements de preview.
- Gérer SSO, RBAC et audit log.
- Automatiser CI/CD avec tests et budgets de perf.
- Ajouter observabilité (logs, métriques, alerting).

---

## Purpose (EN)
This proof of concept is a learning playground for first-year students: it demonstrates how design tokens feed CSS variables, which are then consumed by Tailwind utility classes to deliver a consistent component library.

## Why this POC
- End-to-end flow: design tokens → CSS variables → Tailwind utilities.
- Multi-tenant via hostnames or the `?tenant=` query parameter, each tenant loading its own token set.
- Flowbite skinned only with utility classes, no CSS overrides.
- Full i18n with `/fr` and `/en` routes, plus consistent `hreflang` and canonical tags.
- Performance budget: lazy-loaded images and Lighthouse TTFB target < 600 ms (`pnpm build && pnpm start`).
- Fake `manifest.json` to mimic a PWA manifest.

## Getting started
```bash
pnpm i
pnpm dev
```

## Test checklist
- [ ] Tokens visible on `DSButton` and `DSCard`.
- [ ] Multi-tenant via host (`acme.localhost`, `beta.localhost`, `gamma.localhost`) or `?tenant=acme|beta|gamma`.
- [ ] Flowbite skinned with utility classes (no CSS overrides).
- [ ] Dark mode works when enabled.
- [ ] i18n `/fr` and `/en` with correct `hreflang` and canonical tags.
- [ ] Performance: lazy images + Lighthouse TTFB < 600 ms (`pnpm build && pnpm start`).
- [ ] `manifest.json` is present.
- [ ] Custom 404 follows tokens and its button links to `/`.
- [ ] Zero hexadecimal colors outside `./tokens/*.json` (`git grep`).

## Local multi-tenant setup
- Add to `/etc/hosts`: `acme.localhost`, `beta.localhost`, `gamma.localhost`.
- Or browse `http://localhost:3000?tenant=acme` (and `beta`, `gamma`).

## Adding a new tenant
1. Copy an existing token JSON (e.g. `tokens/gamma.json`) and adapt the values.
2. Update the token resolver to reference the new tenant.
3. Run the app and validate key components (`DSButton`, `DSCard`).

## Fonts
- Stick to system font stacks during development.
- For production, self-host or import fonts without breaking the "tokens only" rule for colors/values.

## Using this POC as a foundation for the future project
- Industrialize the token pipeline (generation tooling + design sync).
- Persist tenants and their tokens in a database.
- Plan dedicated back-office/front-office experiences.
- Deliver full SEO (sitemaps, complete metadata, structured data).
- Serve via CDN with per-tenant cache invalidation.
- Integrate Unlayer (or similar) for content creation.
- Provide preview environments.
- Implement SSO, RBAC, and audit logging.
- Automate CI/CD with testing and performance budgets.
- Add observability (logging, metrics, alerting).
