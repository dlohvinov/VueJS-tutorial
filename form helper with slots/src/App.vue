<template>
  <div>
    <form-helper>
      <div slot="form-helper">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <hr>

      <component v-bind:is="form-one">

      </component>

  </div>
</template>

<script>
  // import formHelper from './components/formHelper';
  import formOne from './components/formOne';
  import formTwo from './components/formTwo';
export default {
  components:{
    'form-one' : formOne,
    'form-two' : formTwo,
  },
  data () {
    return {
        component: 'form-two'
    }
  }
}
</script>

<style>
  h1{
    text-align: center;
  }
  form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
  #useful-links ul{
    padding: 0;
  }
  #useful-links li{
    display: inline-block;
    margin-right: 10px;
  }
  form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
  }
  #form-header{
    background: #ddd;
    border: 1px solid #bbb;
  }
</style>
