import StatusIcon from '../components/Atoms/StatusIcon.vue';

export default {
  title: 'Atoms/Icons/StatusIcon',
  component: { StatusIcon },
  argTypes: { isPassed: { control: 'boolean' }},
  parameters: {
    layout: 'centered',
},
};
export const statusIcon = {
    render: (args) => ({
        components: { StatusIcon },
        args: {
            isPassed: true,
        },
        setup() {
            return { args };
        },
        template: '<StatusIcon v-bind="args" />',
    }),
};

// parameters: {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/GqmGr67ydkxAdsVWQW2uLB/Design-System?node-id=140-184&t=Pfy9mRGd7hjeEIyg-4',
//       },
// },