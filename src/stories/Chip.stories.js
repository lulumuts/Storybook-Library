import Chip  from '../components/Atoms/Chip.vue';

export default {
  title: 'Atoms/Status Indicators/Chip',
  component: { Chip },
  argTypes: { isYes: { control: 'boolean' }},
  parameters: {
    layout: 'centered',
},
};
export const chip = {
    render: (args) => ({
        components: { Chip },
        args: {
            isYes: true,
        },
        setup() {
            return { args };
        },
        template: '<Chip v-bind="args" />',
    }),
};


