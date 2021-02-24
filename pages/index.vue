<template>
  <div>
    <TheLoader v-if="isLoading" />
    <TheHeader
      text="ログアウト"
      @headerButton="logout()"
    />
    <div class="mx-2 mt-1">
      <div>
        <p class="font-semibold text-black">
          曜日毎に設定した内容が朝6時に通知されます。
        </p>
        <div class="mt-1 flex items-center">
          <p class="text-black text-xs mr-2">
            通知を<span>{{ isNotificated ? '停止' : '再開' }}</span>する場合はこちらから →
          </p>
          <div>
            <BaseButton
              :text="isNotificated ? '停止' : '再開'"
              height="h-6"
              :color="isNotificated ? 'red' : 'green'"
              class="w-10 text-xs"
              @onClick="showNotificateModal = true"
            />
          </div>
        </div> 
      </div>
    </div>
    <div class="mx-2 border border-black rounded mt-2">
      <div
        v-for="(item, i) in garbageList"
        :key="i"
      >
        <div
          class="flex h-20 justify-between border-black"
          :class="i !== 0 ? 'border-t' : ''"
        >
          <div class="flex items-center text-black">
            <div class="border-r border-black h-20 flex items-center px-1 font-semibold w-60px">
              {{ weekdayList[i] }} 
            </div>
            <div class="ml-2 w-100">
              {{ item.str }}
            </div>
          </div>
          <div class="h-20 flex items-center border-l border-black w-20 justify-center">
            <BaseButton
              text="編集"
              height="h-8"
              class="w-16 text-sm"
              @onClick="openNotificationModal(item, i)"
            />
          </div>
        </div>
      </div>
    </div>
    <TheConfirmationModal
      v-if="showNotificateModal"
      :isNotificated="isNotificated"
      @close="showNotificateModal = false"
      @updateNotificate="updateNotificate()"
    />
    <UpdateNotificationModal
      v-if="showUpdateNotificationModal"
      :garbage="garbage"
      :weekday="weekdayList[index]"
      @close="showUpdateNotificationModal = false"
      @editGarbage="editGarbage"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import BaseModal from '@/components/BaseModal.vue'
import BaseButton from '@/components/BaseButton.vue'
import TheConfirmationModal from '@/components/TheConfirmationModal.vue'
import TheLoader from '@/components/TheLoader.vue'
import { Garbage, Document } from '@/types/models'
import { cloneDeep } from 'lodash'

@Component({
  components: {
    BaseModal,
    BaseButton,
    TheConfirmationModal,
    TheLoader
  }
})
export default class index extends Vue {
  isLogin: boolean = false
  isLoading: boolean = true
  showNotificateModal: boolean = false
  showUpdateNotificationModal: boolean = false
  garbageList: Garbage[] = []
  garbage: Garbage = {} as Garbage
  index: number = 0
  weekdayList: string[] = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日']

  created () {
    this.initGarbageList()
  }

  async mounted() {
    if (!liff.id) {
      // liffの初期化
      await liff.init({ liffId: process.env.liffId as string })
    }
    if (!liff.isLoggedIn()) {
      // ログインしてない場合ログイン画面にリダイレクト
      this.$router.push('/login')
    } else {
      const context: any = await liff.getContext()
      const uid: string = context.userId
      await this.$store.dispatch('users/fetchUser', uid)
      const res = this.$store.getters['users/getGarbageList']
      if (res.length === 7) {
        this.garbageList = cloneDeep(res)
      } else {
        const payload: Document = {
          days: this.garbageList,
          isNotificated: true
        }
        await this.$store.dispatch('users/setData', payload)
      }
    }
    this.isLoading = false
  }

  get isNotificated (): boolean {
    return this.$store.getters['users/getIsNotificated']
  }

  initGarbageList () {
    const list: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    list.forEach((item: string) => {
      const garbage: Garbage = {
        str: '',
        weekday: item
      }
      this.garbageList.push(garbage)
    })
  }

  async logout () {
    await liff.logout()
    this.$router.push('/login')
  }

  async editGarbage (garbage: Garbage) {
    const list = cloneDeep(this.garbageList)
    list.forEach(item => {
      if (item.weekday === garbage.weekday) {
        item.str = garbage.str
      }
    })
    const payload: Document = {
      days: list,
      isNotificated: this.isNotificated
    }
    await this.$store.dispatch('users/setData', payload)
    this.garbage = {} as Garbage
    this.showUpdateNotificationModal = false
    this.garbageList = cloneDeep(list)
  }

  openNotificationModal (payload: Garbage, i: number) {
    this.garbage = payload
    this.index = i
    this.showUpdateNotificationModal = true
  }

  async updateNotificate () {
    await this.$store.dispatch('users/updateIsNotificated', !this.isNotificated)
    this.showNotificateModal = false
  }
}
</script>

<style scoped>
.w-60px {
  width: 60px;
}
.box-str {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.w-100 {
  width: calc(52vh - 148px);
}
</style>