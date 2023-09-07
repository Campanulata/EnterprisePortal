<template>
  <div class="nav">
    <div class="content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="公司logo" />
      </div>
      <div class="menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
        <el-sub-menu index="1">
            <template #title>产品</template>
            <el-menu-item index="1-1">ESS-SP</el-menu-item>
            <el-menu-item index="1-2">工商业储能系统</el-menu-item>
            <el-menu-item index="1-3">锂电池</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>解决方案</template>
            <el-menu-item index="1-1">ESS-SP</el-menu-item>
            <el-menu-item index="1-2">工商业储能系统</el-menu-item>
            <el-menu-item index="1-3">锂电池</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>项目案例</template>
            <el-menu-item index="1-1">ESS-SP</el-menu-item>
            <el-menu-item index="1-2">工商业储能系统</el-menu-item>
            <el-menu-item index="1-3">锂电池</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>关于我们</template>
            <el-menu-item index="1-1">ESS-SP</el-menu-item>
            <el-menu-item index="1-2">工商业储能系统</el-menu-item>
            <el-menu-item index="1-3">锂电池</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>服务中心</template>
            <el-menu-item index="1-1">ESS-SP</el-menu-item>
            <el-menu-item index="1-2">工商业储能系统</el-menu-item>
            <el-menu-item index="1-3">锂电池</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="search">
        <el-col :span="8">
          <el-dropdown>
            <span class="el-dropdown-link">
              切换语言<el-icon class="el-icon--right"></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">CN</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">UN</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">DE</el-dropdown-item>
                <el-dropdown-item :icon="Check">IT</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck">US</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
.nav {
  .content{
    width:100vw;
    margin: 0 auto;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    .logo{
      margin-left: 20px;
      display: flex;
      img{
        margin: auto;
        width: 180px;
        height: auto;
      }
    }
    .menu{
      flex:1;
      margin-left: 100px;
      .el-menu--horizontal.el-menu {
        border-bottom: none
      }
    }
    .search{
      width: 500px;
      .block-col-2 .demonstration {
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
  