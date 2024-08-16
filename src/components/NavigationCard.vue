<template>
    <div :class="myclasses">
      <v-container>
          <v-row justify="space-between" class="d-flex flex-nowrap">
              <v-col cols="9" class="navigation-card__left-column">
                  <p class="navigation-card__title">{{ title }}</p>
                  <p class="navigation-card__subtitle">{{ subtitle }}</p>
              </v-col>
  
              <v-col cols="3" offset="1" class="navigation-card__right-column d-flex" align-self="end" >
                  <Button class="navigation-card__button" isStandardBtn label=""></Button>
              </v-col>
          </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import Button from './Atoms/Button.vue'
  
  export default {
    name: 'NavigationCard',
    components: {
      Button
    },
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
      NavToGroup: {
        type: Boolean,
        default: false,
      },
      ChannelNav: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      myclasses() {
          return [
              [this.NavToGroup ? 'navigation-card__navToGroup' : ''],
              [this.ChannelNav ? 'navigation-card__channelNav' : ''],
              'default'
          ]
      }
    },
  };
  </script>
  <style scoped lang="scss">
  .default {
    border-radius: 16px;
    color: #112E45;
    text-align: left;
    width: 524px;
    height: 136px;
    border: 3px solid #112E45;
  }
  
  .navigation-card {
    &__left-column {
      padding: 24px;
    }
  
      &__right-column {
      padding: 0 !important;
    }
  
    &__title {
      font-family: "Roboto-Medium";
      font-size: 24px;
      font-weight:500;
    }
  
    &__subtitle {
      font-family: "Roboto";
      font-size: 20px;
      font-weight: 300;
    }
  
  
    &__navToGroup {
      height: auto;
  
      .navigation-card__title {
          font-size: 32px;
          margin-bottom: 5px;
      }
  
          .navigation-card__subtitle {
          font-size: 16px;
          font-weight: 300;
          width:90%;
      }
    }
  
    &__channelNav {
      height: auto;
      width: 289px;
  
      .navigation-card__button {
          margin-left: -40px!important;
      }
  
      .navigation-card__title {
          font-family: 'Roboto-Medium';
          font-size: 20px;
          margin-bottom: 5px;
          width:90%;
      }
  
        .navigation-card__subtitle {
          padding-top:16px;
          padding-bottom: 8px;
          font-size: 14px;
          font-weight: 300;
      }
    }
  }
  </style>
