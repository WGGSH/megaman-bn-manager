<template>
  <v-card class="pa-8" width="100%" height="100%">
    <v-list-item
      v-for="program in registeredNaviCustomizerPrograms"
      :key="program.id"
      :title="getProgramName(program)"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ColorText } from '@/value/color-text';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { NaviCustomizerProgramInterface } from '@/classes/navi-customizer-program';

const props = defineProps({
  registeredNaviCustomizerPrograms: {
    type: Array as PropType<RegisteredNaviCustomizerProgram[]>,
    required: true,
  },
  masterNaviCustomizerPrograms: {
    type: Array as PropType<NaviCustomizerProgramInterface[]>,
    required: true,
  },
});

const getProgramName = (program: RegisteredNaviCustomizerProgram) => {
  const masterProgram = props.masterNaviCustomizerPrograms.find((p) => p.id === program.programId) as NaviCustomizerProgramInterface;
  return `${masterProgram.name}: ${ColorText.colorToTextMap[masterProgram.color]}`;
};
</script>
