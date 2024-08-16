import  NavigationIcon  from '../components/Atoms/NavigationIcon.vue';

export default {
  title: 'Atoms/Icons/NavigationIcon',
  component: { NavigationIcon },
  parameters: {
    layout: 'centered',
},
  argTypes: { 
    icon: { 
        control: 'select',
        options: [
            'dashboardIcon',
            'workflowIcon',
            'projectTeamIcon',
            'organisationIcon', 
            'governanceIcon',
            'auditingIcon',
            'permissionIcon',
            ],
     },
},
};
export const navigationIcon = {
    render: (args) => ({
        components: { NavigationIcon },
        setup() {
            return { args };
        },
        template: '<NavigationIcon v-bind="args" />',
    }),
};

navigationIcon.args = {
    icon: 'dashboardIcon'
}
