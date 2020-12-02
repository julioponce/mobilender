import { computed } from '@vue/composition-api';
import store from '@/store';
import { useGetters } from 'vuex-composition-helpers';

const Brand = () => import('@/components/Brand');
const Breadcrumb = () => import('@/components/Breadcrumb');
const UserDropdown = () => import('@/components/UserDropdown');

export default {
  name: 'Toolbar',
  components: {
    Brand,
    Breadcrumb,
    UserDropdown,
  },
  setup () {
    const {
      account,
    } = useGetters(store, [
      'account',
    ]);

    const token = computed(() => account.value?.data?.token);

    return {
      token,
    };
  },
};
