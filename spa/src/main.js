import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Listing from './components/Listing.vue';
import Hello from './components/Hello.vue';
import Metamask from './components/Metamask.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '/listing/:id',
      name: 'listing',
      component: Listing,
      props: true,
    },
    {
      path: '/test',
      name: 'metamask',
      component: Metamask,
    }
  ],
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
