<template>
  <div class="container">
    <div class="hero">
      <video id="bg-video" autoplay muted loop>
        <source src="~/assets/09_events.mp4" type="video/mp4" />
      </video>
      <div class="layer">
        <div class="hello">
          <h1 class="title">einfachIOTA.</h1>
          <h2 class="subtitle">IOTA for everyone.</h2>
        </div>
      </div>
    </div>
    <div class="content ecosystem">
      <ul class="ecosystem-entries">
        <li>Blog</li>
        <li>Learn</li>
        <li>Shop</li>
        <li>Community</li>
        <li>Verein</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0;
  padding: 0;
}

.hero {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    filter: blur(5px);
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.75;
    background: rgb(0, 183, 197);
    background: radial-gradient(
      circle,
      rgba(0, 183, 197, 0.9) 0%,
      rgba(0, 183, 197, 0.6) 100%
    );
    .hello {
      position: absolute;
      top: 75%;
      left: 0;
      color: var(--white);
      text-align: left;
      padding: 50px;
      max-width: 50%;
      height: 100%;
    }
  }
}

.content {
  display: block;
  width: 100%;
  height: 100vh;
  .ecosystem {
    .ecosystem-entries {
      list-style: none;
      display: flex;
      flex-wrap: nowrap;
    }
  }
}

.logo {
  height: 15vh;
  padding-bottom: 20px;
}

.title {
  display: block;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
  font-size: 3.5em;
}

.subtitle {
  font-weight: 300;
  color: var(--darker);
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
