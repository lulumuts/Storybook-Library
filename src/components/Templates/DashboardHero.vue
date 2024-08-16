<template>
    <div class="dashboard-hero">
        <div class="dashboard-hero__container">
            <!-- Hero Title -->
             <h1 class="dashboard-hero__title">Dashboard</h1>

             <!-- Dashboard View -->
            <div class="flex-container">
                 <DataCard 
                   class="dashboard-hero__data"
                   :Data=ProjectOrganisationsData
                   Subtitle="Project Organisations"
                 />
            
                 <DataCard 
                   class="dashboard-hero__data"
                   :Data=ActiveGlobalWorkflowsData
                   Subtitle="Active Global Workflows"
                 />

                 <DataCard 
                   class="dashboard-hero__data"
                   :Data=WorkflowsErrorsData
                   Subtitle="Workflow Errors"
                 />

                 <DataCard 
                   class="dashboard-hero__graph"
                   :Data=SucessMetrics
                   Subtitle="Success Metrics"
                 />
             </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import DataCard from '@/components/Molecules/DataCard.vue';

  export default defineComponent({
    name: 'Hero',
    components: {
        DataCard,
    },
    props: {
        ProjectOrganisationsData: {
        type: Number,
        default: 0
      },
      ActiveGlobalWorkflowsData: {
        type: Number,
        default: 0
      },
      WorkflowsErrorsData: {
        type: Number,
        default: 0
      },
      SucessMetrics: {
        type: Number,
        default: 0
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .dashboard-hero {
    width: calc(100vw - 40px);
    height: auto;
    padding: 50px;
    border-radius: 16px;
    background-color: $color-TITLE-CARD-BACKGROUND;
    font-family: 'Roboto-Light';
    color: $color-REGULAITION-BLUE;
    text-align: left;
  
    .flex-container {
      padding-top: 48px;
      display: flex;
      overflow: hidden;
      justify-content: space-between;
    }
    
    &__data {
        flex: 10%;
        padding: 0 8px;
    }

    &__graph {
        flex: 30%;
        padding: 0 5px;
    }

    &__button {
      font-family: 'Roboto';
      text-transform: capitalize;
      float: right;
    }
    
    &__container{
    h1 {
      font-size: $title;
      letter-spacing: 0.25px;
    }
   }
}

h2 {
    margin:auto;
    text-align:center;
    position: relative;
    top: 30%;
}


@media (max-width: 900px) {
  .flex-container {
    flex-direction: column;
  }
  .dashboard-hero{
    &__data, 
    &__graph {
      padding-bottom: 20px;
       width: 100%;
    }
  }
}
  </style>
  