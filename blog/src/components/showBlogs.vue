<template>
  <div id="show-blogs" v-theme:column="'narrow'"><!--were sending were in '' because we sending string-->
    <h1>All Blog Articles:</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>


<script>
  import searchMixin from '../mixins/searchMixin'

    export default {
      data() {
        return {
          blogs: [],
          search: ''
        }
      },
      methods: {

      },
      created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (data) {
            this.blogs = data.body.slice(0,10);
        })
      },
      computed: {

      },
      directives:{
        'rainbow': {
          bind(el, binding, vnode) {
            el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
        }
      },
      filters: {
        'snippet': function (value) {
          return value.slice(0, 100) + "..."
        }
      },
      mixins: [searchMixin]
    }
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>
