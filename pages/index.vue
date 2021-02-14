<template>
  <div>
    <button
      @click="login()"
    >
      login
    </button>
    <button
      @click="logout()"
    >
      logout
    </button>
    <div @click="getToken()">
      token取得
    </div>
    <div @click="getContext()">
      user情報取得
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  async mounted() {
    await liff.init({ liffId: process.env.liffId as string })
  }

  async login () {
    if (!liff.isLoggedIn()) {
      const user = await liff.login()
      console.log('user', user)
    }
  }

  logout () {
    liff.logout()
  }

  async getToken () {
    const profile = await liff.getAccessToken()
    console.log('profile', profile)
  }

  async getContext () {
    const context = await liff.getContext()
    console.log('context', context)
  }
}
</script>
