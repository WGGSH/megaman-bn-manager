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
    <div
      v-for="(row, rowIndex) in cells"
      :key="rowIndex"
      class="grid"
    >
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
      >
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="pa-5 elevation-1 rounded-0"
              width="100%"
              height="100%"
              :color="isHovering ? 'white' : cell"
            />
          </template>
        </v-hover>
      </div>
    </div>
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
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { NaviCustomizer } from '~/classes/navi-customizer';

import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();

const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

const selectedProgram = ref<object | null>(null);

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

</script>

<style scoped lang="scss">
.grid {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.sortable-chosen {
  background-color: red;
}

.sortable-ghost {
  display: none;
  background-color: blue;
}

.programs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  // width: 60%;
  // height: 350px;
  margin: auto;
}

.cell {
  // width: 100%;
  // padding-top: 100%;
  // width: 100px;
  // height: 100px;
  border: 1px solid #000;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
</style>
