<template>
    <div class="dot-status">
        <v-chip 
        v-if="StatusText === 'Not Started'"
        variant="text" 
        class="default">
           <span>{{StatusText}}</span>
        </v-chip>

        <v-chip 
        v-else
        :prepend-icon="
        StatusText === 'Caught PII Error' || StatusText === 'Failed' ? 'mdi-alert-circle-outline': 'mdi-circle'" 
        variant="text" 
        :class="{ 
            'in-progress': StatusText === 'In Progress',
            'blocked': StatusText === 'Blocked',
            'done': StatusText === 'Done',
            'pii-error': StatusText === 'Caught PII Error',
            'failed': StatusText === 'Failed',
            }"
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
            'In Progress',
            'Blocked',
            'Done',
            'Caught PII Error',
            'Failed',
            'Not Started'
          ];
          return validValues.includes(value);
        },
      },
    },
  });
  </script>

  
  <style scoped lang="scss">
  .dot-status {
    .v-chip__content span {
    font-family: 'Roboto';
    color: $color-TEXT-PRIMARY;
    }
    .in-progress {
      color: $color-IN-PROGRESS-STATUS;
    }

    .blocked {
        color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    }
    .done {
        color: $color-DONE-STATUS;
    }

    .pii-error {
        color: $color-LWF-BLOCKED-TEXT-OUTLINE;
        :deep(.v-chip__content) span {
            color: $color-LWF-BLOCKED-TEXT-OUTLINE;
        }
    }

    .failed {
        color: $color-LWF-BLOCKED-TEXT-OUTLINE;
    }

    .default {
        :deep(.v-chip__content) span {
            color: $color-TEXT-SECONDARY;
        }
    }
  }
  </style>
