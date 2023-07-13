<template>
  <v-container>
    <ui-text-title>
      ナビカスタマイザー
    </ui-text-title>
    <ui-button-accept
      @click="onClickSave"
    >
      保存する
    </ui-button-accept>
  </v-container>

  <v-container>
    <ui-card-navi-customizer
      :cells="cells"
      :selected-program="selectedProgram"
      :program-state="programState"
      @add-program="addProgram"
    />
  </v-container>

  <v-divider />

  <v-container>
    <ui-text-subtitle>
      プログラム一覧
    </ui-text-subtitle>
    <v-row>
      <v-col cols="12" sm="6">
        <ui-table-navi-customizer-program
          :programs="masterNaviCustomizerPrograms"
          @update-selected-program="updateSelectedProgram"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <ui-card-navi-customizer-program
          :navi-customizer-program="selectedProgram"
          @update-program-state="updateProgramState"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { NaviCustomizer } from '~/classes/navi-customizer';
import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';

import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();

const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

const selectedProgram = ref<object | null>(null);
const programState = ref({
  isCompressed: true,
  rotate: 0,
});

watch(cells, (newCells) => {
  console.log(newCells);
});

onMounted(() => {
  if (!masterNaviCustomizerProgramStore.isFetched) {
    masterNaviCustomizerProgramStore.fetchPrograms();
  }
});

const onClickSave = () => {
  // navi.value.save();
};

const updateSelectedProgram = (program: object | null) => {
  selectedProgram.value = program;
};

const updateProgramState = (state: NaviCustomizerProgramState) => {
  programState.value = state;
};

const addProgram = (position) => {
  console.log(position);
  // navi.value.addProgram(selectedProgram.value);
};

</script>

<style scoped lang="scss">

</style>
