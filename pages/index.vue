<template>
  <div class="page">
    <Navigation />
    <Hero />
    <Content />
    <Socials />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Content from '../components/Content'
import Socials from '../components/Socials'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Navigation, Hero, Content, Socials, Footer },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
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
  &--primary {
    color: var(--white);
    background-color: var(--primary);
  }
}

.container {
  padding: 0;
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
