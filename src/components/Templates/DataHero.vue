<template>
    <div class="data-hero">
        <div class="data-hero__container">

             <h1 class="data-hero__title">{{ Type }}</h1>

            <div class="flex-container">
                <DataCard 
                class="data-hero__data"
                  Title="3" 
                  Subtitle="Project Organisations"/>

                <DataCard  
                class="data-hero__data"
                  Title="3" 
                  Subtitle="Active Global Workflows"/>

                <DataCard 
                class="data-hero__data"
                  Title="3" 
                  Subtitle="Workflow Errors"/>

                <DataCard 
                  class="data-hero__graph"
                  GraphCard
                  Title="3" 
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
        DataCard
    },
    props: {
      TeamMember: {
        type: String,
        default: ''
      },
      Type: {
        type: String,
        required: true,
        validator: (value: string):boolean => {
            const validValues = [
            'Dashboard',
            'MyWorkflows',
            'WorkflowDetails',
            ];
            return validValues.includes(value);
        },
      },
    },

    data() {
        return {
            Title: '',
            Text: '',
        }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .data-hero {
    width: calc(100vw - 40px);
    height: auto;
    padding: 50px;
    border-radius: 16px;
    background-color: $color-TITLE-CARD-BACKGROUND;
    font-family: 'Roboto-Light';
    color: $color-REGULAITION-BLUE;
    text-align: left;
  
    .flex-container {
      display: flex;
      align-items: flex-start;
      contain:content;
    }
    &__data {
        flex: 10%;
        padding: 0 5px;
    }

    &__graph {
        flex: 30%;
        padding: 0 5px;
    }
    
    &__container {
    h1 {
      font-size: $title;
      padding-bottom: 50px;
      letter-spacing: 0.25px;
    }
  
    p {
        padding-left: 10px;
      font-size: $standard;
      width: 72%;
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
  .data-hero{
    &__data, 
    &__graph {
      padding-bottom: 20px;
       width: 100%;
    }
  }
}
  </style>
  