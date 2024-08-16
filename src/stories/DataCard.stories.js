import DataCard from '../components/Molecules/DataCard.vue';

export default {
  title: 'Atoms/Status Indicators/Data Card',
  component: { DataCard },
  argTypes: {
    GraphCard: { control: false }
  },
  parameters: {
    layout: 'centered',
},
};
export const valueCard = {
    render: (args) => ({
        components: { DataCard },
        setup() {
            return { args };
        },
        template: '<DataCard v-bind="args" style="width: 300px;"/>',
    }),
};

valueCard.args = {
    Data: '4',
    Subtitle: 'Data Card',
    GraphCard: false
}

// graph card
export const graphCard = {
    render: (args) => ({
        components: { DataCard },
        setup() {
            return { args };
        },
        template: '<DataCard v-bind="args" style="width: 500px;"/>',
    }),
};

graphCard.args = {
    Data: '4',
    Subtitle: 'Graph Card',
    GraphCard: true
}
