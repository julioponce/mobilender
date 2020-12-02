import store from '@/store';
import router from '@/router';
import axios from 'axios';
import { useActions } from 'vuex-composition-helpers';
import { reactive, toRefs } from '@vue/composition-api';
import notifyError from '@/composables/useErrorNotification';

export default {
  name: 'LoginBox',
  setup (props, context) {
    const state = reactive({
      login: {
        email: '',
        password: '',
      },
      loading: false,
    });

    const {
      setAccountFulfilled,
      setAccountRejected,
    } = useActions(store, [
      'setAccountFulfilled',
      'setAccountRejected',
    ]);

    const validateForm = () => {
      context.refs.form.validate(true);
      const errorBag = Object.values(context.refs.form.errorBag);

      if (errorBag.includes(true)) {
        state.loading = false;
        return false;
      }

      return true;
    };

    const signIn = async () => {
      state.loading = true;

      if (!validateForm()) return false;

      const loginData = {
        email: state.login.email,
        password: state.login.password,
      };

      try {
        const response = await axios.post('https://reqres.in/api/login', loginData);
        if (response) {
          const { token } = response.data;

          const { data } = await axios.get('https://reqres.in/api/users/1');
          handleSignIn({ token, user: data.data });
        }
      } catch (error) {
        handleSignInError(error);
      }
    };

    const handleSignIn = async (data) => {
      setAccountFulfilled(data);
      resetLogin();
      router.push('/home');
    };

    const handleSignInError = (error) => {
      state.loading = false;
      setAccountRejected(error);
      notifyError(error);
    };

    const resetLogin = () => {
      state.loading = false;
      state.login.credential = '';
      state.login.password = '';
    };

    const rules = {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
    };

    return {
      ...toRefs(state),
      signIn,
      rules,
    };
  },
};
