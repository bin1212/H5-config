<template>
  <div class="fixed-header"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"FixHeader",
  setup() {},
});
</script>

<style lang="scss">
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.28);
  height: 64px;
  width: 100%;
}
</style>