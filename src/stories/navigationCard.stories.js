import NavigationCard from '../components/NavigationCard.vue';

export default {
  title: 'NavigationCard',
  component: { NavigationCard },
  parameters: {
    layout: 'centered',
},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
};


export const Default = {
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1527%3A1981&mode=design&t=s05dYgk1PcNBzdAL-1'
        }
    },
    args: { 
        title: 'Join A Channel',
        subtitle: 'Join an existing project.',
    },
    render: (args) => ({
        components: { NavigationCard },
        setup() {
            return { args };
        },
        template: '<NavigationCard v-bind="args" />',
    }),
};

export const NavToGroup = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1496%3A1979&mode=design&t=jGizZy9qPsFcs20p-1'
        }
    },
    args: { 
        title: 'Internal Only',
        subtitle: 'For collaborations within your department or across functions at the same company.',
        NavToGroup: true,
    },
    render: (args) => ({
        components: { NavigationCard },
        setup() {
            return { args };
        },
        template: '<NavigationCard v-bind="args" />',
    }),
};

export const ChannelNav = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1496%3A1978&mode=design&t=jGizZy9qPsFcs20p-1'
        }
    },
    args: { 
        title: 'Management & Governance Hub',
        subtitle: 'Manage access permissions for team members, generate governance reports and access our legal issues checklist. View them all here and learn about top Responsible AI practices.',
        ChannelNav: true,
    },
    render: (args) => ({
        components: { NavigationCard },
        setup() {
            return { args };
        },
        template: '<NavigationCard v-bind="args" />',
    }),
};
