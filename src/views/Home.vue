<template>
  <div class="content-home">
    <div class="container">
      <div class="card card-profile shadow">
        <div class="card-header flex">
          <div class="avatar flex">
            <!-- <img src="../assets/img/avatar.jpg" class="image shadow" alt="Avatar"> -->
            <ion-icon name="person" class="image"></ion-icon>
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
              Frontend Developer at
              <a
                href="#0"
                class="company"
                target="_blank"
                rel="noopener"
              >Company Name</a>
            </h3>
            <h4
              class="education"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
          </div>
        </div>
        <!-- card-content -->
        <div class="card-footer">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <router-link to="/portifolio" class="btn btn-default">Ver Portifólio</router-link>
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
  min-height: 400px;

  .card-header {
    padding-top: 40px;
    min-height: 60px;
    justify-content: center;

    .avatar {
      position: relative;
      width: 100%;

      .image {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border-radius: 100%;
        border: 2px solid #172b4d;
        padding: 15px;
        visibility: visible;
      }
    }
  }
  .card-content {
    padding: 25px;
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
  margin-top: 15px;
  padding: 35px 25px;
  text-align: center;

  .btn {
    margin: 35px 0 0;
  }
}

@media only screen and (max-width: 767px) {
  .content-home {
    .container {
      padding: 0;
    }
    .card {
      border-radius: 0;
    }
  }
}
</style>
