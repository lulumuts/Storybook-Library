<template>
    <div class="team-details">
        <div class="team-details__container">
        <div class="team-details__breadcrumbs">   
            <a :href=LinkA><h4>Project Team</h4></a>
                 <v-icon  icon="mdi-chevron-right" class="breadcrumb-icon"></v-icon>
                 <a :href=LinkA><h4>Team Member</h4></a>
          </div>
     
            <h1>{{ TeamMember }}</h1>
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
      LinkA: {
        type: String,
        default: ''
      },
      LinkB: {
        type: String,
        default: ''
      }
    },

    data() {
        return {
            items: [
                {
                    title: 'Project Team',
                    disabled: false,
                    href: this.LinkA
                },
                {
                    title: 'Team Member',
                    disabled: false,
                    href: this.LinkB
                },
            ]
        }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .team-details {
    width: calc(100vw - 40px);
    height: auto;
    padding: 40px;
    border-radius: 16px;
    background-color: $color-TITLE-CARD-BACKGROUND;
    color: $color-REGULAITION-BLUE;
    text-align: left;
  
    &__container {
        display: inline-block;
    h1 {
      font-family: 'Roboto-Light';
      font-size: $title;
      padding: 8px 0;
      letter-spacing: 0.25px;
    }

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
  }
  </style>
  