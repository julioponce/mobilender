import {
  SET_ACCOUNT_FULFILLED,
  SET_ACCOUNT_REJECTED,
} from '@/store/mutation-types';

const state = {
  account: {
    data: {},
    error: '',
  },
};

const getters = {
  account: (state) => state.account,
};

const mutations = {
  [SET_ACCOUNT_FULFILLED]: (state, payload) => {
    state.account = {
      data: payload,
      error: null,
    };
  },
  [SET_ACCOUNT_REJECTED]: (state, payload) => {
    state.account = {
      data: null,
      error: payload.message,
    };
  },
};

const actions = {
  setAccountFulfilled: async ({ commit }, payload) => {
    commit(SET_ACCOUNT_FULFILLED, payload);
  },
  setAccountRejected: async ({ commit, state }, payload) => {
    commit(SET_ACCOUNT_REJECTED, payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
