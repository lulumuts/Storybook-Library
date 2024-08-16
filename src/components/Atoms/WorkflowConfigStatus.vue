<template>
    <div class="workflow-config-status">
        <v-chip 
        variant="outlined" 
        :class="{ 
            'pending': StatusText === 'Review Pending',
            'rejected': StatusText === 'Rejected',
            'accepted': StatusText === 'Accepted'}"
            >
           <span>{{StatusText}}</span>
        </v-chip>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DotStatus',
    props: {
        StatusText: {
        type: String,
        required: true,
        validator: (value: string): boolean => {
          const validValues = [
          'Review Pending',
            'Rejected',
            'Accepted',
          ];
          return validValues.includes(value);
        }
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .workflow-config-status {
    .v-chip--variant-outline{
    font-family: 'Roboto-Medium';
    color: $color-TEXT-PRIMARY;
    border-width: 1px;
    }
    .pending {
      border-color: $color-REGULAITION-BLUE;
      color: $color-REGULAITION-BLUE;
    }

    .rejected {
        background-color: $color-LWF-ERROR-ALERT-BACKGROUND;
        border-color: $color-LWF-BLOCKED-TEXT-OUTLINE;
        color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    }
    .accepted {
        background-color: $color-SUCCESS-ICON-BACKGROUND;
        border-color: $color-LWF-COMPLETE-TEXT-OUTLINE;
        color: $color-LWF-COMPLETE-TEXT-OUTLINE;
    }
  }
  </style>
