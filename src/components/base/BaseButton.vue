<!-- 自定义公共button -->
<template>
  <el-button
    class="base-button"
    :="$attrs"
    :style="{ color: textColor || '#333', borderRadius: borderRadius || '36px' }"
    @click="btnClick"
  >
    <slot>按钮</slot>
  </el-button>
</template>

<script setup lang="ts">
defineProps<{
  textColor?: string
  borderRadius?: string
}>()
const emit = defineEmits(['click'])
function btnClick() {
  emit('click')
}
</script>
<style scoped lang="less">
.base-button {
  width: 136px;
  height: 71px;
  font-size: 28px;
  font-weight: normal;
}
</style>
