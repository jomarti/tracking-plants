import '@/assets/styles';
import vClickOutSide from 'v-click-outside';
import Vue from 'vue';
import App from './App.vue';
import './configFirebase';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(vClickOutSide);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
