import DotStatus  from '../components/Atoms/DotStatus.vue';

export default {
  title: 'Atoms/Status Indicators/Dot Status',
  component: { DotStatus },
  parameters: {
    layout: 'centered',
},
argTypes: { 
    StatusText: { 
        control: 'select',
        options: [
            'In Progress',
            'Blocked',
            'Done',
            'Caught PII Error',
            'Failed',
            'Not Started'
            ],
     },
},
};
export const dotStatus = {
    render: (args) => ({
        components: { DotStatus },
        setup() {
            return { args };
        },
        template: '<DotStatus v-bind="args" />',
    }),
};

dotStatus.args= {
    StatusText: 'In Progress'
}
