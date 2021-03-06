<template>
  <div class="content-wrapper">
    <div v-for="(item, index) in items" :key="index" class="content">
      <div class="container">
        <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
          <div class="col center-center">
            <img :src="`/assets/icons/${item.icon}`" alt class="iso-icon" />
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
            <div
              v-bind:class="{ 'link-disabled': item.link.disabled }"
              class="link btn btn--primary"
            >
              <a :href="item.link.url" target="_blank">{{ item.link.text }}</a>
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
            'The headquarters of the editorial department. The free open source project - Ghost serves as the basis here. Ghost is a professional platform for creating online blogs or online publications. The backend offers the opportunity to manage the editorial team, which can create new content using an editor (similar to Medium). The articles can easily be loaded into other applications using a Javascript library.',
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
          heading: 'Learn',
          description:
            'A learning area is planned. An interactive learning platform with IOTA based content. This content is conveyed in text form, but also in a playful way, for example with a quiz. Here the learner has the opportunity to take different paths (such as different programming languages) and to level his character.',
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
          layout_inverted: false,
          heading: 'Shop',
          description:
            'All previously available magazines are available for purchase as a print or PDF version on the shop page. Merchandise and other products are also being considered. IOTA and Paypal as payment method. Everything ist build on ground up and is open-source.',
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
            'The community page is based on the community platform WoltLab. The community page is the entry point to participate. There is a forum, a comprehensive news system from all crypto messages, a calendar, an FAQ section, a glossary, a chat and the possibility to create your own blog.',
          icon: 'community.svg',
          list: [
            'Community Forum',
            'Discover user blogs or create your own',
            'Get in contact with the Community via the Chat'
          ],
          link: {
            text: 'Discover Community',
            url: 'https://community.einfachiota.de'
          }
        },
        {
          layout_inverted: false,
          heading: 'Association',
          description:
            'Everything about the “association”. Statutes, presentations, membership application, FAQ and everything new from the association (blog article with the tag “association”).',
          icon: 'verein.svg',
          list: [
            'Our vision and mission',
            'Our constitution',
            'einfachIOTA e.V. A German non-profit association (soon)'
          ],
          link: {
            text: 'Association coming soon',
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
.content {
  padding: 150px 0;
  @media only screen and (max-width: 1240px) {
    padding: 130px 50px;
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px 20px;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1240px) {
    width: 100%;
  }
}
.row {
  display: flex;
  margin: 0 -25px;
  &.inverted {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
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
  @media only screen and (max-width: 900px) {
    width: 100%;
    p,
    span {
      font-size: 14px;
    }
    .iso-icon {
      max-width: 80%;
      margin-bottom: 30px;
    }
  }
}

h2 {
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
  @media only screen and (max-width: 500px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 32px;
  }
}

.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 16px;
      width: 20px;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
}

.link {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: var(--light);
  border-radius: 50px;
  font-weight: 900;
  font-size: 14px;
  background-color: var(--primary);
  a {
    color: var(--white);
    text-decoration: none;
  }
  &-disabled {
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
    a {
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 1240px) {
    .content {
      .container {
        width: 100%;
        margin: 0 20px;
      }
    }
  }
}
</style>
