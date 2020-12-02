import { computed } from '@vue/composition-api';

export default {
  name: 'Indicator',
  props: {
    num: Number,
  },
  setup ({ num }) {
    const index = computed(() => num < 10 ? '0' + num : num);

    return {
      index,
    };
  },
};
