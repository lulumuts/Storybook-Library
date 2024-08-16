import WorkflowCard from '../components/Molecules/WorkflowCard.vue';

export default {
  title: 'Atoms/Status Indicators/Workflow Card',
  component: { WorkflowCard },
  argTypes: {
    StatusText: { 
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
  parameters: {
    layout: 'centered',
},
};
export const workflowCard = {
    render: (args) => ({
        components: { WorkflowCard },
        setup() {
            return { args };
        },
        template: '<WorkflowCard v-bind="args" style="width:342px;" />',
    }),
};

workflowCard.args = {
    StatusText: 'In Progress'
}


