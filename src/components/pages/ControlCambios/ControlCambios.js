const Indicator = () => import('@/components/Indicator');
const Table = () => import('@/components/Table');

export default {
  name: 'ControlCambios',
  components: {
    Indicator,
    Table,
  },
  setup () {
    const items = [
      { id: 1, date: '02/08/20', file: { name: 'clientes_credito.xml', path: '' }, update: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
      { id: 2, date: '02/08/20', file: { name: 'clientes_credito.xml', path: '' }, update: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
      { id: 3, date: '02/08/20', file: { name: 'clientes_credito.xml', path: '' }, update: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
      { id: 4, date: '02/08/20', file: { name: 'clientes_credito.xml', path: '' }, update: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
      { id: 5, date: '02/08/20', file: { name: 'clientes_credito.xml', path: '' }, update: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
    ];

    return { items };
  },
};
