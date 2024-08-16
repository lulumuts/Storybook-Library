import DataHero  from '../components/Templates/DataHero.vue';

export default {
  title: 'Templates/Containers/DataHero',
  component: { DataHero },
  parameters: {
    layout: 'centered',
},
};

// Dashboard DataHero
export const dashboardHero = {
    render: (args) => ({
        components: { DataHero },
        args: {
            Type : 'Dashboard'
        },
        setup() {
            return { args };
        },
        template: '<DataHero v-bind="args" />',
    }),
}
dashboardHero.args = {
    Type : 'Dashboard'
}
