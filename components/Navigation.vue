<template>
  <div class="nav">
    <div class="nav__primary">
      <div class="logo">
        <img src="~/assets/icons/logo.svg" alt />
      </div>
      <div class="menu"></div>
    </div>
    <div class="nav__secondary">
      <div class="nav__meta">
        <div class="menu">
          <div class="menu__item">
            <span>Blog</span>
          </div>
          <div class="menu__item">
            <span>Learn</span>
          </div>
          <div class="menu__item">
            <span>Shop</span>
          </div>
          <div class="menu__item">
            <span>Community</span>
          </div>
          <div class="menu__item">
            <span>Accosiation</span>
          </div>
        </div>
        <div class="socials">
          <div class="socials__item">
            <img src alt />
          </div>
          <div class="socials__item">
            <img src alt />
          </div>
          <div class="socials__item">
            <img src alt />
          </div>
        </div>
      </div>
      <div class="nav__user">
        <div class="btn btn--primary">
          <span>Magazine pre-sale</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  z-index: 1000;
  background-color: var(--white);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  .logo {
    height: 70px;
    min-width: 70px;
    background-color: var(--light);
    border-radius: 100%;
    padding: 0;
    margin: 15px;
  }
  .menu {
    display: flex;
    align-items: center;
    &__item {
      position: relative;
      display: flex;
      justify-content: center;
      background-color: var(--light_50);
      border-radius: 10px;
      margin: 0 10px;
      padding: 15px 30px;
      .button-clip {
        height: 7px;
        width: 48px;
        position: absolute;
        bottom: -7px;
        transition: var(--transition);
        &.top {
          bottom: auto;
          top: -7px;
          transform: rotate(180deg);
        }
      }
      span {
        font-size: 16px;
        font-weight: 900;
      }
      &.active {
        background-color: var(--primary);
        span {
          color: var(--white);
        }
        .button-clip {
          bottom: 0;
          &.top {
            top: 0;
          }
        }
      }
      &:hover {
        background-color: var(--primary);
      }
    }
  }
  .socials {
    display: flex;
    align-items: center;
    height: 40px;
    &__item {
      height: 30px;
      width: 30px;
      border-radius: 5px;
      background-color: var(--light);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2.5px;
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
  &__meta {
    display: flex;
    background-color: var(--light_50);
    height: 40px;
    .menu__item {
      height: 30px;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 12px;
      }
    }
  }
  &__user {
    height: 60px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__primary {
    display: flex;
    width: auto;
  }
  &__secondary {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
  }
}
</style>
