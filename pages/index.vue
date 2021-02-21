<template>
  <div>
    <TheLoader v-if="isLoading" />
    <div>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import BaseModal from '@/components/BaseModal.vue'
import BaseButton from '@/components/BaseButton.vue'
import TheLoader from '@/components/TheLoader.vue'

@Component({
  components: {
    BaseModal,
    BaseButton,
    TheLoader
  }
})
export default class index extends Vue {
  isLogin: boolean = false
  isLoading: boolean = true

  async mounted() {
    if (!liff.id) {
      await liff.init({ liffId: process.env.liffId as string })
    }
    if (!liff.isLoggedIn()) {
      this.$router.push('/login')
    }
    this.isLoading = false
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
