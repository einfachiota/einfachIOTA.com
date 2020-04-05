<template>
  <div class="page">
    <Hero />
    <div class="wall">
      <div class="preorder-container">
        <img class="preorder" src="@/assets/preorder.jpg" alt="" />
      </div>
      <div class="container">
        <div v-for="(item, index) in items" :key="index" class="content">
          <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
            <div class="image-wrapper">
              <img :src="`/assets/icons/${item.icon}`" alt class="iso-icon" />
            </div>
            <div class="">
              <h2 class="box-heading">{{ item.heading }}</h2>
              <div class="list">
                <div
                  v-for="(listItem, i) in item.list"
                  :key="i"
                  class="list__item"
                >
                  <img src="~/assets/icons/caret.svg" alt />
                  <span>{{ listItem }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero'
export default {
  components: { Hero },
  data() {
    return {
      items: [
        {
          layout_inverted: false,
          heading: 'Events',
          icon: 'blog.svg',
          list: [
            'All articles from the IOTA Foundation.',
            'Project of the Week',
            'Interviews and more!'
          ],
          link: {
            text: 'Discover Blog',
            url: 'https://blog.einfachiota.de'
          }
        },
        {
          layout_inverted: true,
          heading: 'Workshops',
          icon: 'learn-inverted.svg',
          list: [
            'Tutorials and Workshops',
            'Glossary and FAQ',
            'Many examples as Open Source code'
          ],
          link: {
            text: 'Learn coming soon',
            url: '',
            disabled: true
          }
        },
        {
          layout_inverted: true,
          heading: 'Community',
          icon: 'heart-inverted.svg',
          list: [
            'Community Forum',
            'Discover user blogs or create your own',
            'See all events in the IOTA Ecosystem'
          ],
          link: {
            text: 'Learn coming soon',
            url: '',
            disabled: true
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.wall {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .box-heading {
    margin: 10px 0 5px;
  }
  .list__item {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .image-wrapper {
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
}

.preorder-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  .preorder {
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
  margin-bottom: 100px;
}

.content {
  padding: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  &:nth-child(2) {
    margin: 0 50px;
  }
}

.page {
  overflow: hidden;
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
  text-decoration: none;
  transition: var(--transition);
  img {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
  }
  &--primary {
    color: var(--white);
    background-color: var(--primary);
    &:hover {
      background-color: var(--primary_light);
    }
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

.headline {
  margin: 30px;
  margin-top: 50px;
}
.iso-icon {
  width: 300px;
  max-height: 300px;
}
</style>
