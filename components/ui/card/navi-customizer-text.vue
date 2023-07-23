<template>
  <v-card class="pa-8" width="100%">
    <v-list-item
      v-for="program in registeredNaviCustomizerPrograms"
      :key="program.id"
      :title="getProgramName(program)"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ColorText } from '@/value/color-text';

const props = defineProps({
  registeredNaviCustomizerPrograms: {
    type: Array,
    required: true,
  },
  masterNaviCustomizerPrograms: {
    type: Array,
    required: true,
  },
});

const getProgramName = (program: any) => {
  const masterProgram = props.masterNaviCustomizerPrograms.find((p: any) => p.id === program.programId);
  return `${masterProgram.name}: ${ColorText.colorToTextMap[masterProgram.color]}`;
};
</script>
