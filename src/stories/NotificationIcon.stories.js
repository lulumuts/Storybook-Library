import  NotificationIcon  from '../components/Atoms/NotificationIcon.vue';

export default {
  title: 'Atoms/Icons/NotificationIcon',
  component: { NotificationIcon },
  parameters: {
    layout: 'centered',
},
  argTypes: { 
    icon: { 
        control: 'select',
        options: [
            'alertIcon',
            'infoIcon',
            'greetingIcon',
            ],
     },
},
};
export const notificationIcon = {
    render: (args) => ({
        components: { NotificationIcon },
        setup() {
            return { args };
        },
        template: '<NotificationIcon v-bind="args" />',
    }),
};

notificationIcon.args = {
    icon: 'alertIcon'
}
