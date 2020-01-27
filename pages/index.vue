<template>
  <div class="container">
    <div>
      <img class="logo" src="~/assets/logo.svg" alt="einfachIOTA logo" />
      <div class="greeting-box">
        <h2 class="greeting">{{ $t('greeting') }}</h2>
      </div>
      <h1 class="title">einfachIOTA.com</h1>
      <!-- 
        <h2 class="subtitle">Earn IOTA with the magazine via reflinks</h2>
        <div class="more">
          <nuxt-link to="/reflink">Learn more</nuxt-link>
        </div>
      -->
      <h2 class="subtitle">The first einfachIOTA magazine.</h2>
      <div class="bullet-points">
        <p>IOTA explained</p>
        <p>Interview with Dominik Schiener</p>
        <p>and much more...</p>
      </div>
      <a :href="url" target="_blank" class="el-button el-button--primary">
        {{ $t('advertisement.button') }}
      </a>
      <br />
      <br />
      <img
        class="magazine"
        src="~/assets/front_mag01_en.jpg"
        alt="einfachIOTA magazine"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: `${process.env.shopUrl}?lang=en&refLink=${process.env.refAddress}`
    }
  }
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

.greeting-box {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 20px;
}

.greeting {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    var(--white),
    var(--primary),
    var(--white)
  );
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

.magazine {
  width: 100%;
  border-radius: 10px;
}
/* Animate Background Image */

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>
