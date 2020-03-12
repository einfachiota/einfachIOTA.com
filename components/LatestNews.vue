<template>
  <div class="latest-news">
    <NewsCard :post="post" v-for="post in posts" v-bind:key="post.id" />
  </div>
</template>

<script>
import GhostContentAPI from '@tryghost/content-api'
import NewsCard from '@/components/NewsCard.vue'
const api = new GhostContentAPI({
  url: process.env.VUE_APP_API_URL,
  key: process.env.VUE_APP_API_KEY,
  version: 'v2'
})
export default {
  name: 'LatestNews',
  components: {
    NewsCard
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // fetch 5 posts, including related tags and authors
      api.posts
        .browse({
          limit: 3,
          include: 'tags,authors',
          filter: 'tag:en'
        })
        .then((posts) => {
          this.posts = posts
          console.log('posts', posts)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.latest-news {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 30px;
  margin-top: 50px;
}
@media only screen and (max-width: 920px) {
  .latest-news {
    flex-wrap: wrap;
  }
}
</style>
