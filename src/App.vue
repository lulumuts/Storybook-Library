<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<v-app>
  <HelloWorld msg="Vite + Vue" />
</v-app>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<style lang="scss">
#app {
  font-family: Avenir, Roboto, Lexend, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .v-application__wrap {
  min-height: 100dvh !important;
}
}

</style>
