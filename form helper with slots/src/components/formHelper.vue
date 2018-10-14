<template>
  <section>
    <h1>please fiil the form</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="">link1</a></li>
          <li><a href="">link2</a></li>
          <li><a href="">link3</a></li>
          <li><a href="">link4</a></li>
        </ul>
      </div>
    </form>
    </section>
</template>

<script>
    export default {
        name: "formHelper"
    }
</script>

<style scoped>

</style>
