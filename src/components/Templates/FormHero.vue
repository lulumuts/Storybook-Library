<template>
    <div class="form-hero">
        <div :class="Type === 'Login' ? 'form-hero__login-container': 'form-hero__container'">
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
      Type: {
        type: String,
        required: true,
        validator: (value:string):boolean => {
            const validValues = [
            'Login',
            'InviteProjectAdmin',
            'InviteOrganisations',
            'CreateNewOrganisation',
            'CreateProject',
            'CreateAccount',
            'WorkflowConfigProposal'
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
    mounted() {
      switch (this.Type) {
        case 'Login':
          this.Title = 'Login';
          this.Text = 'Please fill in your details below.';
          break;
        case 'InviteProjectAdmin':
          this.Title = 'Invite your Project Admin';
          this.Text = 'To get started you need to invite your Project Admin.Once invited, they must create the project, and can invite project team members thereafter.';
          break;
        case 'InviteOrganisations':
          this.Title = 'Invite Organisations';
          this.Text = 'To move forward, invite other organisations to the Air Network where they can be later added to a project.';
          break;
        case 'CreateNewOrganisation':
          this.Title = 'Create a New Organisation';
          this.Text = 'Please fill in your Organisation details, and continue to the next step.';
          break;
        case 'CreateProject':
          this.Title = 'Create a Project';
          this.Text = 'Create a Project to collaborate with other Organisations and connect workflows.';
          break;
          case 'CreateAccount':
          this.Title = 'Create Your Account';
          this.Text = 'You will need to Create an Account before you Create a Project. You will then be able to invite other organisations.';
          break;
        case 'WorkflowConfigProposal':
          this.Title = 'Workflow Configuration Proposal';
          this.Text = 'Approval will be sent upon submission to other organisations';
          break;
      }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .form-hero {
    &__login-container {
        height: auto;
        width: 90vw;
        padding: 50px 65px;
        font-family: 'Roboto-Light';
        color: $color-REGULAITION-BLUE;
        text-align: left;
        background-color: none;

        h1 {
      font-family: 'Roboto';
      font-size: $modal-title;
      padding-bottom: 8px;
      letter-spacing: 0.25px;
    }
    }
    &__container {
    height: auto;
    padding: 50px 65px;
    border-radius: 16px;
    font-family: 'Roboto-Light';
    color: $color-REGULAITION-BLUE;
    text-align: left;
    background-color: $color-TITLE-CARD-BACKGROUND;
    h1 {
      font-family: 'Roboto';
      font-size: $modal-title;
      padding-bottom: 8px;
      letter-spacing: 0.25px;
    }
  
    p {
       padding-bottom: 16px;
       line-height: 32px;
       font-size: $standard;
       width: 95%;
     }
    }
   &__button {
    float: right;
    text-transform: capitalize;
   }
  }
  </style>
  