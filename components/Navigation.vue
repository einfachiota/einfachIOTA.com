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
            <a href="https://blog.einfachIOTA.de" target="_blank">Blog</a>
          </div>
          <div class="menu__item">
            <a href="https://learn.einfachIOTA.com" target="_blank">Learn</a>
          </div>
          <div class="menu__item">
            <a href="https://shop.einfachIOTA.com" target="_blank">Shop</a>
          </div>
          <div class="menu__item">
            <a href="https://community.einfachIOTA.de" target="_blank"
              >Community</a
            >
          </div>
          <div class="menu__item">
            <a href="https://accosiation.einfachIOTA.com" target="_blank"
              >Accosiation</a
            >
          </div>
        </div>
        <div class="socials">
          <div class="socials__item">
            <a href="https://twitter.com/einfachIOTA" target="_blank">
              <img src="~/assets/icons/twitter_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a href="https://discord.gg/WdfXseU" target="_blank">
              <img src="~/assets/icons/discord_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a
              href="https://www.youtube.com/channel/UClEhfr5oh-bbH42XoXO4Pqw"
              target="_blank"
            >
              <img src="~/assets/icons/youtube_large.svg" alt />
            </a>
          </div>
        </div>
      </div>
      <div class="nav__user">
        <Advertisement />
      </div>
    </div>
  </div>
</template>

<script>
import Advertisement from './Advertisement'
export default {
  components: { Advertisement }
}
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
      background-color: transparent;
      border-radius: 10px;
      margin: 0 10px;
      padding: 15px 30px;
      transition: all 0.3s ease-in-out;
      .button-clip {
        height: 7px;
        width: 48px;
        position: absolute;
        bottom: -7px;
        transition: all 0.3s ease-in-out;
        &.top {
          bottom: auto;
          top: -7px;
          transform: rotate(180deg);
        }
      }
      a {
        color: black;
        font-size: 16px;
        font-weight: 900;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }
      &.active {
        background-color: var(--primary);
        a {
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
        a {
          filter: invert(100%);
          text-decoration: none;
        }
      }
    }
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
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
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.5);
        }
      }
    }
  }
  &__meta {
    display: flex;
    background-color: transparent;
    height: 40px;
    background: rgb(234, 235, 243);
    background: linear-gradient(
      90deg,
      rgba(234, 235, 243, 0) 0%,
      rgba(234, 235, 243, 0.12368697478991597) 10%,
      rgba(234, 235, 243, 0.2777485994397759) 100%
    );
    .menu__item {
      height: 28px;
      padding: 0 15px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary_0);
      a {
        background-color: none;
        color: black;
        font-size: 12px;
      }
      &:hover {
        cursor: pointer;
        background-color: var(--primary);
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
