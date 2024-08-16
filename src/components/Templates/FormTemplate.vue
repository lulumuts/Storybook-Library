<template>
    <div class="form-template">
        <v-container fluid>
            <v-row v-if="Type === 'Authentication'">
                <v-col cols="6" sm="0">
                    <SideImage src="AuthImage"/>
                </v-col>
                <v-col cols="6">
                    <FormHero Type="CreateNewOrganisation"/>
                    <Forms Type="createNewOrganisation" />
                </v-col>
            </v-row>

            <v-row v-if="Type === 'Login'" class="d-flex align-center">
                <v-col cols="6">
                    <SideImage src="loginImage"/>
                </v-col>
                <v-col cols="6" class="align-center login-container">
                    <div class="mb-16">
                        <FormHero Type="Login"/>
                    <v-text-field 
                    label="Email" 
                    variant="outlined"
                    density="compact"
                    ></v-text-field>
                    <v-text-field 
                    label="Password" 
                    variant="outlined"
                    density="compact"
                    ></v-text-field>

                    <v-btn append-icon="mdi-chevron-right" variant="outlined">
                    Login
                    </v-btn>
                    </div>
                </v-col>
            </v-row>


            <v-row v-if="Type === 'CreateAccount'">
                <v-col cols="6" class="d-xs-none d-md-block">
                    <SideImage src="createProjectImage"/>
                </v-col>
                <v-col cols="6" >
                    <div>
                        <FormHero Type="CreateAccount"/>
                    <div class="form-container">   
                      <Forms Type="createAccountForm" />
                    </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideImage from '@/components/Atoms/SideImage.vue'
import FormHero from '@/components/Templates/FormHero.vue'
import Forms from '@/components/Organisms/Forms.vue'

export default defineComponent({
  name: 'FormTemplate',
  components: {
    SideImage,
    FormHero,
    Forms
  },
  props: {
    Type: {
        type: String,
        required: true,
        validator: (value:string): boolean => {
            const validValues =  [
            'Authentication',
            'Login',
            'CreateAccount',
            ];
            return validValues.includes(value);
        }
      }
  }
});
</script>

<style scoped lang="scss">
.form-template {
    height: 92vh;
    width: 100%;

    .v-btn {
        float: right;
        margin: 0 65px;
        border-radius: 8px;
        text-transform: capitalize;
        font-family: 'Roboto-Medium';
        transition: 0.1s;
        border: 1.5px solid $color-REGULAITION-BLUE;
    }

    .v-btn:hover  {
        background-color: $color-REGULAITION-BLUE;
        color: $color-TITLE-CARD-BACKGROUND;
        transition: 0.1s;
    }
  
     .v-input, label {
        flex: 1;
        margin-top: 8px;
        padding: 0 65px;
        :deep(.v-field__field) {
            margin-left: 4px;
            color: $color-REGULAITION-BLUE;
            border-color: $color-REGULAITION-BLUE;
        }
    }
}
</style>