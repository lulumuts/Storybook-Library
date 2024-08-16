<template>
  <div>
    <div class="statusIcon__passed" v-if="isPassed">
      <img src="@/assets/img/Icons/StatusIconPassed.svg" alt="Passed Status Icon" />
    </div>
    
    <div class="statusIcon__failed" v-else>
      <img src="@/assets/img/Icons/StatusIconFailed.svg" alt="Failed Status Icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatusIcon',
  props: {
    isPassed: {
      type: Boolean,
      default: false
    },
  }
});
</script>

