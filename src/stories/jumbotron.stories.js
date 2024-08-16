import Jumbotron from '../components/Jumbotron.vue';

export default {
  title: 'Jumbotron',
  component: {Jumbotron},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
};


export const Vertical = {
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1527%3A1983&mode=design&t=6j9AD6ByI9O7y4Fe-1'
        }
    },
    args: { 
        title: 'My Channels',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. Curabitur gravida arcu ac tortor dignissim convallis aenean.',
        label: ''
    },
    render: (args) => ({
        components: { Jumbotron },
        setup() {
            return { args };
        },
        template: '<Jumbotron v-bind="args" />',
    }),
};

export const Horizontal = {
    parameters: {
        layout: 'padded',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1527%3A1982&mode=design&t=6j9AD6ByI9O7y4Fe-1'
        }
    },
    args: {
        ...Vertical.args,
        title: 'ObjectiveDask01',
        subtitle: 'Owner: Regulaition',
        horizontal: true,
        hasTags: true,
        label: ''
    },
    render: (args) => ({
        components: { Jumbotron },
        setup() {
            return { args };
        },
        template: '<Jumbotron v-bind="args" />',
    }),
};

export const HorizontalWithButton = {
    parameters: {
        layout: 'padded',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1931%3A1952&mode=design&t=6j9AD6ByI9O7y4Fe-1'
        }
    },
    args: {
        ...Vertical.args,
        title: 'ObjectiveDask01',
        subtitle: '',
        horizontal: true,
        hasTags: false,
        hasButton: true,
        label: "Start new training task"
    },
    render: (args) => ({
        components: { Jumbotron },
        setup() {
            return { args };
        },
        template: '<Jumbotron v-bind="args" />',
    }),
};

export const fullLength = {
    parameters: {
        layout: 'padded',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1526%3A1980&mode=design&t=6j9AD6ByI9O7y4Fe-1'
        }
    },
    args: {
        ...Vertical.args,
        title: 'Project Idris',
        subtitle: 'Understand our risk exposure to interest rate increases across all our investment portfolio & design a new investment strategy.',
        fullLength: true,
        label: ''
    },
    render: (args) => ({
        components: { Jumbotron },
        setup() {
            return { args };
        },
        template: '<Jumbotron v-bind="args" />',
    }),
};

export const fullLengthWithButton = {
    parameters: {
        layout: 'padded',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/T3Lagt1IIb4LXo48yZOGPp/Collaboration-Channels-High-Fi?type=design&node-id=1931%3A1970&mode=design&t=6j9AD6ByI9O7y4Fe-1'
        }
    },
    args: {
        ...Vertical.args,
        title: 'Available Algorithms',
        subtitle: 'Understand our risk exposure to interest rate increases across all our investment portfolio & design a new investment strategy.',
        fullLength: true,
        hasButton: true,
        label: "Register new Algorithm"
    },
    render: (args) => ({
        components: { Jumbotron },
        setup() {
            return { args };
        },
        template: '<Jumbotron v-bind="args" />',
    }),
};