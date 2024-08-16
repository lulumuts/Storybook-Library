import FormHero  from '../components/Templates/FormHero.vue';

export default {
  title: 'Templates/Containers/Form Hero',
  component: { FormHero },
     argTypes: { 
       Type: { 
           control: 'select',
           options: [
            'Login',
            'InviteProjectAdmin',
            'InviteOrganisations',
            'CreateNewOrganisation',
            'CreateProject',
            'CreateAccount',
            'WorkflowConfigProposal'
               ],
        },
   },
  parameters: {
    layout: 'centered',
},

};

export const formHero = {
    render: (args) => ({
        components: { FormHero },
        args: {
            Type : 'InviteProjectAdmin'
        },
        setup() {
            return { args };
        },
        template: '<FormHero v-bind="args" />',
    }),
}
formHero.args = {
    Type : 'InviteProjectAdmin'
}
