<template>
  <v-card
    height="100%"
    width="100%"
    class="elevation-0"
    rounded="0"
    :color="color"
  >
    <v-card-text class="text-left ma-n2" height="100%">
      <div class="flex justify-center align-center">
        <slot />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>
