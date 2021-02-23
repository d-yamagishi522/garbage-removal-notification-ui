<template>
  <div class="height pb-40 pt-40">
      <div class="text-center font-bold text-2xl text-black">
        ゴミ出し通知botの管理画面
      </div>
      <div class="login-content-height p-8 text-black">
        ログインしたラインユーザーに設定したメッセージを送信します。
      </div>
      <div class="flex justify-center">
        <BaseButton
          text="ラインログイン画面へ"
          class="w-48"
          @onClick="login()"
        >
        </BaseButton>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import BaseButton from '@/components/BaseButton.vue'

@Component({
  components: {
    BaseButton
  }
})
export default class login extends Vue {
  mounted() {
    if (!liff.id) {
      liff.init({ liffId: process.env.liffId as string })
    }
  }

  async login () {
    await liff.login()
  }
}
</script>

414141
<style scoped>
.height {
  height: 100vh;
}
.login-content-height {
  height: calc(100vh - 396px);
}
.bg-gradient {
  background: linear-gradient(#00ff00, white)
}
</style>