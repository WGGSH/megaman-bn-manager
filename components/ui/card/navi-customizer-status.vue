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
// import { NaviCustomizerStatus } from '@/classes/navi-customizer-status';

// const props = defineProps({
defineProps({
  naviCustomizerStatus: {
    type: Object,
    required: true,
  },
});
</script>
