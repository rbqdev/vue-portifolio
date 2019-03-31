<template>
  <section class="page home">
    <CardContent>
      <template v-slot:header>
        <div class="card-header__container">
          <div class="avatar flex">
            <img class="image shadow" v-if="!avatarUrl" src="@/assets/img/avatar.jpg" alt="Personal Image">
            <img class="image shadow" v-else :src="avatarUrl" alt="Personal Image">
          </div>
        </div>
      </template>
      <template v-slot:content>
        <article class="card-content__info personal-info">
          <h1 class="title name">{{ homeInfo.fullname }}</h1>
          <h2 class="subtitle city text-light">{{ homeInfo.profession }}</h2>
        </article>
        <article class="card-content__info professional-info">
          <h3 class="work">
            Working on
            <a
              href="http://way2.com.br"
              class="company"
              target="_blank"
              rel="noopener"
            >{{ homeInfo.company.name }}</a>
            as {{ homeInfo.company.role }}.
          </h3>
        </article>
      </template>
      <template v-slot:footer>
        <article class="card-footer__content">
          <div class="card-footer__summary" v-html="homeInfo.summary"></div>
          <router-link to="/portifolio" class="btn btn-default">Portifólio</router-link>
        </article>
      </template>
    </CardContent>
  </section>
</template>

<script>
import { config } from "@config/config";
import CardContent from "@/layouts/CardContent.vue";

const {
  homepage: { info }
} = config;

export default {
  name: "home",
  components: {
    CardContent
  },
  computed: {
    homeInfo() {
      return info || {};
    },
    avatarUrl() {
      const {
        avatar: { url }
      } = info;
      return url;
    }
  }
};
</script>

<style lang="scss">
.home {
  .card {
    justify-content: center;
    align-items: center;
  }

  .card-content {
    padding: 25px;

    &__info {
      text-align: center;
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .title {
      font-size: 1.6em;
    }
    .subtitle {
      font-size: 1.2em;
    }
  }

  .card-header__container {
    width: 100%;
    justify-content: center;

    .avatar {
      position: relative;
      width: 100%;

      .image {
        margin: 0 auto;
        border-radius: 10px;
        border: 2px solid #172b4d;
      }
    }
  }

  .card-footer__content {
    padding: 35px 25px;
    text-align: center;
    border-top: 1px solid #eee;

    .btn {
      margin: 35px 0 0;
    }
  }
}
</style>
