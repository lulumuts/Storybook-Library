// Text.vue
<template>
  <p :style="style">
    {{ label }}
  </p>
</template>
<script lang="ts">
import { reactive, computed } from 'vue';
export default {
  name: 'txt',
  props: {
    label: {
      type: String,
      default: 'Button',
      required: true,
    },
    size: {
      type: Number,
      default: 14,
    },
  },
  setup(props: any) {
    props = reactive(props);
    return {
      style: computed(() => ({
        fontSize: `${props.size}px`,
      }))
    }
  },
};
</script>