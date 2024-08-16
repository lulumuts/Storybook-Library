<template>
    <div class="data-card">
        <!-- Graph Card -->
        <v-card
        v-if="GraphCard"
        :class="GraphCard ? 'graph-card' : ''"
        :subtitle=Subtitle>
          <h2>{{ Data }}</h2>
        </v-card>

        <!-- Data Card -->
        <v-card
        v-else
        :class="!GraphCard ? 'value-card' : ''"
        :subtitle=Subtitle>
          <h2>{{ Data }}</h2>
        </v-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataCard',
  props: {
      Data: {
        type: Number,
        default: 0
      },
      Subtitle: {
        type: String,
        default: ''
      },
      GraphCard: {
        type: Boolean,
        default: false
      },
  },
});
</script>

<style scoped lang="scss">
.data-card {
  .v-card {
     border-radius: 16px;
     border: 1px solid var(--grey-lighten-2, #E0E0E0);
     box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
     height: 250px;
    }

    .v-card :deep(.v-card-subtitle)  {
      padding: 8px 0 0 8px;
      opacity: 1;
      font-family: 'Roboto-Medium';
      font-size: $regular;
      color: $color-REGULAITION-BLUE;
    }

    .v-card:hover {
        border: 2px solid $color-REGULATION-RED;
        cursor: default;
        h2, :deep(.v-card-subtitle) {
            color: $color-REGULATION-RED;
        }
    }

    h2 {
        color: $color-REGULAITION-BLUE;
        font-size: $data-headline;
        margin: 20px auto;
        text-align:center;
      }

      h2:hover {
        color: $color-REGULATION-RED;
      }

     .value-card {
        flex: 10%;
      }

      .graph-card {
        flex: 30%;
      }
}
</style>