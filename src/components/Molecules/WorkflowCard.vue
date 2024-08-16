<template>
  <div class="workflow-card">
      <v-card 
      subtitle="Status"
      :class="{ 
          'status-card': true,
          'v-card__in-progress': StatusText === 'In Progress',
          'v-card__blocked': StatusText === 'Blocked',
          'v-card__pending': StatusText === 'Pending',
          'v-card__failed': StatusText === 'Failed',
          'v-card__completed': StatusText === 'Completed',
          }"
      >
         <h1>{{ StatusText }}</h1>
      </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'WorkflowCard',
props: {
    StatusText: {
    type: String,
    validator: (value: string): boolean => {
        const validValues = [
        'In Progress',
        'Blocked',
        'Pending',
        'Failed',
        'Completed'
        ];
      return validValues.includes(value);
    }
  },
},
});
</script>

<style scoped lang="scss">
.workflow-card {
.v-card {
   border-radius: 16px;
   border: 1px solid var(--grey-lighten-2, #E0E0E0);
   box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
   height: 250px;

   :deep(.v-card-subtitle){
    padding: 8px 0 0 8px;
    opacity: 1!important;
    font-family: 'Roboto-Medium';
    font-size: $regular;
     }

   &__in-progress {
    border-color: $color-WF-IN-PROGRESS;
    color: $color-WF-IN-PROGRESS;

    .v-card-subtitle { 
      color: $color-WF-IN-PROGRESS;
    }
   }

   &__blocked {
    border-color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    color: $color-LWF-BLOCKED-TEXT-OUTLINE;

    .v-card-subtitle { 
      color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    }
   }

   &__pending {
    border-color: $color-PENDING-STATUS-OUTLINE-TEXT;
    color: $color-PENDING-STATUS-OUTLINE-TEXT;

    .v-card-subtitle { 
      color: $color-PENDING-STATUS-OUTLINE-TEXT;
    }
   }

   &__failed {
    background-color: $color-LWF-ERROR-ALERT-BACKGROUND;
    border-color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    color: $color-LWF-BLOCKED-TEXT-OUTLINE;

    .v-card-subtitle { 
      color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    }
   }

   &__completed {
    background-color: $color-ICON-SUCCESS-BACKGROUND;
    border-color: $color-LWF-COMPLETE-TEXT-OUTLINE;
    color: $color-LWF-COMPLETE-TEXT-OUTLINE;

    .v-card-subtitle { 
      color: $color-LWF-COMPLETE-TEXT-OUTLINE;
    }
   }
}
  h1 {
    text-align:center;
    font-family: 'Roboto';
    position: relative;
    top: 20%;
  }
}
</style>