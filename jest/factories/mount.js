import {
  createLocalVue,
  mount as utilsMount,
} from '@vue/test-utils';
import CompositionApi from '@vue/composition-api';
import Router from 'vue-router';

const localVue = createLocalVue();

localVue.use(CompositionApi);
localVue.use(Router);

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);

const mount = ({
  component,
  vuetify = null,
  router = null,
  attachTo = '#root',
  propsData = {},
  slots = {},
  listeners = {},
  stubs = {},
  attrs = {},
  mocks = {},
}) => {
  return utilsMount(component, {
    localVue,
    vuetify,
    router,
    attachTo: attachTo,
    propsData: {
      ...propsData,
    },
    attrs: {
      ...attrs,
    },
    slots: {
      ...slots,
    },
    listeners: {
      ...listeners,
    },
    stubs: {
      ...stubs,
    },
    mocks: {
      ...mocks,
    },
  });
};

export default mount;
