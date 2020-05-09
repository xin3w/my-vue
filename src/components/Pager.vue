<template>
  <div class="text-center">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous" @click.prevent="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li v-for="(num,index) in pageNumber" :key="index">
          <router-link :to="{name:'List',query:{page:num}}">{{num}}</router-link>
        </li>

        <li>
          <a href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'pager.vue',
  props: ['pageNumber'],
  data () {
    return {}
  },
  async created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    prePage () {},
    nextPage () {}
  }
}
</script>
<style scoped>
  .router-link-exact-active {background: #ccc; color:#fff;}
</style>
