<template>
  <div class="socials section">
    <h3>Follow us</h3>
    <div class="socials-list">
      <img src="~/assets/icons/twitter_large.svg" alt="" class="social" />
      <img src="~/assets/icons/discord_large.svg" alt="" class="social" />
      <img src="~/assets/icons/youtube_large.svg" alt="" class="social" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.socials.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: var(--light);
  h3 {
    color: var(--dark);
    font-family: 'Open Sans';
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 20px;
  }
  p {
    color: var(--dark);
  }
  .socials-list {
    display: flex;
    justify-content: center;
    .social {
      margin: 0 25px;
    }
  }
}
</style>
