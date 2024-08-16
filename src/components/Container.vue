
<template>
<v-container class="container d-flex align-items-center">
    <v-row>
        <v-col class="d-flex align-center" v-if="isEmpty" col="12">
          <p>You don’t have any Channels yet, <br/>would you like to create one?</p>
        </v-col>

        <v-col
          v-if="!isEmpty"
          col="12"
          >
          <div           
          v-for="(service, index) in services"
          :key="index">
          <ul>
             <Card :title="service.title" :subtitle="service.subtitle" :tag="service.tag" isProjectCard />
          </ul>
          </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import Card from './Card.vue'

export default {
  name: 'btn',
  components: {
    Card,
  },
  props: {
    label: {
      type: String,
      default: 'Container',
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: true,
    },
    withCards: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    services: [
        {
            title: "Project Idris",
            subtitle: "Internal only",
            tag: "Discoverable"
        },
        {
            title: "Project Miro",
            subtitle: "Internal to my Group",
            tag: "Undiscoverable"
        },
        {
            title: "Project AML",
            subtitle: "External Multiparty",
            tag: "Discoverable"
        },
            {
            title: "Project Algo",
            subtitle: "External Multiparty",
            tag: "Discoverable"
        },
        {
            title: "Data Transaction",
            subtitle: "Internal to my group",
            tag: "Discoverable"
        },
        {
            title: "Regulator Sandbox",
            subtitle: "Internal only",
            tag: "Discoverable"
        }
    ]
    }
  }
};
</script>

<style scoped lang="scss">

.container {
  background-color: #ECEFF1;
  height: 96vh;
  width: 413px;
  border-radius: 16px;
  overflow:  scroll;

  p {
    font-family: 'Roboto-Medium';
    margin: 0 96px;
    font-size: 18px;
    text-align: center;
    color: #B0BEC5;
    font-weight: 500;
  }

  .card {
    margin: 16px auto;
  }
}
</style>
