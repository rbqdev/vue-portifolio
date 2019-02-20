<template>
  <div class="content-home">
    <div class="container">
      <div class="card card-profile shadow">
        <div class="card-header flex">
          <div class="avatar flex">
            <img src="../assets/img/avatar.jpg" class="shadow" alt="Avatar">
          </div>
        </div>
        <!-- card-header -->
        <div class="card-content">
          <div class="card-content__info personal-info">
            <h1 class="title name">Robson Braga de Queiroz</h1>
            <h2 class="subtitle city text-light">Florianópolis, SC</h2>
          </div>
          <div class="card-content__info professional-info">
            <h3 class="work">
              Desenvolvedor Frontend na
              <a
                href="http://way2.com.br/"
                class="company"
                target="_blank"
                rel="noopener"
              >Way2 Tecnologia</a>
            </h3>
            <h4 class="education text-light">
              Graduado em
              <strong class="course text-regular">Sistemas de Informação</strong> pela
              <strong class="school text-regular">Faculdade de Tecnologia e Ciências</strong>
            </h4>
          </div>
        </div>
        <!-- card-content -->
        <div class="card-footer">
          <p>Sou Desenvolvedor desde 2012. Meus objetivos profissionais se resumem a ser um programador de excelência, prezando pela qualidade do produto, do código, do trabalho em equipe, e estar sempre buscando um novo aprendizado.</p>
          <router-link to="/portifolio" class="btn btn-default">Ver meu potifólio</router-link>
        </div>
        <!-- card-footer -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";

.card-profile {
  margin-top: 100px;
  min-height: 400px;

  .card-header {
    min-height: 60px;
    justify-content: center;

    .avatar {
      position: relative;
      width: 100%;

      img {
        position: absolute;
        top: calc(50% - -10px);
        left: 50%;
        width: 180px;
        height: 180px;
        border-radius: 100%;
        border: 2px solid $default;
        transform: translate(-50%, -50%);
      }
    }
  }
  .card-content {
    padding: 85px 25px 0;
    text-align: center;

    &__info {
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
}

.card-footer {
  border-top: 1px solid #eee;
  margin-top: 35px;
  padding: 35px 25px;
  text-align: center;

  .btn {
    margin: 35px 0 0;
  }
}
</style>
