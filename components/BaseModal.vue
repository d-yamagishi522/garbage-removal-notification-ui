<template>
  <div
    class="fixed z-50 w-full h-full modal-mask inset-0"
    @click="onClickMask"
  >
    <div class="flex justify-center items-center h-full">
      <div
        class="bg-white rounded mx-4 break-words modal-container"
        @click.stop
      >
        <div
          v-if="closeButton"
          class="flex flex-row-reverse pt-3 px-4"
        >
          <img
            src="@/assets/icons/modal_cancel_icon.svg"
            class="cursor-pointer"
            @click="$emit('close')"
          >
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseModal extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  readonly closeButton!: Boolean

  @Prop({
    type: Boolean,
    default: false
  })
  readonly closeMask!: Boolean

  onClickMask () {
    if (this.closeMask) {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 90%;
}
@media screen and (min-width:640px) {
  .modal-container {
    width: 520px;
  }
}
</style>
