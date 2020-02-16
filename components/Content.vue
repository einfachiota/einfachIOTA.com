<template>
  <div class="content-wrapper">
    <div v-for="(item, index) in items" :key="index" class="content">
      <div class="container">
        <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
          <div class="col center-center">
            <img :src="`/assets/icons/${item.icon}`" alt />
          </div>
          <div class="col">
            <h2>{{ item.heading }}</h2>
            <p>{{ item.description }}</p>
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
            <div class="btn btn--primary">
              <span>{{ item.link.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          layout_inverted: false,
          heading: 'Blog',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
          icon: 'blog.svg',
          list: [
            'All articles from the IOTA Foundation.',
            'Project of the Week',
            'Interviews and more!'
          ],
          link: {
            text: 'Discover Blog',
            url: 'https://blog.einfachiota.com'
          }
        },
        {
          layout_inverted: true,
          heading: 'Learn',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
          icon: 'learn.svg',
          list: [
            'Tutorials and Workshops',
            'Glossary and FAQ',
            'Many examples as Open Source code'
          ],
          link: {
            text: 'Discover Learn',
            url: 'https://learn.einfachiota.com'
          }
        },
        {
          layout_inverted: false,
          heading: 'Shop',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
          icon: 'shop.svg',
          list: [
            'The einfachIOTA Magazine',
            'IOTA Affiliate Links',
            'IOTA and einfachIOTA Merchandise (soon)'
          ],
          link: {
            text: 'Discover Shop',
            url: 'https://shop.einfachiota.com'
          }
        },
        {
          layout_inverted: true,
          heading: 'Community',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
          icon: 'community.svg',
          list: [
            'Community Forum',
            'Discover user blogs or create your own',
            'Get in contact with the Community via the Chat'
          ],
          link: {
            text: 'Discover Community',
            url: 'https://commuity.einfachiota.de'
          }
        },
        {
          layout_inverted: false,
          heading: 'Association',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
          icon: 'verein.svg',
          list: [
            'Our vision and mission',
            'Our constitution',
            'einfachIOTA e.V. A German non-profit association (soon)'
          ],
          link: {
            text: 'Discover Association',
            url: 'https://association.einfachiota.com'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.content {
  padding: 150px 0;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.row {
  display: flex;
  margin: 0 -25px;
  &.inverted {
    flex-direction: row-reverse;
  }
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 25px;
  &.center-center {
    justify-content: center;
    align-items: center;
  }
}
h2 {
  font-family: 'Open Sans';
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
}
p {
}
.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 20px;
      width: 20px;
      background: var(--light);
      border-radius: 10px;
      margin-right: 8px;
    }
    span {
    }
  }
}
</style>
