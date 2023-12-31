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
          @remove-program="removeProgram"
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
          :selected-program="selectedProgram"
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
import { NaviCustomizer, NaviCustomizerInterface } from '@/classes/navi-customizer';
import { NaviCustomizerProgram, NaviCustomizerProgramInterface } from '@/classes/navi-customizer-program';
import { Build } from '@/types/build';
import { NaviCustomizerProgramState } from '@/types/navi-customizer-program-state';
import { Position } from '@/types/position';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { useBuildManagerStore } from '@/store/build-manager';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const router = useRouter();
const route = useRoute();

const masterNaviCustomizerProgramStore = useMasterNaviCustomizerProgramStore();
const masterNaviCustomizerPrograms = computed(() => masterNaviCustomizerProgramStore.programs);

const navi = ref<NaviCustomizerInterface>(new NaviCustomizer());
const cells = computed(() => navi.value.cells);

const selectedProgram = ref<NaviCustomizerProgramInterface | null>(null);
const programState = ref<NaviCustomizerProgramState>({
  isCompressed: true,
  rotate: 0,
});

const buildManagerStore = useBuildManagerStore();
const selectedBuild = computed(() : Build => buildManagerStore.selectedBuild);

const megamanStatusStore = useMegamanStatusStore();
const naviCustomizerStatus = computed(() => megamanStatusStore.naviCustomizerStatus);

const loadNaviCustomizerPrograms = () => {
  if (!selectedBuild.value) {
    return;
  }

  navi.value = new NaviCustomizer();
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program: RegisteredNaviCustomizerProgram) => {
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

const updateSelectedProgram = (program: NaviCustomizerProgramInterface | null) => {
  selectedProgram.value = program;
};

const updateProgramState = (state: NaviCustomizerProgramState) => {
  programState.value = state;
};

const addProgram = (position: Position) : void => {
  if (!selectedProgram.value) {
    return;
  }
  navi.value.addProgram({
    ...programState.value,
    ...position,
    id: navi.value.registeredNaviCustomizerPrograms.length + 1,
    programId: selectedProgram.value.id,
  });
};

const removeProgram = (registeredProgramId: number) : void => {
  const registeredNaviCustomizerProgram: RegisteredNaviCustomizerProgram = navi.value.registeredNaviCustomizerPrograms.find((program: RegisteredNaviCustomizerProgram) => program.id === registeredProgramId) as RegisteredNaviCustomizerProgram;
  if (!registeredNaviCustomizerProgram) return;

  const masterProgram = masterNaviCustomizerPrograms.value.find((program: NaviCustomizerProgram) => program.id === registeredNaviCustomizerProgram.programId);
  navi.value.removeProgram(registeredProgramId);
  selectedProgram.value = masterProgram;
};

</script>
