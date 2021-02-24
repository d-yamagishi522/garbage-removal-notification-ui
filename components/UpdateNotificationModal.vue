<template>
  <BaseModal
    @close="$emit('close')"
  >
    <div class="px-4">
      <div class="mb-4 text-black font-semibold">
        {{ weekday }}に通知する内容を選択してください。
      </div>
      <div
        v-for="str in selectList"
        :key="str"
      >
        <div
          class="mb-1"
          @click="selectGarbage(str)"
        >
          <input
            type="checkbox"
            class="mr-2"
            :checked="selectedList.some(selected => selected === str)"
          >
          {{ str }}
        </div>
      </div>
    </div>
    <div class="px-4 pb-4 flex justify-between mt-4">
      <BaseButton
        class="w-half"
        text="閉じる"
        height="h-12"
        color="black"
        @onClick="$emit('close')"
      />
      <BaseButton
        class="w-half"
        text="更新"
        height="h-12"
        color="green"
        @onClick="editGarbage()"
      />
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BaseModal from '@/components/BaseModal.vue'
import BaseButton from '@/components/BaseButton.vue'
import { Garbage } from '@/types/models'

@Component({  
  components: {
    BaseModal,
    BaseButton
  }
})
export default class UpdateNotificationModal extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  readonly garbage!: Garbage
  @Prop({
    type: String,
    required: true
  })
  readonly weekday!: string

  selectList: string[] = ['生ゴミ', '資源ゴミ', 'ペットボトル', '缶', 'ビン', 'ダンボール']
  selectedList: string[] = []

  created () {
    if (this.garbage.str.length > 0) {
      this.selectedList = this.garbage.str.split('・')
    }
  }

  selectGarbage (str: string) {
    const existed: boolean = this.selectedList.some(selected => selected === str)
    if (existed) {
      this.selectedList = this.selectedList.filter(selected => selected !== str)
    } else {
      this.selectedList.push(str)
    }
  }

  editGarbage () {
    let str: string = ''
    this.selectedList.forEach((selected, i) => {
      str = str + selected
      if (this.selectedList.length - 1 !== i) {
        str = str + '・'
      }
    })
    const payload: Garbage = {
      str: str,
      weekday: this.garbage.weekday
    }
    this.$emit('editGarbage', payload)
  }
} 
</script>

<style scoped>
.w-half {
  width: 45%;
}
</style>