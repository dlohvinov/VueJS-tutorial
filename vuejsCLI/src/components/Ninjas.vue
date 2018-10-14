<template>
  <section>
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show=!ninja.show">
        <h2>{{ninja.name}} </h2> -> <p v-show="ninja.show">{{ninja.speciality}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: {
      ninjas: {
        type: Array
      }
    },
    name: "Footer",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

  section{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
