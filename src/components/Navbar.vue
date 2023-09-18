<template>
  <el-affix>
    <div class="el-header">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="公司logo" index="/home" />
        </router-link>
      </div>
      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item>户储系统</el-menu-item>
          <el-menu-item>商储系统</el-menu-item>
          <el-menu-item>解决方案</el-menu-item>
          <el-menu-item>服务支持</el-menu-item>
          <el-menu-item @mouseover="drawerAbout = true">关于我们</el-menu-item>
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
  </el-affix>
  <div><el-button type="primary" style="margin-left: 16px" @click="drawerAbout = true">
      open
    </el-button></div>
  <div id="drawerAbout"></div>
  <!-- 抽屉内容 -->
  <teleport to="#drawerAbout">
    <el-drawer v-model="drawerAbout" direction="ttb" show-close="true" append-to-body="true" modal="false" size="666"
      :with-header="false">
      <el-row>
        <el-col v-for="(o, index) in 2" :key="o" :span="5" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-drawer>
  </teleport>
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

const direction = ref('rtl')
const drawerAbout = ref(false)
</script>

<style lang="scss">
.el-header {
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0);

  .logo {
    margin-left: 20px;

    img {
      margin: auto;
      width: 180px;
      height: auto;
    }
  }

  .menu {
    flex: 1;
    margin-left: 300px;

    .el-menu--horizontal.el-menu {
      border-bottom: none
    }
  }

  .search {
    width: 200px;

    .block-col-2 .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>
  