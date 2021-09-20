<template>
  <navigation-menu></navigation-menu>
  <about-me></about-me>
  <generic-list
    header-list="skill-header"
    sub-header-list="skill-sub-header"
    plain-list="skill"
  ></generic-list>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';
import AboutMe from './components/AboutMe.vue';
import GenericList from './components/GenericList.vue';

export default {
  components: { 'navigation-menu': NavigationMenu, AboutMe, GenericList },
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

  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
