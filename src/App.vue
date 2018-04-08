<template>
  <div id="app">
    <el-container>
      <el-header>

      </el-header>
      <el-container>
        <el-aside width="150px">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>

      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import ElFooter from "../node_modules/element-ui/packages/footer/src/main.vue";

  export default {
    components: {ElFooter},
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-aside{
    background: #2f66b9;
    color:#FFF;
  }
</style>
