<template>
  <div class="nav">
    <div class="nav__primary">
      <div class="logo">
        <img src alt />
      </div>
      <div class="menu">
        <div class="menu__item active">
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
  display: flex;
  justify-content: space-between;
  height: 100px;
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
      background-color: var(--light_50);
      border-radius: 10px;
      margin: 0 10px;
      padding: 15px 30px;
      span {
        font-size: 16px;
        font-weight: 900;
      }
      &.active {
        background-color: var(--primary);
        span {
          color: var(--white);
        }
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
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 30px;
    background-color: var(--light);
    border-radius: 50px;
    font-weight: 900;
    font-size: 14px;
  }
}
</style>
