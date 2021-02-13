import path from 'path'
import fs from 'fs'
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
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY as string,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
    firebaseUrl: process.env.FIREBASE_URL as string,
    firebaseProjectID: process.env.FIREBASE_PROJECT_ID as string,
    firebaseStrageBucket: process.env.FIREBASE_STRAGE_BUCKET as string,
    firebaseMessagingSenderID: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
    firebaseAppID: process.env.FIREBASE_APP_ID as string,
    firebaseMeasurementID: process.env.FIREBASE_MEASUREMENT_ID as string,
    liffId: process.env.LIFF_ID as string
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/firebase' }
  ],

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
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  }
}

export default config