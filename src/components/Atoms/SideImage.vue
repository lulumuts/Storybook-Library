<template>
    <div class="side-image">
        <v-container fluid style="height: 94vh;">
        <v-img
            v-if="src === 'AuthImage'"
            height="100%"
            class="align-end text-white side-image__auth-img"
            alt="Photo by Artiom Vallat"
            src="@/assets/img/regulaition-auth-image.jpg"
            cover
        />

        <v-img
            v-else-if="src === 'loginImage'"
            height="100%"
            aspect-ratio="10/9"
            class="align-end text-white side-image__login-img"
            alt="Photo by kokokara"
            src="@/assets/img/regulaition-login-image.jpg"
            cover
        />

        <v-img
            v-else
            height="100%"
            aspect-ratio="10/9"
            class="align-end text-white side-image__create-project-img"
            alt="Photo by Peter Muscutt"
            src="@/assets/img/regulaition-create-project-image.jpg"
            cover
        />
        </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SideImage',
    props: {
    src: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        const validValue = [
          'AuthImage',
          'loginImage',
          'createProjectImage',
          ];
          return validValue.includes(value);
      },
    },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .side-image {
    .v-container {
        height: calc(98vh - 25px);
        width: 50vw;
        padding: 0;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        border-radius: 16px; 
    }
    
    &__auth-img {
        :deep(.v-img__img) {
        width: 160%;
        height: 160%;
        object-fit: cover;
        object-position: -23vh -50vh;
    }
    }

    &__login-img {
        :deep(.v-img__img) {
        width: 105%;
        height: 105%;
    }
    }

    &__auth-img, &__login-img, &__create-project-img {
        border-radius: 16px; 
    }
  }

  @media (max-width: 900px) {
    .side-image {
        &__auth-img {
        :deep(.v-img__img) {
        width: 130%;
        height: 130%;
        object-fit: cover;
        object-position: -20vh -20vh;
    }
        }

    &__login-img, &__create-project-img {
        :deep(.v-img__img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
}
  }
  </style>
