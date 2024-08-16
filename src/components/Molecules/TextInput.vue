<template>
    <div class="text-input">  
        <label v-if="showLabel">{{ Label }}</label>
        <v-text-field 
        :color="focusColor"
        variant="outlined"
        density="compact"
        :label="showLabel ? '': Label"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextInput',
  props: {
    showLabel: {
        Type: Boolean,
        default: true
    },
    Label: {
        Type: String,
        default: 'Label'
    },
    focusColor: {
        Type: String,
        default: '#0A3D65'
    }
  },
});
</script>

<style scoped lang="scss">
    .text-input {
        max-width: 100%;
        width: 80vw;
        padding: 0 65px;
        label {
            font-family: 'Roboto-Medium';
            color: $color-TEXT-PRIMARY;
        }

    .v-input, label {
        margin-top: 8px;
        :deep(.v-field__field) {
            color: $color-REGULAITION-BLUE;
            border-color: $color-REGULAITION-BLUE;
        }
    }
    }
  
    
</style>