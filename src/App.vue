<template>
  <div id="app">
    <div class="overlay-bg">
      <div class="lines-bg"></div>
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
import Header from "./layouts/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@assets/scss/global.scss";

.overlay-bg {
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%);
  width: 100%;
  height: 100vh;
  min-height: 455px;
  position: absolute;
  z-index: -1;

  .lines-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("./assets/img/dots.svg");
    background-position: center center;
    opacity: 0.4;
  }

  .separator {
    fill: $secundary;
    position: absolute;
    bottom: -6px;
    width: 100%;

    @media only screen and (max-width: 767px) {
      fill: #fff;
    }
  }
  @media only screen and (max-width: 767px) {
    height: 100px;
  }
}
</style>
