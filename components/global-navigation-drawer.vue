<template>
  <v-card>
    <v-navigation-drawer> </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  drawer: {
    type: Boolean,
    default: true,
  },
});
</script>
