<template>
  <BaseModal
    @close="$emit('close')"
  >
    test
  </BaseModal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BaseModal from '@/components/BaseModal.vue'

@Component({  
  components: {
    BaseModal
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