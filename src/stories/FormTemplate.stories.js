import FormTemplate  from '../components/Templates/FormTemplate.vue';

export default {
  title: 'Templates/Containers/FormTemplate',
  component: { FormTemplate },
  parameters: {
    layout: 'centered',
},
argTypes: { 
    Type: { 
        control: 'select',
        options: [
            'Authentication',
            'Login',
            'CreateAccount',
            ],
     },
},
};
export const formTemplate = {
    render: (args) => ({
        components: { FormTemplate },
        setup() {
            return { args };
        },
        template: '<FormTemplate v-bind="args" width="100%;" />',
    }),
};

formTemplate.args = {
    Type: 'Login'
}


