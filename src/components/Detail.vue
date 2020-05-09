<template>
  <div v-if="data">
    <h3>影片详情</h3>
    <hr>
    <div class="media">
      <div class="media-left media-middle">
        <a href="#">
          <img class="media-object" :src="data.images.large">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{data.title}}</h4>
        <p>{{data.summary}}</p>
        <a class="btn btn-primary" :href="data.share_url" target="_blank">返回豆瓣页面</a>
      </div>
    </div>
    <hr>
    <h3>视频列表</h3>
    <video :src="data.trailer_urls[0]" autoplay style="width:100%; height:auto;" controls></video>
  </div>
</template>

<script>
export default {
  name: 'detail.vue',
  props: {},
  data () {
    return {
      data: null
    }
  },
  computed: {},
  watch: {},
  async created () {
    let {data} = await this.$axios.get('/apis/v2/movie/subject/' + this.$route.params.id)
    this.data = data
  },
  mounted () {},
  methods: {}
}
</script>
