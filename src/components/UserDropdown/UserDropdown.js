import { computed, ref } from '@vue/composition-api';
import store from '@/store';
import { useActions, useGetters } from 'vuex-composition-helpers';

export default {
  name: 'UserDropdown',
  setup (props, context) {
    const {
      account,
    } = useGetters(store, [
      'account',
    ]);

    const {
      setAccountFulfilled,
    } = useActions(store, [
      'setAccountFulfilled',
    ]);

    const user = ref(account.value?.data?.user);
    const name = computed(() => `${user.value?.first_name} ${user.value?.last_name}`);

    const logout = () => {
      setAccountFulfilled({});
      context.root.$router.push('/login');
    };

    return {
      user,
      name,
      logout,
    };
  },
};
