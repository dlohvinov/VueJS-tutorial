<template>
    <header>
      <h1 @click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
  import {bus} from '../main';
    export default {
        name: "header",
      props: {
        title: {}
      },
      data(){
          return{
            // title: 'Vue Ninjas'
          }
      },
      methods: {
          changeTitle: function () {
            // this.$emit('changeTitle', 'Just -- -- Vue')
            this.title = 'Just -- new -- Vue -- title';
            bus.$emit('titleChanged', 'Just -- new -- Vue -- title');
          }
      }
    }
</script>

<style scoped>
   header {
     background: #253;
   }
  h1 {
    color: #222;
    text-align: center;
    margin: 0;
  }
</style>
