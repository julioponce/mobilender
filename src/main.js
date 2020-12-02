import Vue from 'vue';

import router from '@/router';
import VueCompositionApi from '@vue/composition-api';
import vuetify from '@/plugins/vuetify';
import App from '@/components/App';

import '@/assets/scss/main.scss';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

export default app;
