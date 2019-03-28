<template>
  <section class="page portifolio">
    <CardContent>
      <template v-slot:content>
        <div class="portifolio__content">
          <div class="portifolio__projects">
            <article class="project-card" v-for="(project, i) in arr" :key="i">

              <figure class="project-card__image">
                <img src="@assets/img/line-bg.png" alt="Imagem do Projeto">
              </figure>

              <div class="project-card__tags">

              </div>

              <div class="project-card__text-primary">
                <h1 class="project-card__title">Project Title</h1>
                <h2 class="project-card__subtitle">Lorem ipsum dolor sit amet consectetur</h2>
              </div>

              <div class="project-card__text-content">

              </div>

              <div class="project-card__footer">

              </div>
            </article>
          </div>
        </div>
      </template>
    </CardContent>
  </section>
</template>

<script>
import CardContent from "@/layouts/CardContent.vue";

export default {
  name: "portifolio",
  components: {
    CardContent
  },
  computed: {
    arr(){
      return new Array(12);
    }
  }
};
</script>

<style lang="scss">
.portifolio {

  &__projects {
    display: flex;
    flex-wrap: wrap;
  }

  .project-card {
    flex: 1 0 250px;
    min-height: 250px;
    margin: 1%;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);

    &__image {
      position: relative;
      padding-top: 45%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      overflow: hidden;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__title {
      font-size: 1.6em;
    }
    &__subtitle {
      font-size: 1em;
    }
  }
}
</style>
