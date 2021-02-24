<template>
  <BaseModal
    @close="$emit('close')"
  >
    <div class="text-center font-semibold text-black my-8 text-xl">
      通知を<span>{{ isNotificated ? '停止' : '再開' }}</span>します。
    </div>
    <div class="px-4 pb-4 flex justify-between">
      <BaseButton
        class="w-half"
        text="閉じる"
        height="h-16"
        color="black"
        @onClick="$emit('close')"
      />
      <BaseButton
        v-if="isNotificated"
        class="w-half"
        text="停止"
        height="h-16"
        color="red"
        @onClick="$emit('updateNotificate')"
      />
      <BaseButton
        v-else
        class="w-half"
        text="再開"
        height="h-16"
        color="green"
        @onClick="$emit('updateNotificate')"
      />
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BaseModal from '@/components/BaseModal.vue'
import BaseButton from '@/components/BaseButton.vue'

@Component({  
  components: {
    BaseModal,
    BaseButton
  }
})
export default class TheHeader extends Vue {
  @Prop({
    type: Boolean,
    required: true
  })
  readonly isNotificated!: boolean
} 
</script>

<style scoped>
.w-half {
  width: 45%;
}
</style>