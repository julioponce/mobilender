import { computed } from '@vue/composition-api';

export default {
  name: 'Breadcrumb',
  setup (props, context) {
    const route = computed(() => context.root.$route);

    const crumbs = computed(() => {
      const pathArray = route.value.path.split('/').filter((path) => !!path);

      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, index) => {
        const currentRoute = route.value.matched[index + 1];
        breadcrumbArray.push({
          to: currentRoute.path,
          text: currentRoute.meta.breadCrumb || currentRoute.name,
        });

        return breadcrumbArray;
      }, []);

      return breadcrumbs;
    });

    return { crumbs };
  },
};
