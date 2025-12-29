<template>
  <div id="app">
    <Header />
    <main :class="{ 'no-scroll': isHomePage }">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

main {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

main.no-scroll {
  overflow: hidden;
  position: relative;
}
</style>

