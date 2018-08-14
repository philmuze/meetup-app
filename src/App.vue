<template>
  <div id="app" class="border-green-dark border-t-8">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/live">Live</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "@/assets/styles/main.css";

export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background: #e3fcec;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
