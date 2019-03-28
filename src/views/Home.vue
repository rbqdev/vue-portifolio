<template>
  <section class="page home">
    <CardContent>
      <template v-slot:header>
        <div class="card-header__container">
          <div class="avatar flex">
            <img src="../assets/img/avatar.jpg" class="image shadow" alt="Avatar">
          </div>
        </div>
      </template>
      <template v-slot:content>
        <article class="card-content__info personal-info">
          <h1 class="title name">Robson Braga de Queiroz</h1>
          <h2 class="subtitle city text-light">FullStack Developer</h2>
        </article>
        <article class="card-content__info professional-info">
          <h3 class="work">
            Working on
            <a
              href="http://way2.com.br"
              class="company"
              target="_blank"
              rel="noopener"
            >Way2 Technology</a>
            as Front End eveloper.
          </h3>
          <span>Javascript lover and enthusiast open-source.</span>
        </article>
      </template>
      <template v-slot:footer>
        <article class="card-footer__content">
          <p>I am a web developer since 2012. Working as a fullstack, however, with focus in the frontend of aplications. My professional goals are: be a programmer of excellence, maintaining the quality of code, team working, and always seeking new learning.</p>
          <router-link to="/portifolio" class="btn btn-default">Portifólio</router-link>
        </article>
      </template>
    </CardContent>
  </section>
</template>

<script>
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

    .work {
      margin-bottom: 10px;
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
    margin-top: 15px;
    padding: 35px 25px;
    text-align: center;
    border-top: 1px solid #eee;

    .btn {
      margin: 35px 0 0;
    }
  }
}
</style>
