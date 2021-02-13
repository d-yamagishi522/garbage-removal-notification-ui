<template>
  <div>
    <button
      @click="login()"
    >
      login
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  async mounted() {
    await liff.init({ liffId: process.env.liffId as string })
  }

  login () {
  }
}
</script>