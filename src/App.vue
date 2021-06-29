<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
    };
  },
  components: {},
  created() {
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
