import Form from '../components/Form.vue';

export default {
  title: 'Form',
  component: {Form},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
    onClick: {},
  },
};


export const Primary = {
    args: {
        size: 80,
        isDisabled: false,
    },
    render: (args) => ({
        components: { Form },
        setup() {
            return { args };
        },
        template: '<Form v-bind="args" />',
    }),
};
