<template>
  <navigation-menu></navigation-menu>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  components: {
    'navigation-menu': NavigationMenu,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: Poppins;

  :root {
    --primary-color: #007af3;
  }

  body {
    background: #f2f2f2;
    margin: 0px;
    font-family: 'Poppins';
  }
}
</style>
