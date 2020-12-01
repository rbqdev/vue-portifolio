<template>
  <section class="page home">
    <CardContent>
      <template v-slot:header>
        <div class="card-header__container">
          <div class="avatar flex">
            <img class="image shadow" src="https://media-exp1.licdn.com/dms/image/C4E03AQGsrqqn9Sud9w/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=XJSnQhI05DJv2DHz3OoOWZi4vJmoLuU7Ij04O3fhbCY" alt="Personal Image">
          </div>
        </div>
      </template>
      <template v-slot:content>
        <article class="card-content__info personal-info">
          <h1 class="title name">Robson Braga de Queiroz</h1>
          <h2 class="subtitle city text-light">Frontend Developer</h2>
        </article>
        <article class="card-content__info professional-info">
          <h3 class="work">
            Working on
            <a
              href="http://way2.com.br"
              class="company"
              target="_blank"
              rel="noopener"
            >Way2 Tecnologia</a>
            as FrontEnd Developer.
          </h3>
        </article>
      </template>
      <template v-slot:footer>
        <article class="card-footer__content">
          <div class="card-footer__summary">
            <p>Javascript lover and enthusiast open-source.</p>
            <p>I am a Frontend Developer since 2012. My professional goals are: be a excellence programmer, working in team, always trying improve my code and seeking new learning.</p>
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
