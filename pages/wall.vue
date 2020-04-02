<template>
  <div class="page">
    <Hero />
    <div class="wall">
      <div class="preorde-container">
        <img class="preorde" src="@/assets/preorder.jpg" alt="" />
      </div>
      <div class="container">
        <div v-for="(item, index) in items" :key="index" class="content">
          <div class="container">
            <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
              <div class="col center-center">
                <img :src="`/assets/icons/${item.icon}`" alt class="iso-icon" />
              </div>
              <div class="col">
                <h2>{{ item.heading }}</h2>
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
          icon: 'learn.svg',
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
          icon: 'community.svg',
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
  max-width: 800px;
}

.preorder-container {
  justify-content: center;
  width: 100%;
}

.preorder {
  padding: 0 auto;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto;
  margin-top: 100px;
}

.content {
  max-width: 30%;
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
