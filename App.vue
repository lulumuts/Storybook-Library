<script setup>
import Button from './src/components/Atoms/Button.vue'
import NavigationCard from './src/components/NavigationCard.vue'

</script>

<template>
  <div>
    <h1>This button is served from ui-library</h1>
    <Button msg="Hey World!"></Button>
    <NavigationCard title="NavigationCard" subtitle="subtitle" />
  </div>
</template>

<style lang="scss">
@import "./src/assets/scss/global";
</style>
