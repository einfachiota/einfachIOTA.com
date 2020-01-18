<template>
  <div class="container">
    <div>
      <nuxt-link to="/">
        <img class="logo" src="~/assets/logo.svg" alt="einfachIOTA logo" />
      </nuxt-link>
      <h1 class="title">Earn IOTA with the magazine</h1>
      <h1 class="subtitle">if someone pays with IOTA</h1>
      <ul class="list">
        <li class="list-item">
          <div class="numberCircle">1.</div>
          <div class="step">Generate a IOTA address.</div>
        </li>
        <li class="list-item">
          <div class="numberCircle">2.</div>
          <div class="step">Create a ref link.</div>
        </li>
        <li class="list-item">
          <div class="numberCircle">3.</div>
          <div class="step">Share it.</div>
        </li>
      </ul>
      <div class="generator">
        <h2>IOTA Ref Link generator</h2>
        <a
          class="howtoiota"
          target="_blank"
          href="https://docs.iota.org/docs/wallets/0.1/trinity/how-to-guides/quickstart"
        >
          Learn how to get an IOTA address.
        </a>
        <IOTARefLinkGenerator />
      </div>
    </div>
  </div>
</template>

<script>
import IOTARefLinkGenerator from '~/components/IOTARefLinkGenerator.vue'
export default {
  components: {
    IOTARefLinkGenerator
  },
  methods: {}
}
</script>

<style lang="scss">
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

.list {
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style: none;
  li {
    display: flex;
    font-size: 2em;
    margin-top: 50px;
  }
}

.numberCircle {
  display: block;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  padding: 8px;
  border: 2px solid var(--primary);
  text-align: center;
  color: var(--primary);
}

.step {
  margin-top: 8px;
  margin-left: 20px;
}

.links {
  padding-left: 5px;
  font-size: 0.5em;
}

.generator {
  margin-top: 100px;
}

.howtoiota {
  display: block;
  margin: 15px 0;
}
</style>
