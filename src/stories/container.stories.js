import Container from '../components/Container.vue';

export default {
  title: 'Container',
  component: {Container},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
};


export const Empty = {
    parameters: {
        layout: 'centered',
     },
    args: { 
        isEmpty: true,
    },
    render: (args) => ({
        components: { Container },
        setup() {
            return { args };
        },
        template: '<Container v-bind="args" />',
    }),
};

export const withCards = {
    parameters: {
        layout: 'centered',
     },
    args: { 
        ...Empty.args,
        isEmpty: false,
    },
    render: (args) => ({
        components: { Container },
        setup() {
            return { args };
        },
        template: '<Container v-bind="args" />',
    }),
};
