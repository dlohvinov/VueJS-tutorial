<template>
  <div>
    <show-blogs></show-blogs>
    <add-blog></add-blog>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog';
  import showBlogs from './components/showBlogs';
  import listBlogs from './components/listBlogs';

  export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs
    },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
