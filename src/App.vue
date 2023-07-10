<script setup lang="ts">
import Layout from '@/layout/Index.vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="locale">
    <layout />
  </el-config-provider>
</template>

<style>
#app {
  width: 100%;
  height: inherit;
  padding: 0 20px;
  background: #f5f5f5;
}
</style>
