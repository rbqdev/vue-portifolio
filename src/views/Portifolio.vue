<template>
  <section class="page portifolio">
    <CardContent>
      <template v-slot:content>
        <div class="portifolio__content">
          <div class="portifolio__projects">
            <template v-for="(project, index) in projects">
              <article class="project-card" :key="index">
                <figure class="project-card__image">
                  <img src="@assets/img/line-bg.png" alt="Imagem do Projeto">
                </figure>

                <div class="project-card__content">
                  <ul class="project-card__tags">
                    <template v-for="(tag, indexTag) in project.tags">
                      <li class="tag" v-if="indexTag < 3" :key="indexTag">
                        <span class="tag-text">{{ tag }}</span>
                        <template v-if="indexTag < 2">
                          <span class="tag-divider">|</span>
                        </template>
                      </li>
                    </template>
                  </ul>

                  <div class="project-card__text-primary">
                    <h1 class="project-card__title">Project Title</h1>
                  </div>

                  <div class="project-card__text-desc">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates mollitia qui natus culpa reprehenderit. Iusto quos inventore, praesentium ad deleniti nulla earum quasi, illum, illo omnis rem eos facilis.</p>
                  </div>
                </div>
              </article>
            </template>
          </div>
        </div>
      </template>
    </CardContent>
  </section>
</template>

<script>
import { projects } from "@config/projects";
import CardContent from "@/layouts/CardContent.vue";

export default {
  name: "portifolio",
  components: {
    CardContent
  },
  computed: {
    projects() {
      return projects;
    }
  }
};
</script>

<style lang="scss">
.portifolio {
  h1,
  h2,
  p,
  span,
  strong {
    line-height: 1;
  }

  .container {
    max-width: 1300px;
  }

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

    &,
    &__content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

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

    &__tags {
      display: flex;
      align-items: center;
      background: #f4f5f7;
      color: #333;

      .tag {
        display: flex;
        align-items: center;

        &-text {
          font-size: 9px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 8px 10px;
        }
      }
    }

    &__text-primary {
      padding: 15px 10px;
      border-bottom: 1px solid #eee;
    }

    &__title {
      font-size: 1.4em;
      font-weight: bold;
    }

    &__text-desc {
      padding: 10px;

      p {
        color: #525f7f;
        font-weight: 200;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>