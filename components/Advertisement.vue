<template>
  <div class="magazine-ad">
    <span class="magazine-text">{{ $t('advertisement.text') }}</span>
    <span class="magazine-text__mobile">{{
      $t('advertisement.text_short')
    }}</span>
    <a :href="url" target="_blank" class="el-button el-button--primary">
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
  font-family: 'Roboto Slab', serif;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 1000;
  .magazine-text__mobile {
    display: none;
  }
  .el-button {
    animation: shake-animation 3.72s ease infinite;
    transform-origin: 50% 50%;
    margin-left: 20px;
    text-decoration: none;
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
