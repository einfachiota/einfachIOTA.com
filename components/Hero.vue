<template>
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
</style>
