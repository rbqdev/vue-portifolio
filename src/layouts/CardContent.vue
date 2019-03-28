<template>
  <div class="content">
    <div class="container">
      <div class="card card-layout shadow">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-content">
          <slot name="content"></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-layout {
  min-height: calc(100vh - 120px);
  overflow: auto;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
  .card {
    border-radius: 0;
  }
}
</style>
