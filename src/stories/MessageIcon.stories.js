import MessageIcon  from '../components/Atoms/MessageIcon.vue';

export default {
  title: 'Atoms/Icons/MessageIcon',
  component: { MessageIcon },
  parameters: {
    layout: 'centered',
},
};
export const messageIcon = {
    render: (args) => ({
        components: { MessageIcon },
        setup() {
            return { args };
        },
        template: '<MessageIcon v-bind="args" />',
    }),
};


