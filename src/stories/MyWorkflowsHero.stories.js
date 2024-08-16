import MyWorkflowsHero  from '../components/Templates/MyWorkflowsHero.vue';

export default {
  title: 'Templates/Containers/MyWorkflowsHero',
  component: { MyWorkflowsHero },
  parameters: {
    layout: 'centered',
   },
};

export const myWorkflowsHero = {
    render: (args) => ({
        components: { MyWorkflowsHero },
        setup() {
            return { args };
        },
        template: '<MyWorkflowsHero v-bind="args" />',
    }),
}

myWorkflowsHero.args= {
    LinkA: 'https://vuejs.org/guide/introduction.html'
}
