<template>
  <div>
    {{ test() }}, test
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  created() {
    this.$store.dispatch('test/fetchTest')
  }

  test (): string {
    const str: string = this.$store.getters['test/getSample']
    return str
  }
}
</script>