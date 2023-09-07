<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar />
  <RouterView />
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
</style>
