<template>
  <section class="app-main">
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FixHeader from './FixHeader.vue'
export default defineComponent({
  components: { FixHeader },
  name:"layout",
  setup() {
    
  },
})
</script>
<style lang="scss">
.app-main{
  padding-top: 64px;
}
</style>