<template>
  <div>
    userview
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.query.id);
</script>

<style lang="less" scoped>

</style>