

<template>
  <div class="card d-flex justify-space-between" :class="myclasses">
    <div v-if="isProjectCard" class="card__chip d-flex align-self-end flex-column">
      <v-chip>{{ tag }}</v-chip>
    </div>
    <div class="card__actions d-flex align-self-end" v-if="isDataCard && !isProjectCard">
      <v-btn icon="mdi-link-plus" variant="text" size="small"> </v-btn>
      <v-btn icon="mdi-eye-outline" variant="text"  size="small"> </v-btn>
    </div>

    <div class="card__content">
      <div v-if="isProjectCard" class="card__projectCard--content">
         <span class="subtitle">{{ subtitle }}</span>
        <h1>{{ title }}</h1>
      </div>

        <div v-if="isDataCard && !isProjectCard" class="card__dataCard--content align-self-start">
          <h1>{{ title }}</h1>
          <span>Owner: RegulAItion</span>
         <p>The iris dataset is a commonly used multivariate dataset in machine learning and statistics. It contains 150 samples of iris flowers, with 50 samples of each of the three different species: Iris setosa, Iris versicolor, and Iris virginica.</p>
      </div>
    </div>
  
  </div>
</template>

<script lang="ts">
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: 'Title',
      required: true,
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
      required: true,
    },
    tag: {
      type: String,
      default: 'Tag',
    },
    isDataCard: {
      type: Boolean,
      default: false,
    },
    isProjectCard: {
      type: Boolean,
      default: false,
    }
  },
    computed: {
    myclasses() {
        return [
            [this.isDataCard ? 'card__dataCard' : ''],
            [this.isProjectCard ? 'card__projectCard' : ''],
            'default'
        ]
    }
  },
};
</script>
<style scoped lang="scss">

.card {
  font-family: 'Roboto';
  background-color: #fff;;
  text-align: left;
  display: flex;
  border-radius: 16px;
  color: $color-REGULAITION-BLUE;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  &__chip {
  font-weight: 500;
   padding: 16px;
   color: #616161;
  }

  &__dataCard {
    width: 352px;
    height: auto;
    border: 2px solid #112E45;

      &--content {
      padding:0 20px 20px 20px;

      h1 {
        font-family: 'Roboto-Medium';
        font-size:16px;
        font-weight: 500 !important;
      }

      span {
        font-size: 12px;
        font-weight: 400;
      }

      p {
      font-family:'Roboto-Light';
      font-size: 11px;
      line-height: 16px;
      font-weight: 300;
    }
  }
}

 &__projectCard {
  width: 302px;
  height: 171px;
  border: 0.5px solid #112E45;


  &--content {
    padding:20px;
    font-weight: 500;

    & span {
    font-family: 'Roboto-Medium';
    font-size: 14px;
    font-weight: 300;
  }

  .v-chip {
  &__content {
    font-weight: 500;
    font-size: 10px;
   }
  }

  h1 {
  font-family: 'Roboto-Medium';
  font-size:24px;
  font-weight: 500;
}
  }
}

 &__actions {
     padding: 8px 8px 0 0;

  .v-btn--icon {
    font-size: 15px;
    color: #112E45;
  }

}


p {
  font-weight: 300;
}
}
</style>