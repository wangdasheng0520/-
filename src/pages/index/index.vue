<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/menu">菜单管理</el-menu-item>
            <el-menu-item index="/role">角色管理</el-menu-item>
            <el-menu-item index="/manager">管理员管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>商城管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/cate">商品分类</el-menu-item>
            <el-menu-item index="3-2">商品规格</el-menu-item>
            <el-menu-item index="3-3">商品管理</el-menu-item>
            <el-menu-item index="3-4">会员管理</el-menu-item>
            <el-menu-item index="3-5">轮播图管理</el-menu-item>
            <el-menu-item index="3-6">秒杀活动</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        admin
        <i class="el-icon-setting"></i>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 二级路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: right;
  line-height: 60px;
  height: 60px;
}
.el-breadcrumb{
  line-height: 40px;
  font-size: 24px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
