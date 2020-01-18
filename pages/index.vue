<template>
  <div class="container">
    <div>
      <img class="logo" src="~/assets/logo.svg" alt="einfachIOTA logo" />
      <h1 class="title">
        einfachIOTA.com
      </h1>
      <h2 class="subtitle">
        Earn IOTA with the magazine
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Learn more
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  height: 15vh;
}

.title {
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
