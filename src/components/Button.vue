<template>
  <button type="button" @click="onClick">
    <div class="button" v-if="isStandardBtn">
    <v-btn class="button__standard" icon="mdi-chevron-right" size="small"></v-btn>
    </div>

    <div class="button__auth" v-if="isAuthBtn">
    <v-btn class="button__circle" variant="text">{{label}} <span class="chevron-right"><v-icon icon="mdi-chevron-right" /></span></v-btn>
    </div>

    <div class="button" v-if="isFormBtn && !isAuthBtn">
    <v-btn class="button__submit" append-icon="mdi-arrow-right">{{ label }} </v-btn>
    </div>

    <div class="button" v-if="isModalBtn && !isAuthBtn && !isFormBtn">
    <v-btn class="button__modal" variant="outlined"><span>{{ label }}</span> </v-btn>
    </div>

  <div class="button" v-if="isTextBtn && !isModalBtn && !isAuthBtn && !isFormBtn">
    <v-btn class="button__txt" variant="text" size="large"><v-icon icon="mdi-plus-box" /><span>{{ label }}</span></v-btn>
    </div>
  </button>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';

export default {
  name: 'btn',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    isStandardBtn: {
      type: Boolean,
      default: false,
    },
    isFormBtn: {
      type: Boolean,
      default: false,
    },
    isAuthBtn: {
      type: Boolean,
      default: false,
    },
    isModalBtn: {
      type: Boolean,
      default: false,
    },
    isTextBtn: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  setup(props: any, { emit }: any) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        borderRadius: props.rounded ? '3em' : '0px',
      })),
      onClick() {
        emit('clicked');
      }
    }
  },
};
</script>

<style scoped lang="scss">

  .v-btn:hover :deep(.v-btn__overlay){
    --v-hover-opacity: 0!important;
  }
.v-input__icon.v-input__icon--append-outer i {
  font-size: 48px;
}
.button {
  font-weight: 400;
  border: 0;
  cursor: pointer;
  display: inline-block;
  padding: 10px 16px;
  line-height: 1;

    &__circle {
      margin-top: 8px;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 18px;


      &:hover, &:active {
        color: #FF1546;
        .chevron-right {
           background-color: #FF1546;
        }
      }
      .chevron-right {
        background-color: #112E45;
        margin-left: 10px;
        border-radius: 24px;
        padding: 8px;
        color: #fff;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      }
    }

  &__standard {
    margin-left: 16px;
    background-color: #112E45;
    font-size: 20px;
    color: #fff;

    &:hover {
      background-color: #FF1546;
      transition: all 0.01s;
    }
  }

  &__submit {
    background-color: #112E45;
    color: #fff;
    &:hover, &:active {
      background-color: #FF1546;
      transition: all 0.01s;
    }
  }

    &__modal {
    border-color: #FF1546;
    transition: all 0.01s;
    .v-btn {
      &__content {
        span {
          color: #FF1546;
        }
     }
    }
 
  &:hover {
    background-color: #FF1546;
    .v-btn {
      &__content {
        span {
          color: #FFF !important;
        }
     }
  }
}
   &:hover :deep(.v-btn__overlay){
    --v-hover-opacity: 0.001 !important;
  }
  }

   &__txt {
    font-family: "Roboto-Medium";
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: #FF1546;

    span {
      font-size: 18px;
    }

    i:before  {
     font-size: 30px;
     margin-right: 24px;
    }

    &:hover {
      color: #AA0629;
    }
   }
}
</style>
