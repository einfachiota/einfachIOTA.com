<template>
  <div class="hero">
    <video id="bg-video" autoplay muted loop>
      <source src="~/assets/09_events.mp4" type="video/mp4" />
    </video>
    <div class="layer"></div>
    <div class="hello">
      <h1 class="title">einfachIOTA</h1>
      <h2 class="subtitle">IOTA explained simple</h2>
    </div>
    <img src="~/assets/icons/rounded-edge.svg" class="rounded-edge" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero {
  position: relative;
  height: calc(100vh - 100px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  margin-top: 100px;
  .rounded-edge {
    position: absolute;
    bottom: -3px;
    right: -3px;
  }
  .hello {
    position: absolute;
    top: 75%;
    left: 0;
    color: var(--white);
    text-align: left;
    padding: 25px 50px;
    max-width: 50%;
    height: auto;
    border-radius: 0 20px 20px 0;
    background-color: var(--white);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    h1 {
      color: var(--dark);
      font-family: 'Open Sans';
      font-weight: 900;
      font-size: 64px;
    }
    h2 {
      color: var(--dark);
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 32px;
      padding-bottom: 0;
    }
  }
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
  }
}
.hero {
  text-align: center;
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}
</style>
