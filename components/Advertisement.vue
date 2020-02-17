<template>
  <div class="magazine-ad">
    <a :href="url" target="_blank" class="btn btn--primary">
      <img src="~/assets/icons/onsale.svg" />
      {{ $t('advertisement.button') }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: `${process.env.shopUrl}?lang=en&refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.magazine-ad {
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  color: var(--dark);
  font-size: 24px;
  font-weight: bold;
  font-family: 'Open Sans', serif;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 1000;
  .mag-mini {
    height: 50px;
  }
  .magazine-text {
    font-size: 20px;
    margin-right: 25px;
  }
  .magazine-text__mobile {
    display: none;
  }
}
@media only screen and (max-width: 920px) {
  .magazine-ad {
    span {
      font-size: 16px;
    }
  }
}
@media only screen and (max-width: 424px) {
  .magazine-ad {
    span {
      display: none;
    }
    .magazine-text {
      display: none;
    }
    .magazine-text__mobile {
      display: block;
    }
  }
}
</style>
