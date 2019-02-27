<template>
  <div
    id="nav"
    class="nav"
    :class="{'navbar-visible': isNavbarVisible, 'navbar-hiding': navBarHiding}"
  >
    <div class="nav-container container flex flex-justify-between">
      <ul class="nav-links nav-links-left flex">
        <li class="nav-link nav-link-home">
          <router-link to="/" aria-label="'</> Robson Braga'"></router-link>
        </li>
      </ul>
      <!-- Links -->
      <button type="button" class="navbar-toggle" @click="toggleNavbar()">
        <span class="line"></span>
      </button>
      <ul class="nav-links nav-links-right flex">
        <li class="nav-link">
          <router-link to="/portifolio">Potifólio</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/contato">Contato</router-link>
        </li>
        <li class="nav-link nav-link-social">
          <a href="#0" target="_blank" rel="noopener">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="#0" target="_blank" rel="noopener">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="#0" target="_blank" rel="noopener">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="#0" target="_blank" rel="noopener">
            <ion-icon name="logo-rss"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="#0">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
      <!-- Links -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: false,
      navBarHiding: false
    };
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
    min-width: 35px;
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
        transform: translateY(-8px);
      }
      &:after {
        transform: translateY(6px);
      }
    }
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
    font-size: 1.1em;
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
  }

  &-social {
    a {
      font-size: 1.4em;
    }
  }

  &-home {
    a {
      font-size: 1.3em;

      &:before {
        content: "</> Robson Braga";
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
    padding: 60px 15px 20px;
    border-radius: 0.25rem;
    background: #fff;
    -webkit-box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    /* transform: translate(0, -10px) perspective(200px) rotateX(-2deg); */
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.25s, opacity 0.45s, transform 0.25s;
    z-index: 1;

    .nav-link {
      margin: 0 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        color: $default;
        line-height: 1;
      }
      &:first-child {
        border-top: 1px solid #eee;
        padding-top: 15px;
      }
      &:last-child {
        margin: 0;
      }
    }
  }

  .navbar-visible {
    .nav-links-left {
      z-index: 2;

      a {
        color: $default !important;
      }
    }
    .nav-links-right {
      transform: none;
      opacity: 1;
      visibility: visible;
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
