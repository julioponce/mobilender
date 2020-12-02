import { ref, computed } from '@vue/composition-api';

const Table = () => import('@/components/Table');

export default {
  name: 'Inspeccionar',
  components: {
    Table,
  },
  setup () {
    const search = ref('');

    const items = [
      { client: { name: 'Michael Lawson', picture: 'https://reqres.in/img/faces/7-image.jpg' }, rfc: 'MMG1002286JSLDRC', credit: '1' },
      { client: { name: 'Lindsay Ferguson', picture: 'https://reqres.in/img/faces/8-image.jpg' }, rfc: 'MMG1002286JSASD', credit: '2' },
      { client: { name: 'Tobias Funke', picture: 'https://reqres.in/img/faces/9-image.jpg' }, rfc: 'MMG1002286JSLDFH', credit: '3' },
      { client: { name: 'Byron Fields', picture: 'https://reqres.in/img/faces/10-image.jpg' }, rfc: 'MMG1002286JSLRTY', credit: '4' },
      { client: { name: 'George Edwards', picture: 'https://reqres.in/img/faces/11-image.jpg' }, rfc: 'MMG1002286JSLWQE', credit: '5' },
      { client: { name: 'Rachel Howell', picture: 'https://reqres.in/img/faces/12-image.jpg' }, rfc: 'MMG1002286JSLHJF', credit: '6' },
    ];

    const itemsFiltered = computed(() => {
      return search ? items.filter((item) => item.client.name.toLowerCase().includes(search.value.toLowerCase())) : items;
    });

    return {
      search,
      itemsFiltered,
    };
  },
};
