import Vue from 'vue';
import Vuex from 'vuex';
import storage from 'vuejs-storage';

import Account from '@/store/modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Account,
  },
  plugins: [
    storage({
      namespace: 'store',
      keys: [
        'Account.account',
      ],
    }),
  ],
});
