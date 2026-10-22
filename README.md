# tp-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Actualités de la veille

La page Veille récupère le flux RSS de Google Actualités via une Cloudflare Worker dédiée. La Worker ne relaie que les trois sujets prévus dans `workers/news-feed/index.js` ; aucune clé d’API d’actualité n’est nécessaire.

1. Installe Wrangler si besoin avec `npm install --save-dev wrangler`.
2. Connecte-toi à Cloudflare avec `npx wrangler login`.
3. Déploie le connecteur depuis la racine du projet avec `npx wrangler deploy --config workers/news-feed/wrangler.jsonc`.
4. Copie l’URL `*.workers.dev` affichée par Wrangler dans `.env.local` :

```env
VITE_NEWS_FEED_URL=https://david-portfolio-news-feed.<ton-sous-domaine>.workers.dev/
```

Pour le développement local, redémarre `npm run dev` après avoir créé `.env.local`. Pour GitHub Pages, ajoute la même URL comme variable de dépôt `VITE_NEWS_FEED_URL` dans **Settings > Secrets and variables > Actions > Variables**. La clé `VITE_NEWS_FEED_URL` n’est pas un secret : c’est l’adresse publique de ta Worker.
