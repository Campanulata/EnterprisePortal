<template>
  <div class="main">
    <el-button type="primary" style="margin-left: 16px" @mouseover="drawer = true">
      open
    </el-button>
    <!-- 抽屉内容 -->
    <el-drawer
      v-model="drawer"
      direction="ttb"
      :show-close="false"
    >
      <el-row>
        <el-col
          v-for="(o, index) in 2"
          :key="o"
          :span="8"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentDate = ref(new Date())
const drawer = ref(false)

</script>

<style lang="scss">
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>