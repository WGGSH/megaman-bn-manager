<template>
  <v-card
    height="100%"
  >
    <ui-card-status-card
      :megaman-status="naviCustomizerStatus.megamanStatus"
      :max-capacity="Number(0)"
      :current-capacity="Number(0)"
    />
  </v-card>
</template>

<script setup lang="ts">

defineProps({
  naviCustomizerStatus: {
    type: Object,
    required: true,
  },
});
</script>
