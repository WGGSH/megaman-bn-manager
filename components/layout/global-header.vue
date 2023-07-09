<template>
  <v-app-bar dense elevation="1">
    <v-app-bar-nav-icon @click="onClickNavIcon" />
    <v-toolbar-title>エグゼ6管理ツール</v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-click-nav-icon']);

const onClickNavIcon = () => {
  emit('on-click-nav-icon', true);
};

</script>
