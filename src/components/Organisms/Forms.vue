<template>
    <div class="form-container">
        <div v-if="Type === 'LoginForm'">  
        <TextInput 
        showLabel 
        Label="Email"
        />
        <TextInput 
        showLabel 
        Label="Password"
        />
        </div>

        <div v-if="Type === 'createAccountForm'">  
        <TextInput Label="Name"/>
        <TextInput Label="Surname"/>
        <TextInput Label="Username"/>
        <TextInput Label="Email Address"/>
        <TextInput Label="Password"/>
        <TextInput Label="Organisation"/>
        </div>


        <div v-if="Type === 'createNewOrganisation'">  
        <TextInput Label="Organisation Name"/>
        <TextInput Label="Company Number"/>
        <TextInput Label="Address"/>
        <TextInput Label="City"/>
        <TextInput Label="Postcode"/>
        <TextInput Label="Country"/>
        </div>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/Molecules/TextInput.vue'

export default defineComponent({
  name: 'Forms',
  components: {
    TextInput,
  },
  props: {
    Type: {
        type: String,
        required: true,
        validator: (value: string): boolean => {
          const validValues = [
          'LoginForm',
          'createAccountForm',
          'createNewOrganisation',
          ];
          return validValues.includes(value);
        },
    },
  },
});
</script>

<style scoped>
.form-container {
        padding: 48px 0;
    }

</style>