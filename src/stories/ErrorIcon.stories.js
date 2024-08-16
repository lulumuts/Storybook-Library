import ErrorIcon  from '../components/Atoms/ErrorIcon.vue';

export default {
  title: 'Atoms/Icons/ErrorIcon',
  component: { ErrorIcon },
  parameters: {
    layout: 'centered',
},
};
export const errorIcon = {
    render: (args) => ({
        components: { ErrorIcon },
        setup() {
            return { args };
        },
        template: '<ErrorIcon v-bind="args" />',
    }),
};


