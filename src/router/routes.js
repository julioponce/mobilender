const Layout = () => import('@/components/Layout');
const Home = () => import('@/components/pages/Home');
const Login = () => import('@/components/pages/Login');
const PageContainer = () => import('@/components/PageContainer');
const CreditosGrupales = () => import('@/components/pages/CreditosGrupales');
const ControlCambios = () => import('@/components/pages/ControlCambios');
const Inspeccionar = () => import('@/components/pages/Inspeccionar');
const ListadoSoftware = () => import('@/components/pages/ListadoSoftware');
const Software = () => import('@/components/pages/Software');

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        alias: '',
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {},
      },
      {
        path: 'home',
        component: PageContainer,
        meta: { breadCrumb: 'Home' },
        children: [
          {
            path: '',
            name: 'Home',
            component: Home,
            meta: { privateAccess: true },
          },
          {
            path: 'buscar-creditos-grupales',
            component: PageContainer,
            meta: { breadCrumb: 'Buscar Creditos Grupales' },
            children: [
              {
                path: '',
                name: 'Buscar Creditos Grupales',
                component: CreditosGrupales,
                meta: { privateAccess: true },
              },
              {
                path: 'inspeccionar',
                component: PageContainer,
                meta: { breadCrumb: 'Inspeccionar' },
                children: [
                  {
                    path: '',
                    name: 'Inspeccionar',
                    component: Inspeccionar,
                    meta: { privateAccess: true },
                  },
                  {
                    path: 'control-de-cambios',
                    name: 'Control de Cambios',
                    component: ControlCambios,
                    meta: {
                      privateAccess: true,
                      breadCrumb: 'Control de Cambios',
                    },
                  },
                ],
              },
            ],
          },
          {
            path: 'listado-de-software',
            component: PageContainer,
            meta: { breadCrumb: 'Listado de Software' },
            children: [
              {
                path: '',
                name: 'Listado de Software',
                component: ListadoSoftware,
                meta: { privateAccess: true },
              },
              {
                path: ':id',
                component: Software,
                meta: { privateAccess: true },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
