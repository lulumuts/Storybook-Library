import Card from '../components/Card.vue';

export default {
  title: 'Card',
  component: {Card},
  argTypes: {
    label: 'String',
  },
  parameters: {
    layout: 'centered',
},
};


export const dataCard = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1585%3A1966&mode=design&t=6j9AD6ByI9O7y4Fe-1',
        }
    },
    args: {
        title: 'Iris Dataset 1',
        subtitle: 'Internal Only',
        tag: 'Discoverable',
        isDataCard: true,
    },
    render: (args) => ({
        components: { Card },
        setup() {
            return { args };
        },
        template: '<Card v-bind="args" />',
    }),
};

export const projectCard = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1539%3A1990&mode=design&t=s1mPo9A7iSCft3gr-1',
        }
    },
    args: {
        ...dataCard.args,
        title: 'Project Idris',
        subtitle: 'Internal Only',
        tag: 'Discoverable',
        isProjectCard: true,
    },
    render: (args) => ({
        components: { Card },
        setup() {
            return { args };
        },
        template: '<Card v-bind="args" />',
    }),
};
