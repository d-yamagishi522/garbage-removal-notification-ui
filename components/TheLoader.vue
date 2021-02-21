<template>
  <div>
    <section class="flex items-center justify-center w-full h-full inset-0 bg-loading z-50 fixed">
      <div class="loader page-loader" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class TheLoader extends Vue {
}
</script>

<style scoped>
.bg-loading {
  background-color: rgba(0, 0, 0, .5)
}
.loader {
  margin: 0 auto;
  font-size: 10px;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.page-loader,
.page-loader:after {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
.page-loader {
  border-top: .3rem solid rgba(255, 255, 255, 0.5);
  border-right: .3rem solid rgba(255, 255, 255, 0.5);
  border-bottom: .3rem solid rgba(255, 255, 255, 0.5);
  border-left: .3rem solid #0096F0;
}
</style>
