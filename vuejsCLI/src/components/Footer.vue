<template>
    <footer>
      <p>{{copyright}}{{title}}</p>
    </footer>
</template>

<script>
  import {bus} from '../main';
    export default {
        name: "Footer",
      props: {
          title: {}
      },
      data(){
          return{
            copyright: 'Copyright 2018'
          }
      },
      created(){
          bus.$on('titleChanged', (data) => {
            this.title = data;
          })
      }
    }
</script>

<style scoped>
  footer {
    padding: 20px 0;
    background: #243;
  }
  p {
    text-align: center;
    color: #fff;
  }
</style>
