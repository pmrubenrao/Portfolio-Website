<template>
  <navigation-menu></navigation-menu>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';
export default {
  components: { NavigationMenu },
  data() {
    return {
      friends: [
        { id: 'ruben', name: 'ruben rao', contact: '1231231232' },
        { id: 'bond', name: 'ruben bond', contact: '12311233232' },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: Poppins;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
