import Forms  from '../components/Organisms/Forms.vue';

export default {
  title: 'Molecules/Text Input',
  component: { Forms },
  parameters: {
    layout: 'centered',
},
argTypes: { 
    Type: { 
        control: 'select',
        options: [
            'LoginForm',
            'createAccountForm',
            'createNewOrganisation',
        ]
     },
},
};


export const forms = {
    render: (args) => ({
        components: { Forms },
        setup() {
            return { args };
        },
        template: '<Forms v-bind="args" width="800vw;"/>',
    }),
}

forms.args = {
    Type: 'LoginForm',
}