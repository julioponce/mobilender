import store from '@/store';
import router from '@/router';
import { useGetters } from 'vuex-composition-helpers';

const LoginBox = () => import('@/components/LoginBox');

export default {
  name: 'Login',
  components: {
    LoginBox,
  },
  setup () {
    const { account } = useGetters(store, ['account']);

    if (account.value.data?.token) router.push('/home');

    return {};
  },
};
