<template>
    <div>
      <div class="chip__yes" v-if="isYes">
        <v-chip>
           Yes
        </v-chip>
      </div>
      
      <div class="chip__no" v-else>
        <v-chip variant="outlined">
           No
        </v-chip>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Chip',
  props: {
    isYes: {
      type: Boolean,
      default: false,
    },
  },
});
</script>


<style lang="scss">
  .chip__yes > .v-chip--variant-tonal {
    background-color: $color-REGULAITION-BLUE;
    color: $color-EMPTY-STATE;
  }
  
  .v-chip {
    font-family: 'Roboto-Medium';
  }

  .chip__yes > .v-chip--variant-tonal .v-chip__underlay {
    background: none !important;
  }

  .chip__no >  .v-chip--variant-outlined {
    border-width: 2px!important;
    border-color: $color-REGULAITION-BLUE;
    color: $color-REGULAITION-BLUE !important;
  }

  .v-chip.v-chip--size-default {
    padding: 16px;
  }

</style>
  
  