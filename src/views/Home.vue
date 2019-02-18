<template>
  <div class="content-home">
    <div class="container">
      <div class="card card-profile">
        <div class="card-header flex">
          <div class="avatar flex">
            <img src="../assets/img/avatar.jpg" class="shadow" alt="Avatar">
          </div>
        </div>
        <div class="card-content">
          <div class="card-content__info personal-info">
            <h1 class="title name">Robson Braga de Queiroz,
              <span class="age">27</span>
            </h1>
            <h2 class="subtitle city f-light">Florianópolis, SC</h2>
          </div>
          <div class="card-content__info professional-info">
            <h3 class="business-job">
              Desenvolvedor Frontend na <a href="http://way2.com.br/" target="_blank" rel="noopener">Way2 Tecnologia</a>
            </h3>
            <h4 class="education f-light">
              Faculdade de Tecnologia e Ciências Bacharelado, Sistemas de Informação
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
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
      border-radius: 100%;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 165px;
        height: 165px;
        border-radius: 100%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .card-content {
    padding: 85px 0 0;
    text-align: center;

    &__info {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .title {
      font-size: 1.6em;

      .age {
        font-weight: 400;
      }
    }
    .subtitle {
      font-size: 1.2em;
    }
  }
}
</style>
