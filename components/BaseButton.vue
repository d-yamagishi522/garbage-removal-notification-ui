<template>
  <div>
    <div
      class="cursor-pointer flex justify-center items-center font-semibold btn rounded border border-solid"
      :class="[height, color]"
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
  @Prop({
    type: String,
    default: 'green'
  })
  readonly color!: string
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
  color: white;
}
.red {
  border-color: #ff4500;
  background-color: #ff4500;
  color: white;
}
.black {
  border-color: #414141;
  background-color: white;
  color: #414141;
}
</style>