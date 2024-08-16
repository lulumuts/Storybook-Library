import WorkflowConfigStatus  from '../components/Atoms/WorkflowConfigStatus.vue';

export default {
  title: 'Atoms/Status Indicators/Workflow Config Status',
  component: { WorkflowConfigStatus },
  parameters: {
    layout: 'centered',
},
argTypes: { 
    StatusText: { 
        control: 'select',
        options: [
            'Review Pending',
            'Rejected',
            'Accepted',
            ],
     },
},
};
export const workflowConfigStatus = {
    render: (args) => ({
        components: { WorkflowConfigStatus },
        setup() {
            return { args };
        },
        template: '<WorkflowConfigStatus v-bind="args" />',
    }),
};

workflowConfigStatus.args= {
    StatusText: 'Review Pending'
}
