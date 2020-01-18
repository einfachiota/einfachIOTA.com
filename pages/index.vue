<template>
  <div class="container">
    <div>
      <img class="logo" src="~/assets/logo.svg" alt="einfachIOTA logo" />
      <h1 class="title">einfachIOTA.com</h1>
      <h2 class="subtitle">Earn IOTA with the magazine via reflinks</h2>
      <div class="more">
        <nuxt-link to="/reflink">Learn more</nuxt-link>
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
  padding-bottom: 20px;
}

.title {
  display: block;
  font-weight: 300;
  color: var(--darker);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: var(--dark-transp);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.more {
  padding-top: 15px;
  font-size: 1.5em;
}
</style>
