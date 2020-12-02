const Indicator = () => import('@/components/Indicator');
const List = () => import('@/components/List');

export default {
  name: 'ListadoSoftware',
  components: {
    Indicator,
    List,
  },
  setup () {
    const items = [
      { id: 1, name: 'Siebel', type: 'Crédito Grupal', path: '/home/listado-de-software/siebel' },
      { id: 2, name: 'Bantotal', type: 'Crédito Grupal', path: '/home/listado-de-software/bantotal' },
      { id: 3, name: 'Mobilender', type: 'Crédito Grupal', path: '/home/listado-de-software/mobilender' },
      { id: 4, name: 'Alivio', type: 'Crédito Grupal', path: '/home/listado-de-software/alivio' },
      { id: 5, name: 'Ìtaca Capital', type: 'Crédito Grupal', path: '/home/listado-de-software/ítaca-capital' },
    ];

    return {
      items,
    };
  },
};
