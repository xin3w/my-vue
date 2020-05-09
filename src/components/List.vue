<template>
  <div>
    <h3>{{title}}</h3>
    <hr>
    <div class="row">
      <div class="col-xs-6 col-md-3" v-for="(item,index) in subjects" :key="index">
        <router-link :to="{name:'Detail',params:{id:item.id}}" class="thumbnail">
          <img
            style="width:270px; height:381px;"
            :src="item.images.small"
            referrer="no-referrer|origin|unsafe-url"
            alt
          >
          <div class="caption">
            <p>{{item.title}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <pager :pageNumber='pageNumber'></pager>
  </div>
</template>

<script>
import Pager from './Pager.vue'
export default {
  name: 'list.vue',
  props: {},
  components: {
    Pager
  },
  data () {
    return {
      title: '',
      subjects: [],
      pageNumber: 0
    }
  },
  computed: {},
  watch: {
    $route () {
      this.getList((this.$route.query.page - 1) * 20)
    }
  },
  created () {
    let start = this.$route.query.page ? (this.$route.query.page - 1) * 20 : 0

    if (start === 0) {
      this.$router.push({
        path: '/',
        query: {
          page: 1
        }
      })
    }
    this.getList(start)
  },
  mounted () {},
  methods: {
    async getList (start) {
      let {data: { subjects, title, count, total }} = await this.$axios.get('/apis/v2/movie/top250?count=20&start=' + start)
      this.title = title
      this.subjects = subjects
      this.pageNumber = Math.ceil(total / count)
    }
  }
}
</script>
