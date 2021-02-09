import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || 'AIzaSyDxsHJQCuXTT8Zeb4z3XKKUg4z6VDbOCQA',
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || 'garbage-removal-notifica-8643c.firebaseapp.com',
    FIREBASE_URL: process.env.FIREBASE_URL || 'https://garbage-removal-notifica-8643c.firebaseio.com',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'garbage-removal-notifica-8643c',
    FIREBASE_STRAGE_BUCKET: process.env.FIREBASE_STRAGE_BUCKET || 'garbage-removal-notifica-8643c.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '68672887439',
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '1:68672887439:web:6dfce8870e97d0d7606efa',
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || 'G-1YWWHJ9QZK'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default config