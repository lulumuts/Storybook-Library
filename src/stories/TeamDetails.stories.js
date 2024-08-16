import TeamDetails  from '../components/Templates/TeamDetails.vue';

export default {
  title: 'Templates/Containers',
  component: { TeamDetails },
  parameters: {
    layout: 'centered',
},
};


export const teamDetailsHero = {
    render: (args) => ({
        components: { TeamDetails },
        setup() {
            return { args };
        },
        template: '<TeamDetails v-bind="args" />',
    }),
}

teamDetailsHero.args = {
    TeamMember: 'Cece Stock',
    LinkA:'https://vuejs.org/guide/reusability/composables',
    LinkB: ''
}