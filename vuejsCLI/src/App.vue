<template>
<div>
  <app-header v-bind:title="title"></app-header>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>  <!--sending prop to ninjas.vue. ninjas - var, that we recive, "ninjas" - local array name-->
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
  import header from './components/Header'
  import ninjas from './components/Ninjas'
  import footer from './components/Footer'


export default {
    components: {
      'app-header' : header,
      'app-ninjas' : ninjas,
      'app-footer' : footer
    },
  data () {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
      , title: 'VueJS'
    }
  },
  methods: {
      // updateTitle: function (updatedTitle) {
      //   this.title = updatedTitle;
      // }
  }
}
</script>

<style>

</style>
