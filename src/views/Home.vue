<template>
    <div>
      <Navbar /> <!-- 在每个视图中引用头部组件 -->

    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue"; // 导入头部组件
  
  export default {
    components: {
      Navbar, // 注册头部组件
    },
  };
  </script>
  