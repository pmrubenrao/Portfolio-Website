<template>
  <navigation-menu> </navigation-menu>
  <!-- <dark-mode></dark-mode> -->
  <main>
    <router-view v-slot="slotProps" mode="out-in">
      <transition name="route">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';
import DarkMode from './components/DarkMode.vue';

export default {
  components: {
    'navigation-menu': NavigationMenu,
    'dark-mode': DarkMode,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: Poppins;

  body {
    background: #f2f2f2;
    margin: 0px;
    font-family: 'Poppins';
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .header-layout {
    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .header-layout-patch {
        font-weight: 700;
        text-transform: uppercase;
        width: 100%;
        margin: 1rem 0;
        letter-spacing: 0.2rem;
        border-bottom: 0.2rem solid var(--primary-color);
      }
    }
  }

  .route-enter-from,
  .route-leave-to {
    opacity: 0;
  }

  .route-enter-active {
    transition: opacity 0.4s ease-in;
  }

  // .route-leave-active {
  //   transition: opacity 0.5s ease-out;
  // }

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
  }

  :root {
    --primary-color: #007af3;
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #222;
    --element-size: 4rem;
  }

  /* Define styles for the root window with dark - mode preference */
  :root.dark-theme {
    --background-color-primary: #1e1e1e;
    --background-color-secondary: #2d2d30;
    --accent-color: #3f3f3f;
    --text-primary-color: #ddd;
  }

  .container {
    background-color: var(--background-color-primary);
  }
}
</style>
