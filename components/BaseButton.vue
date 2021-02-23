<template>
  <div>
    <div
      class="cursor-pointer flex justify-center items-center font-semibold btn text-white rounded border border-solid green"
      :class="height"
      @click="$emit('onClick')"
    >
      <div>
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
@Component
export default class BaseButton extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  readonly text!: string
  @Prop({
    type: String,
    default: 'h-10'
  })
  readonly height!: string
}
</script>

<style scoped>
.btn {
  /* 押したときの青い四角の背景を消す */
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  cursor:pointer;
}
.green {
  border-color: #00b900;
  background-color: #00b900;
}
</style>