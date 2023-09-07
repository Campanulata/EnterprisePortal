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
          router
        >
        
        <el-menu-item index="/residential">户储系统</el-menu-item>
        <el-menu-item index="/commercial">商储系统</el-menu-item>
        <el-menu-item index="solution">解决方案</el-menu-item>
        <el-menu-item index="support">服务支持</el-menu-item>
        <el-menu-item index="about">关于我们</el-menu-item>
        </el-menu>
      </div>
      <div class="search">
        <el-col :span="8">
          <div>
            <el-button mb-2 @click="toggle">Switch Language</el-button>
            <br />
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const activeIndex = ref('/')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
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
  