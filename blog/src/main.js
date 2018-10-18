import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
    routes: Routes
});

//Costom directives
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {//gets value from value property of el
      el.style.maxWidth = '1200px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg == 'column') {
      // el.style.background = "#ddd";
    }
  }
});


//Filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
