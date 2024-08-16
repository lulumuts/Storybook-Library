import TextInput  from '../components/Molecules/TextInput.vue';

export default {
  title: 'Molecules/Text Input',
  component: { TextInput },
  parameters: {
    layout: 'centered',
},
argTypes: {
    Label: { control: 'boolean' }
}
};


export const textInput = {
    render: (args) => ({
        components: { TextInput },
        setup() {
            return { args };
        },
        template: '<TextInput v-bind="args" width="800px;"/>',
    }),
}

textInput.args = {
    Label: 'Name'
}