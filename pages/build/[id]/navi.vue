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
    <!-- <draggable -->
    <!--   v-model="cells" -->
    <!--   :options="{ group: 'items' }" -->
    <!--   :group="{ name: 'items', pull: false, put: true }" -->
    <!--   class="grid" -->
    <!--   item-key="id" -->
    <!--   @change="handleChange" -->
    <!-- > -->
    <!--   <template #item="{ element }"> -->
    <!--     <v-card -->
    <!--       class="pa-2 cell" -->
    <!--       width="50px" -->
    <!--       height="50px" -->
    <!--       :color="element" -->
    <!--     /> -->
    <!--   </template> -->
    <!-- </draggable> -->

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

    <!-- <v-row -->
    <!--   v-for="(row, rowIndex) in cells" -->
    <!--   :key="rowIndex" -->
    <!--   justify="center" -->
    <!-- > -->
    <!--   <v-col -->
    <!--     v-for="(cell, cellIndex) in row" -->
    <!--     :key="cellIndex" -->
    <!--     cols="1" -->
    <!--   > -->
    <!--     <v-card -->
    <!--       class="pa-2" -->
    <!--       width="100%" -->
    <!--       height="100%" -->
    <!--       :color="cell" -->
    <!--     > -->
    <!--       a -->
    <!--     </v-card> -->
    <!--   </v-col> -->
    <!-- </v-row> -->
  </v-container>

  <v-divider />

  <v-container>
    <ui-text-subtitle>
      プログラム一覧
    </ui-text-subtitle>
    <!-- <v-row> -->
    <!--   <draggable -->
    <!--     v-model="masterNaviCustomizerPrograms" -->
    <!--     :options="{ group: 'items' }" -->
    <!--     :group="{ name: 'items', pull: 'clone', put: true }" -->
    <!--     item-key="id" -->
    <!--     class="programs" -->
    <!--     @change="handleChange" -->
    <!--   > -->
    <!--     <template #item="{ element }"> -->
    <!--       <v-col cols="3"> -->
    <!--         <ui-card-navi-customizer-program -->
    <!--           :navi-customizer-program="element" -->
    <!--           class="ma-0" -->
    <!--         /> -->
    <!--       </v-col> -->
    <!--     </template> -->
    <!--   </draggable> -->
    <!-- </v-row> -->

    <ui-table-navi-customizer-program
      :programs="masterNaviCustomizerPrograms"
    />

    <!-- <v-row> -->
    <!--   <v-col -->
    <!--     v-for="program in masterNaviCustomizerPrograms" -->
    <!--     :key="program.id" -->
    <!--     cols="3" -->
    <!--     xs="6" -->
    <!--   > -->
    <!--     <ui-card-navi-customizer-program -->
    <!--       :navi-customizer-program="program" -->
    <!--       class="ma-0" -->
    <!--     /> -->
    <!--   </v-col> -->
    <!-- </v-row> -->
  </v-container>
</template>

<script setup lang="ts">
// import draggable from 'vuedraggable';
import { NaviCustomizer } from '~/classes/navi-customizer';

import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();

const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

// const programs = computed(() => masterNaviCustomizerProgramStore.programs);

// const handleChange = (evt) => {
//   if (evt.added) {
//     navi.value.add(evt.added.element.id, evt.added.newIndex);
//   }
// };

watch(cells, (newCells) => {
  console.log('-----');
  console.log(newCells);
  console.log('-----');
});

onMounted(() => {
  if (!masterNaviCustomizerProgramStore.isFetched) {
    masterNaviCustomizerProgramStore.fetchPrograms();
  }
  console.log(masterNaviCustomizerPrograms.value);
  console.log('-----');
  console.log(cells);
});

const onClickSave = () => {
  // navi.value.save();
};

</script>

<style scoped lang="scss">
.grid {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  // display: grid;
  // width: 350px;
  // margin: auto;
  // text-align: center;
  // grid-template-columns: repeat(7, 1fr);
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
