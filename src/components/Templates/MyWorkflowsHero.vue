<template>
    <div class="my-workflows-hero">
        <div class="my-workflows-hero__container">
            <!-- Propose New Workflow button -->
            <v-btn  
            prepend-icon="mdi-plus" 
            variant="outlined" 
            class="my-workflows-hero__button"
            >Propose New Workflow</v-btn>

            <!-- Hero Title -->
             <h1 class="my-workflows-hero__title">My Workflows</h1>


             <!-- My Workflows View -->
             <div 
             class="flex-container d-flex flex-wrap pt-6">

            <p class="my-workflows-hero__workflow-text pb-10">
             Workflows consist of Global and Local. Local Workflows are multiple processes within an Organisation.
             A Global Workflow is made of multiple Local Workflows and can consist of multiple Organisations outside of your own.
            </p>

                <DataCard 
                   class="my-workflows-hero__data"
                   :Data=ActiveGlobalWorkflowsData
                   Subtitle="Active Global Workflows"
                 /> 

                 <DataCard 
                   class="my-workflows-hero__data"
                   :Data=ActiveLocalWorkflowsData
                   Subtitle="Active Local Workflows"
                 />

                 <DataCard 
                   class="my-workflows-hero__data"
                   :Data=ErrorsData
                   Subtitle="Active Global Workflows"
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
      LinkA: {
        type: String,
        default: ''
      },
      ActiveGlobalWorkflowsData : {
        type: Number,
        default: 0
      },
      ActiveLocalWorkflowsData : {
        type: Number,
        default: 0
      },
      ErrorsData : {
        type: Number,
        default: 0
      }
    },

    data() {
        return {
        Workflows: [
             {
                Title: "3",
                Subtitle: 'Active Global Workflows',
            },
             {
                Title: "5",
                Subtitle: 'Active Local Workflows',
            },
             {
                Title: "2",
                Subtitle: 'Errors',
            },
        ],
     }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .my-workflows-hero {
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


    &__workflow-text {
     font-size: $standard;
    }


    &__workflow-details-text {
     font-size: $standard;
     width: 86%;
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
  .my-workflows-hero{
    &__data, 
    &__graph {
      padding-bottom: 20px;
       width: 100%;
    }
  }
}
  </style>
  