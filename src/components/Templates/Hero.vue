<template>
    <div class="hero">
        <div class="hero__container">
            <v-btn 
            v-if="Type === 'ProjectTeam'" 
            prepend-icon="mdi-plus" 
            variant="outlined" 
            class="hero__button"
            >
            Add Team Member
            </v-btn>
            <h1>{{ Title }}</h1>
             <p>{{ Text }}</p>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Hero',
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
            'Insights',
            'Auditing',
            'ProjectTeam',
            ];
            validValues.includes(value);
        },
      },
    },

    data() {
        return {
            Title: '',
            Text: '',
        }
    },
    mounted() {
      switch (this.Type) {
        case 'Insights':
          this.Title = 'Insights';
          this.Text = 'Gain insights on your data, outputs on your workflows, and monitor the efficiency of your processes. You will be able to view the specific metrics for each of your workflows within your workflow specs.';
          break;
        case 'Auditing':
          this.Title = 'Auditing & Reporting';
          this.Text = 'An immutable log of all your processes that can be exported for auditing and reporting purposes.';
          break;
        case 'ProjectTeam':
          this.Title = 'Project Team';
          this.Text = 'Depending on your permissions, you can add a Team Member below, export this list for auditing purposes, or simply identify who is the Project Admin at all Organisations within this Project.';
          break;
        default: 
        return '';
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .hero {
    width: calc(100vw - 40px);
    height: auto;
    padding: 50px 65px;
    border-radius: 16px;
    background-color: $color-TITLE-CARD-BACKGROUND;
    font-family: 'Roboto-Light';
    color: $color-REGULAITION-BLUE;
    text-align: left;
  
    &__container {
    h1 {
      font-size: $title;
      padding-bottom: 16px;
      letter-spacing: 0.25px;
    }
  
    p {
       padding-bottom: 16px;
       line-height: 32px;
       font-size: $standard;
       width: 75%;
       text-align: justify;
     }
    }
   &__button {
    float: right;
    text-transform: capitalize;
   }
  }
  </style>
  