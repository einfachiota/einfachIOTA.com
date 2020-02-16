<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col center-center">
          <img src="~/assets/icons/blog.svg" alt />
        </div>
        <div class="col">
          <h2>Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>
          <div class="list">
            <div class="list__item">
              <img src alt />
              <span>All the News from the foundation to the community</span>
            </div>
            <div class="list__item">
              <img src alt />
              <span>Get insights from many community Projects</span>
            </div>
            <div class="list__item">
              <img src alt />
              <span>We also interview People from around the community</span>
            </div>
          </div>
          <div class="btn btn--primary">
            <span>Discover News</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content {
  padding: 100px 0;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.row {
  display: flex;
  margin: 0 -25px;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 25px;
  &.center-center {
    justify-content: center;
    align-items: center;
  }
}
h2 {
  font-family: 'Open Sans';
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
}
p {
}
.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 20px;
      width: 20px;
      background: var(--light);
      border-radius: 10px;
      margin-right: 8px;
    }
    span {
    }
  }
}
</style>
