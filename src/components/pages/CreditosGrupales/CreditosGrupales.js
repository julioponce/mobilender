import { normalize } from '@/config/filters';

const Table = () => import('@/components/Table');

export default {
  name: 'CreditosGrupales',
  components: {
    Table,
  },
  filters: {
    normalize,
  },
  setup () {
    const items = [
      { id: 1, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: 'mdi-file-download', link: '' }] },
      { id: 2, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'En proceso', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 3, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Rechazado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 4, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 5, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 6, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 7, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 8, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 9, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 10, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
      { id: 11, file: { name: 'clientes_credito.xml', path: '' }, expeditionDate: '02/08/20', dataQuality: '90%', status: 'Finalizado', endingDate: '02/08/21', user: '@goytia', actions: [{ icon: '', link: '' }] },
    ];

    return { items };
  },
};
