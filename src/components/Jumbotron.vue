

<template>
    <div class="jumbotron" :class="myclasses">
  
      <div class="chip--container" v-if="horizontal && hasTags">
      <v-chip v-for="(tag, index) in tags" :key="index">{{ tag.name }}</v-chip>
      </div>
  
      <div class="content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
  
      <Button v-if="hasButton" isTextBtn :label="label" />
    </div>
  </template>
  
  <script lang="ts">
  import Button from './Atoms/Button.vue'
  
  export default {
    name: 'jumbotron',
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
      horizontal: {
        type: Boolean,
        default: false,
      },
      fullLength: {
        type: Boolean,
        default: false,
      },
      hasTags: {
        type: Boolean,
        default: false,
      },
      hasButton: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'Title',
      },
  
    },
    computed: {
      myclasses() {
          return [
              [this.horizontal ? 'jumbotron__isHorizontal' : 'jumbotron__default'],
              [this.fullLength ? 'jumbotron__isFullLength' : 'jumbotron__default'],
              [this.hasButton && this.fullLength ? 'jumbotron__hasButtonFullLength' : 'jumbotron__default'],
              'default'
          ]
      }
    },
      data() {
      return {
      tags: [ {name: "Hogsmead" }, {name: "Azkaban"}]
      }
    }
  };
  </script>
  <style scoped lang="scss">

  .jumbotron {
    font-family: "Lexend-Medium";
    border-radius: 16px;
    color: $color-REGULAITION-BLUE;
    text-align: left;
    padding:40px;
    font-size: 40px;
    overflow:  hidden;
  }
  
  .jumbotron__default {
      width: 524px;
      border: 3px solid #FF1546;
  }
  
  .jumbotron__isHorizontal {
      width: 100%;
      padding: 0;
      button {
        float: right;
        margin-top: -40px;
      }
      .content {
        padding: 16px 0 8px 24px;
      }
  
      div, .chip-container{
        margin: 16px;
  
      .v-chip {
        font-family: 'Roboto-Medium';
        font-weight: 400;
        margin-right: 8px;
        float: right;
        background-color:#FF1546;
        color: #fff;
      }
      }
  
      h1 {
          font-size: 64px;
          width:100%;
      }
      
      p {
          margin-top: 8px;
      }
  }
  
  .jumbotron__isFullLength {
      width: 330px;
      height: 96vh;
      border: 4px solid #FF1546;
  
      button {
        margin-left: -24px;
        position: absolute;
        bottom: 48px;
      }
  
      h1 {
        font-size: clamp(1.5rem, 54px, 4rem); 
        //   font-size: 64px;
          line-height: 72px;
      }
  
      p {
        font-weight: 300;
      }
  }
  
  .jumbotron__hasButtonFullLength {
        h1 {
          font-size: 40px;
          line-height: 56px;
      }
  }
  
  h1 {
      margin: auto;
      width: 98%;
      line-height: 96px;
  }
  
  p {
      margin-top: 62.43px;
      font-family: 'Roboto-Light';
      font-size: 20px;
      color: #FF1546;
      line-height: 24px;
      text-align: left;
  }
  
  @media only screen and (max-width: 800px) {
  .jumbotron__isHorizontal {
      h1 {
          font-size: 8vw;
      }
    }
  }
  </style>
