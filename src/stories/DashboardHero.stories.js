import DashboardHero  from '../components/Templates/DashboardHero.vue';

export default {
  title: 'Templates/Containers/Dashboard Hero',
  component: { DashboardHero },
  parameters: {
    layout: 'centered',
   },
   argTypes: { 
    ProjectOrganisationsData: {
        control: {
            type: 'number'
        }
    },
    ActiveGlobalWorkflowsData: {
        control: {
            type: 'number'
        }
    },
    WorkflowsErrorsData: {
        control: {
            type: 'number'
        }
    },
    SucessMetrics: {
        control: {
            type: 'number'
        }
    },
   },
};

export const dashboardHero = {
    render: (args) => ({
        components: { DashboardHero },
        setup() {
            return { args };
        },
        template: '<DashboardHero v-bind="args" />',
    }),
}

dashboardHero.args = {
    ProjectOrganisationsData: 5,
    ActiveGlobalWorkflowsData: 2,
    WorkflowsErrorsData: 1,
    SucessMetrics: 20
}