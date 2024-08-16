<template>
    <div class="workflow-details-hero">
        <div class="workflow-details-hero__container">
            <!-- Workflow Details Breadcrumb -->
            <div 
            class="workflow-details-hero__breadcrumbs">   
            <a :href=LinkA>
                <h4>Global Workflow</h4>
            </a>
            </div>

            <!-- Hero Title -->
             <h1 class="workflow-details-hero__title">{{ WorkflowNumber }}</h1>

             <!-- Workflow Details View -->
             <div>
            <p class="workflow-details-hero__workflow-details-text">
             {{ Description }} 
            </p>
            <div class="flex-container">   
               <WorkflowCard 
                class="workflow-details-hero__data"
                :StatusText="Status"/>

                <DataCard  
                  class="workflow-details-hero__data"
                  :Data=ActiveLocalWorkflowsData
                  Subtitle="Active Local Workflows"
                   /> 
                
                <DataCard 
                class="workflow-details-hero__data"
                  :Data=ErrorsData 
                  Subtitle="Errors"/>
                </div>
             </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import DataCard from '@/components/Molecules/DataCard.vue';
import WorkflowCard from '@/components/Molecules/WorkflowCard.vue';

  export default defineComponent({
    name: 'Hero',
    components: {
        DataCard,
        WorkflowCard
    },
    props: {
    WorkflowNumber: {
        type: String,
        default: ''
      },
      Description: {
        type: String,
        default: ''
      },
     Status: {
        type: String,
        default: ''
      },
      ActiveLocalWorkflowsData: {
        type: Number,
        default: 0
      },
      ErrorsData: {
        type: Number,
        default: 0
      },
      LinkA: {
        type: String,
        default: ''
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .workflow-details-hero {
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

    &__workflow-details-text {
     font-size: $standard;
     width: 86%;
    }

    &__breadcrumbs {
    padding: 0;
    display: flex;
    font-family: 'Roboto' !important;
    text-decoration: none;
     a {
        color: $color-REGULAITION-BLUE;
        text-decoration: none;
        letter-spacing: 0.15px;
     }

     a:hover {
        color: $color-REGULATION-RED;
     }
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
  .workflow-details-hero{
    &__data, 
    &__graph {
      padding-bottom: 20px;
       width: 100%;
    }
  }
}
  </style>
  