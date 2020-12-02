import Vuetify from 'vuetify';
import Router from 'vue-router';
import mount from '../../../../jest/factories/mount';
import routes from '../../../router/routes';
import Breadcrumb from '../Breadcrumb.vue';

describe('Breadcrumb', () => {
  let vuetify;
  const router = new Router({
    routes: routes,
  });

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('Renders', () => {
    const wrapper = mount({
      component: Breadcrumb,
      router,
      vuetify,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
