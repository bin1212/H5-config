<template>
  <div class="layout">
    <fix-header></fix-header>
    <app-main></app-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppMain from './AppMain.vue'
import FixHeader from './FixHeader.vue'
export default defineComponent({
  components: { FixHeader, AppMain },
  name:"layout",
  setup() {
    
  },
})
</script>
<style lang="scss">
.layout{
  height: 100%;
}
</style>