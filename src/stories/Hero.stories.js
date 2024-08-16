import Hero  from '../components/Templates/Hero.vue';

export default {
  title: 'Templates/Containers/Hero',
  component: { Hero },
  parameters: {
    layout: 'centered',
},
};

// Insights Hero
export const insightsHero = {
    render: (args) => ({
        components: { Hero },
        args: {
            Type : 'Insights'
        },
        setup() {
            return { args };
        },
        template: '<Hero v-bind="args" />',
    }),
}
insightsHero.args = {
    Type : 'Insights'
}

// Auditing Hero
export const auditingHero = {
    render: (args) => ({
        components: { Hero },
        args: {
            Type : 'Auditing'
        },
        setup() {
            return { args };
        },
        template: '<Hero v-bind="args" />',
    }),
}
auditingHero.args = {
    Type : 'Auditing'
}

// Project Team Hero
export const projectTeamHero = {
    render: (args) => ({
        components: { Hero },
        args: {
            Type : 'ProjectTeam'
        },
        setup() {
            return { args };
        },
        template: '<Hero v-bind="args" />',
    }),
}
projectTeamHero.args = {
    Type : 'ProjectTeam'
}
