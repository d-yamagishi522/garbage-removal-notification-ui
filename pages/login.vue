<template>
  <div class="height pt-40">
      <div class="text-center font-bold text-2xl text-black">
        ゴミ出し通知botの管理画面
      </div>
      <div class="login-content-height p-8 text-black text-center">
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
      <div class="text-black text-center mt-8 underline">
        <a @click="$router.push('/sample')">サンプル画面に遷移</a>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import BaseButton from '@/components/BaseButton.vue'

// window is not defined回避のため 要修正
let liff: any = null
if (process.browser) {
  liff = require('@/plugins/liff').default
}

@Component({
  components: {
    BaseButton
  }
})
export default class login extends Vue {
  login () {
    liff.login()
  }
}
</script>

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