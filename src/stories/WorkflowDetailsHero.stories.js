import WorkflowDetailsHero  from '../components/Templates/WorkflowDetailsHero.vue';

export default {
  title: 'Templates/Containers/Workflow Details Hero',
  component: { WorkflowDetailsHero },
  parameters: {
    layout: 'centered',
   },
   argTypes: {
    Status: { 
        control: 'select',
        options: [
            'In Progress',
            'Blocked',
            'Pending',
            'Failed',
            'Completed'
            ],
     },
  },
};

// Dashboard WorkflowsDetailsHero
export const workflowDetailsHero = {
    render: (args) => ({
        components: { WorkflowDetailsHero },
        setup() {
            return { args };
        },
        template: '<WorkflowDetailsHero v-bind="args" />',
    }),
}

workflowDetailsHero.args= {
    WorkflowNumber: 'GWF001',
    Description: 'Quarterly Sales review',
    Status: 'Pending',
    LinkA: 'https://vuejs.org/guide/introduction.html',
}
