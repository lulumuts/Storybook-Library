import Text from '../components/Text.vue';

export default {
  title: 'Text',
  component: {Text},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
    onClick: {},
  },
};


export const Primary = {
    args: {
        size: 80,
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: '<Text v-bind="args" />',
    }),
};
