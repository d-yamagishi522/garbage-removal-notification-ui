<template>
  <div class="flex justify-between h-12 items-center px-3 border-b-2 border-black">
    <div class="font-bold text-xl text-black">
      通知bot管理画面
    </div>
    <BaseButton
      :text="text"
      height="h-8"
      class="w-24 text-sm"
      @onClick="$emit('headerButton')"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BaseButton from '@/components/BaseButton.vue'

@Component({  
  components: {
    BaseButton
  }
})
export default class TheHeader extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  readonly text!: string
} 
</script>