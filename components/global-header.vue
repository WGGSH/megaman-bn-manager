<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="onClickNavIcon" />
    <v-toolbar-title>My App</v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-click-nav-icon']);

const onClickNavIcon = () => {
  emit('on-click-nav-icon', true);
};

</script>
