<template>
  <section class="page home">
    <CardContent>
      <template v-slot:header>
        <div class="card-header__container">
          <div class="avatar flex">
            <img class="image shadow" width="200" src="https://avatars.githubusercontent.com/u/32659372?s=400&u=f6266e9956cb288f7d4076c5d2edb5ee88046e4d&v=4" alt="Personal Image">
          </div>
        </div>
      </template>
      <template v-slot:content>
        <article class="card-content__info personal-info">
          <h1 class="title name">Robson Braga de Queiroz</h1>
          <h2 class="subtitle city text-light">Senior FrontEnd Engineer</h2>
        </article>
      </template>
      <template v-slot:footer>
        <article class="card-footer__content">
          <div class="card-footer__summary">
            <p>Experienced Software Developer with a career spanning over a decade, specializing in front-end development. Adept at collaborating with cross-functional teams, contributing to product discussions, and making impactful decisions. Extensive expertise in JavaScript-based technologies, with a focus on React.js, Vue.js, and other modern frameworks. Proven track record in feature development, bug maintenance, and code reviews.</p>
          </div>
          <router-link to="/portifolio" class="btn btn-default">Portifólio</router-link>
        </article>
      </template>
    </CardContent>
  </section>
</template>

<script>
import { config } from "@config/config";
import CardContent from "@/layouts/CardContent.vue";

export default {
  name: "home",
  components: {
    CardContent
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
