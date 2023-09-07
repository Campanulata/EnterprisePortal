<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar />
  <div class="bg">
    <img src="@/assets/bg.jpg" />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
}
.app{
  width: 100vw;
  .header{
    height: 40px;
    background-color: #0f86be;
    .content{
      width: 1280px;
      margin: 0 auto;
      color: white;
      display: flex;
      justify-content: flex-start;
      ul{
        display: flex;
        align-items: center;
        height: 40px;
        li{
          cursor: pointer;
          margin: 0 5px;
          &:hover{
            color: blue;
          }
        }
      }
    }
  }
}
</style>
