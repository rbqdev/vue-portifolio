<template>
  <section class="page portifolio">
    <CardContent>
      <template v-slot:content>
        <div class="portifolio__content">
          <div class="portifolio__projects">
            <template v-for="(project, index) in projects">
              <article class="project-card" :key="index">
                <figure class="project-card__image">
                  <img
                    v-if="!project.image.url"
                    src="@assets/img/line-bg.png"
                    alt="Imagem do Projeto"
                  >
                  <img v-else :src="project.image.url" alt="Imagem do Projeto">
                </figure>

                <div class="project-card__content">
                  <ul class="project-card__tags">
                    <template v-for="(tag, indexTag) in project.tags">
                      <li class="tag" v-if="indexTag < 3" :key="indexTag">
                        <span class="tag-text">{{ tag }}</span>
                        <span class="tag-divider">|</span>
                      </li>
                    </template>
                  </ul>

                  <div class="project-card__text-primary">
                    <h1 class="project-card__title">{{ project.title }}</h1>
                  </div>

                  <div class="project-card__text-desc">
                    <p>{{ project.description }}</p>
                  </div>

                  <template v-if="project.links.github || project.links.demo">
                    <div class="project-card__links">
                      <a
                        v-if="project.links.github"
                        :href="project.links.github"
                        class="link link-tooltip"
                        target="_blank"
                        rel="external"
                        title="Project Repository"
                      >
                        <ion-icon name="logo-github"></ion-icon>
                      </a>
                      <a
                        v-if="project.links.demo"
                        :href="project.links.demo"
                        class="link link-tooltip"
                        target="_blank"
                        rel="external"
                        title="Project Demo"
                      >
                        <ion-icon name="link"></ion-icon>
                      </a>
                    </div>
                  </template>
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
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .project-card {
    width: 100%;
    min-height: 250px;
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
      padding-top: 50%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      overflow: hidden;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
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
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 8px 10px;
        }

        &:last-child {
          .tag-divider {
            display: none;
          }
        }
      }
    }

    &__text-primary {
      padding: 15px 10px;
      border-bottom: 1px solid #eee;
    }

    &__title {
      font-size: 1.5em;
      font-weight: bold;
    }

    &__text-desc {
      padding: 10px;
      flex-grow: 1;

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

    &__links {
      display: flex;
      align-items: center;
      padding: 10px 5px;
      border-top: 1px solid #eee;

      .link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 2%;
        line-height: 1;
        font-size: 1.2em;
      }
    }
  }
}
</style>
