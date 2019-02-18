<template>
  <div id="app">
    <div class="overlay-bg">
      <div class="separator separator-bottom separator-skew">
        <svg
          x="0"
          y="0"
          viewBox="0 0 1560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon class="fill-white" points="1560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <div class="header">
      <Header/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from './layouts/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./global.scss";

.overlay-bg {
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
  width: 100%;
  height: 50vh;
  min-height: 250px;
  max-height: 400px;
  position: absolute;
  z-index: -1;

  .separator {
    fill: $secundary;
    position: absolute;
    bottom: -6px;
    width: 100%;
  }
}
</style>
