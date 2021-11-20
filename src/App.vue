<template>
  <navigation-menu> </navigation-menu>

  <main>
    <dark-mode></dark-mode>
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
:root {
  --primary-color: #007af3;
  --background-color-primary: #ebebeb;
  --background-color-secondary: #444447;
  --svg-color: invert(3%) sepia(1%) saturate(1024%) hue-rotate(314deg)
    brightness(92%) contrast(81%);
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 2.5rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #b6b9bb;
  --svg-color: invert(81%) sepia(0%) saturate(3725%) hue-rotate(358deg)
    brightness(82%) contrast(88%);
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

body {
  margin: 0px;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}
#app {
  font-family: Poppins;

  body {
    // background: #f2f2f2;
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

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
  }

  .container {
    background-color: var(--background-color-primary);
  }
}
</style>
