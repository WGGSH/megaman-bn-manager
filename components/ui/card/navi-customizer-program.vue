<template>
  <v-container class="container">
    <v-card-text class="mb-4">
      {{ naviCustomizerProgram.name }}
    </v-card-text>
    <v-row
      v-for="(row, indexRow) in naviCustomizerProgram.cells"
      :key="indexRow"
    >
      <v-col
        v-for="(cell, indexCell) in row"
        :key="indexCell"
        class="pa-0"
      >
        <v-card
          v-if="cell"
          :color="naviCustomizerProgram.color"
          class="cell"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';

const props = defineProps({
  naviCustomizerProgram: {
    type: Object as PropType<NaviCustomizerProgram>,
    required: true,
  },
});

onMounted(() => {
  console.log(props.naviCustomizerProgram);
});

</script>

<style scoped lang="scss">

.container {
  width: 30%;
}

.cell {
  width: 100%;
  padding-top: 100%;
  // width: 100px;
  // height: 100px;
  border: 1px solid #000;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
</style>
