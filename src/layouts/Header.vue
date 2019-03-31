<template>
  <div
    id="nav"
    class="nav"
    :class="{'navbar-visible': isNavbarVisible, 'navbar-hiding': navBarHiding}"
  >
    <div class="nav-container container flex flex-justify-between">
      <ul class="nav-links nav-links-left flex">
        <li class="nav-link nav-link-home">
          <router-link to="/" aria-label="'</>'">Robson Braga</router-link>
        </li>
      </ul>
      <!-- Links -->
      <button type="button" class="navbar-toggle" @click="toggleNavbar()">
        <span class="line"></span>
      </button>
      <ul class="nav-links nav-links-right flex">
        <ul class="nav-links-pages">
          <li class="nav-link disabled">
            <router-link to="/portifolio">Potifólio</router-link>
          </li>
        </ul>
        <ul class="nav-links-social">
          <template v-for="(item, index) in headerRightLinks">
            <li :key="index" class="nav-link nav-link-social">
              <a
                :href="item.link"
                :alt="item.label"
                :target="!item.email ? '_blank' : ''"
                rel="noopener"
              >
                <ion-icon :name="item.icon"></ion-icon>
              </a>
            </li>
          </template>
        </ul>
      </ul>
      <div class="navbar-mobile-overlay" @click="toggleNavbar()"></div>
      <!-- Links -->
    </div>
  </div>
</template>

<script>
import { config } from "@config/config";

export default {
  data() {
    return {
      isNavbarVisible: false,
      navBarHiding: false
    };
  },
  computed: {
    headerRightLinks() {
      const {
        info: {
          header: { links }
        }
      } = config;
      return links;
    }
  },
  methods: {
    toggleNavbar() {
      if (this.isNavbarVisible) {
        this.navBarHiding = true;
      }

      this.isNavbarVisible = !this.isNavbarVisible;

      setTimeout(() => {
        this.navBarHiding = false;
      }, 350);
    }
  }
};
</script>


<style lang="scss">
@import "../assets/scss/colors";

.nav {
  padding: 20px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
}

.navbar-toggle {
  display: none;

  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    min-width: 30px;
    min-height: 20px;
    border: 0;
    background-color: transparent;
    position: absolute;
    right: 20px;
    z-index: 3;

    span {
      width: 100%;
      height: 3px;
      display: block;
      background: #fff;
      position: relative;

      &:before,
      &:after {
        content: "";
        width: 100%;
        height: 3px;
        display: block;
        background: #fff;
        transition: 0.3s all;
      }
      &:before {
        transform: translateY(-7px);
      }
      &:after {
        transform: translateY(4px);
      }
    }
  }
}

.nav-links-right {
  flex: 1;
  justify-content: space-between;

  .nav-links-pages,
  .nav-links-social {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.nav-link {
  margin: 0 12px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  a,
  .router-link {
    font-size: 1em;
    font-weight: bold;
    color: #adb5bd;
    display: flex;
    align-items: center;
    -webkit-transition: 0.2s;
    transition: 0.2s;

    &:hover,
    &.router-link-exact-active {
      color: #fff !important;
    }

    &.disabled {
      a {
        opacity: 0.7;
        pointer-events: none;
      }
    }
  }

  &-social {
    a {
      font-size: 1.4em;
    }
  }

  &-home {
    a {
      margin-right: 20px;

      &:before {
        content: "</>";
        margin-right: 5px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .nav-container {
    padding: 0 25px !important;
  }
  .nav-links-right {
    position: absolute;
    left: 10px;
    top: 10px;
    width: calc(100% - 20px);
    padding: 50px 15px 0;
    border-radius: 0.25rem;
    background: #fff;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    transform: translate(0, -10px) perspective(200px) rotateX(-2deg);
    transition: all 0.2s;
    opacity: 0;
    visibility: hidden;
    z-index: 2;

    .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;

      a {
        color: $default;
        line-height: 1;
      }
      &:last-child:not(.nav-link-social) {
        margin: 0;
      }
    }

    .nav-links-pages {
      flex-direction: column;
      border-top: 1px solid #eee;
      padding-top: 25px;

      .nav-link {
        margin: 0 0 15px;
      }
    }

    .nav-links-social:not(:empty) {
      padding: 25px 0;
    }

    .nav-links-social:empty {
      padding: 15px 0;
    }

    .nav-link-social {
      margin: 0 20px;
    }

    .nav-links-pages,
    .nav-links-social {
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.2s;
    }
  }

  .navbar-mobile-overlay {
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
    z-index: 1;
  }

  .navbar-visible {
    .nav-links-left {
      z-index: 3;

      a {
        color: $default !important;
      }
    }

    .nav-links-right {
      transition: visibility 0.25s, opacity 0.45s, transform 0.25s;
      transform: none;
      opacity: 1;
      visibility: visible;

      .nav-links-pages,
      .nav-links-social {
        opacity: 1;
        transform: translateY(0);
      }

      .nav-links-pages {
        transition-delay: 200ms;
      }

      .nav-links-social {
        transition-delay: 300ms;
      }
    }

    .navbar-toggle {
      span,
      span:before,
      span:after {
        background: $default;
      }

      span {
        background: transparent;
      }

      span:before {
        animation: 0.35s navtoggle-before-in forwards;
      }
      span:after {
        animation: 0.35s navtoggle-after-in forwards;
      }
    }

    a {
      &:hover,
      &.router-link-exact-active {
        color: #172b4d !important;
      }
    }

    .navbar-mobile-overlay {
      opacity: 1;
      visibility: visible;
    }
  }

  .navbar-hiding {
    .navbar-toggle {
      span:before {
        animation: 0.35s navtoggle-before-out forwards;
      }
      span:after {
        animation: 0.35s navtoggle-after-out forwards;
      }
    }
  }

  @keyframes navtoggle-before-in {
    50% {
      transform: translateY(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes navtoggle-after-in {
    50% {
      transform: translateY(0);
    }
    100% {
      transform: rotate(-45deg) translate(2px, -2px);
    }
  }

  @keyframes navtoggle-before-out {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translateY(-8px);
    }
  }
  @keyframes navtoggle-after-out {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translateY(6px);
    }
  }
}
</style>
