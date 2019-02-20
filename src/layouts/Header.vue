<template>
  <div id="nav" class="nav">
    <div class="nav-container container flex flex-justify-between">
      <ul class="nav-links flex">
        <li class="nav-link nav-link-home">
          <router-link to="/" aria-label="'</> Robson Braga'"></router-link>
        </li>
        <li class="nav-link">
          <router-link to="/portifolio">Potifólio</router-link>
        </li>
      </ul>
      <!-- Links -->
      <ul class="nav-social flex">
        <li class="nav-link nav-link-social">
          <a href="https://github.com/rbqdev" target="_blank" rel="noopener">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a
            href="https://www.linkedin.com/in/robson-braga-de-queiroz-51638714b/"
            target="_blank"
            rel="noopener"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="https://twitter.com/rbqdev" target="_blank" rel="noopener">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a
            href="https://stackoverflow.com/users/10560743/robson-braga"
            target="_blank"
            rel="noopener"
          >
            <ion-icon name="logo-rss"></ion-icon>
          </a>
        </li>
        <li class="nav-link nav-link-social">
          <a href="mailTo:rbq.dev@gmail.com">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
      <!-- Links -->
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  padding: 20px 0;
}

.nav-links {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
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
      font-size: 1.2em;

      &:before {
        content: "</> Robson Braga";
      }
    }
  }
}
</style>
