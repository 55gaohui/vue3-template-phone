<!-- 首页 -->
<template>
  <div class="home">
    <el-form :model="form" label-width="100px" :inline="false">
      <el-form-item label="保单号">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="投保人">
        <el-input v-model="form.name" readonly></el-input>
      </el-form-item>
      <el-form-item label="申请方式">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="保全项目">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="退费金额">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="申请日期">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="合作代理机构">
        <el-input v-model="form.contno" readonly></el-input>
      </el-form-item>
      <el-form-item label="影像回传">
        <el-input v-model="form.isiIsp" readonly></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-wrap">
      <base-button textColor="#fff" :color="THEME_COLOR" borderRadius="10">撤单成功</base-button>
      <base-button type="danger" textColor="#fff" borderRadius="10">撤单失败</base-button>
      <base-button v-if="!form.isiIsp" textColor="#fff" :color="THEME_COLOR" borderRadius="10">上传影像</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormType } from './type'
import { THEME_COLOR } from '@/config'
const form = reactive<FormType>({
  contno: '123123123',
  name: '张三',
  isiIsp: '1'
})
</script>
<style scoped lang="less">
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 15px 10px 120px;
  .btn-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    padding: 20px;
    background: #fff;
    button {
      flex: 1;
    }
  }
}
</style>
