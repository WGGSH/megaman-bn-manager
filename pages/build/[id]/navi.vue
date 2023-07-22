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
    <v-row>
      <v-col cols="12" sm="6">
        <ui-card-navi-customizer-status
          :navi-customizer-status="naviCustomizerStatus"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <ui-card-navi-customizer
          :cells="cells"
          :selected-program="selectedProgram"
          :program-state="programState"
          @add-program="addProgram"
        />
      </v-col>
    </v-row>
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
import { NaviCustomizer } from '@/classes/navi-customizer';
import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';
import { useBuildManagerStore } from '@/store/build-manager';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const router = useRouter();
const route = useRoute();

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

const selectedProgram = ref<object | null>(null);
const programState = ref({
  isCompressed: true,
  rotate: 0,
});

const buildManagerStore = useBuildManagerStore();
const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const megamanStatusStore = useMegamanStatusStore();
const naviCustomizerStatus = computed(() => megamanStatusStore.naviCustomizerStatus);

const loadNaviCustomizerPrograms = () => {
  if (!selectedBuild.value) {
    return;
  }

  navi.value = new NaviCustomizer();
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program) => {
    navi.value.addProgram(program);
  });
};

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }
  loadNaviCustomizerPrograms();
}, { deep: true });

watch(navi, (value) => {
  if (!value) {
    return;
  }
  megamanStatusStore.update(selectedBuild.value.hpMemoryNum, value.registeredNaviCustomizerPrograms, value.cells);
}, { deep: true });

onMounted(() => {
  masterNaviCustomizerProgramStore.fetchPrograms();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  }

  loadNaviCustomizerPrograms();
});

const onClickSave = () => {
  if (!selectedBuild.value) {
    return;
  }
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    registeredNaviCustomizerPrograms: navi.value.registeredNaviCustomizerPrograms,
  });
};

const updateSelectedProgram = (program: object | null) => {
  selectedProgram.value = program;
};

const updateProgramState = (state: NaviCustomizerProgramState) => {
  programState.value = state;
};

const addProgram = (position) => {
  navi.value.addProgram({
    ...programState.value,
    id: navi.value.registeredNaviCustomizerPrograms.length + 1,
    programId: selectedProgram.value.id,
    y: position.y,
    x: position.x,
  });
};

</script>

<style scoped lang="scss">

</style>
