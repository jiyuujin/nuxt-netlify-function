import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/main.css'],
  modules: ['nuxt-og-image'],
  ogImage: {
    playground: true,
    runtimeBrowser: true,
    runtimeCacheStorage: false,
    defaults: {
      component: 'OgTemplate',
      appName: 'My Netlify App',
    },
    debug: true,
  },
  experimental: {
    componentIslands: true,
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
})
