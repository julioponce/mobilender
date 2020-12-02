export default {
  name: 'Software',
  setup (props, context) {
    const software = context.root.$route.params.id.replace('-', ' ');

    return {
      software,
    };
  },
};
