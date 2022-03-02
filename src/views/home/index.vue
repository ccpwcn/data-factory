<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img :src="LogoPng" alt="logo">
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LogoPng from '@/assets/logo.png'
</script>

<style scoped>
.common-layout .el-header {
  background-color: #dae0e8;
  color: var(--el-text-color-primary);
  line-height: 60px;
  display: flex;
  align-items: center;
}

.el-header img {
  height: 66%;
}

.common-layout .el-footer {
  background-color: #dae0e8;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
