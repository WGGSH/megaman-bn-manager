<template>
  <v-container>
    <ui-text-title>
      ビルド概要
    </ui-text-title>
  </v-container>

  <v-container class="pa-8">
    <v-row>
      <ui-text-subtitle>
        ビルド名
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="name" readonly />
    </v-row>

    <v-row class="mt-8">
      <ui-text-subtitle>
        対応バージョン
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col v-for="version in versionList" :key="version.key">
        <v-checkbox v-model="versions" :label="version.name" :value="version.key" readonly />
      </v-col>
    </v-row>

    <v-row>
      <ui-text-subtitle>
        HPメモリ
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="hpMemoryNum" type="number" max="45" min="0" readonly />
    </v-row>

    <v-row class="mt-8">
      <v-divider />
    </v-row>

    <v-row>
      <ui-text-subtitle>
        ナビカスタマイザー
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col cols="6" sm="6">
        <ui-card-navi-customizer
          :cells="cells"
        />
      </v-col>
      <v-col cols="6" sm="6">
        <ui-card-navi-customizer-text
          :registered-navi-customizer-programs="registeredNaviCustomizerPrograms"
          :master-navi-customizer-programs="masterNaviCustomizerPrograms"
        />
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-divider />
    </v-row>

    <v-row>
      <ui-text-subtitle>
        フォルダ
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col cols="12">
        <ui-table-chip-folder
          :chip-folder="chipFolder"
          :regular-chip-id="regularChipId"
          :tag-chips="tagChips"
          read-only
        />
      </v-col>
    </v-row>

    <v-row>
      <ui-text-subtitle>
        改造カード
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col cols="12">
        <ui-card-status-card
          :megaman-status="megamanStatus"
          :max-capacity="maxCapacity"
          :current-capacity="currentCapacity"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pa-0">
        <v-card class="px-0 mt-4 mx-0" color="primary" :class="{ 'py-8': patchCards.length === 0 }">
          <ui-card-patch-card
            v-for="(element, index) in patchCards"
            :key="index"
            :patch-card="element"
            class="ma-4"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Base64 } from 'js-base64';
import { AbilityInterface } from '@/classes/ability/base';
import { ChipFolder, ChipFolderInterface } from '@/classes/chip-folder';
import { MegamanStatus, MegamanStatusInterface } from '@/classes/megaman-status';
import { NaviCustomizer } from '@/classes/navi-customizer';
import { PatchCardInterface } from '@/classes/patch-card';
import { Build } from '@/types/build';
import { FolderChip } from '@/types/folder-chip';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { ShareableBuild } from '@/types/shareable-build';
import { Version } from '@/types/version';
import { useBuildManagerStore } from '@/store/build-manager';
import { useMasterPatchCardStore } from '@/store/master-patch-card';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const buildManagerStore = useBuildManagerStore();

const router = useRouter();
const route = useRoute();

const selectedBuild = ref<Build | null>(null);

const name = ref<string>();
const versions = ref<Array<Version>>([]);
const hpMemoryNum = ref<number>();

const masterNavicustomizerProgramStore = useMasterNaviCustomizerProgramStore();
const masterNaviCustomizerPrograms = computed(() => masterNavicustomizerProgramStore.programs);

const navi = ref(new NaviCustomizer());
const cells = computed(() => navi.value.cells);
const registeredNaviCustomizerPrograms = computed(() => navi.value.registeredNaviCustomizerPrograms);

const chipFolder = ref<ChipFolderInterface>(new ChipFolder());

const regularChipId = ref(0);
const tagChipIds = ref<number[]>([]);

const tagChips = computed(() :FolderChip[] => tagChipIds.value.map((tagChipId) => {
  const folderChip = chipFolder.value.chips.find((chip) => chip.id === tagChipId) as FolderChip;
  return folderChip;
}));

const megamanStatusStore = useMegamanStatusStore();
const masterPatchCardStore = useMasterPatchCardStore();

const patchCards = ref<PatchCardInterface[]>([]);
const megamanStatus = ref<MegamanStatusInterface>(new MegamanStatus());
const maxCapacity = 80;
const currentCapacity = computed(() => {
  let capacity = 0;
  patchCards.value.forEach((patchCard: PatchCardInterface) => {
    if (!patchCard.isActive) {
      return;
    }
    capacity += Number(patchCard.capacity);
  });
  return capacity;
});

const loadStatus = () => {
  if (!selectedBuild.value) {
    return;
  }
  patchCards.value = selectedBuild.value.patchCards.map((patchCard: PatchCardInterface) => {
    const masterPatchCard = masterPatchCardStore.getCardById(patchCard.id);
    if (!masterPatchCard) {
      return null;
    }
    const clone = masterPatchCard.clone();
    if (!patchCard.isActive) {
      clone.toggleActive();
    }
    return clone;
  }).filter((patchCard: PatchCardInterface) => patchCard !== null);
};

const versionList = [
  {
    key: 'G',
    name: 'グレイガ',
  },
  {
    key: 'F',
    name: 'ファルザー',
  },
];

const loadNaviCustomizerPrograms = () => {
  if (!selectedBuild.value) {
    return;
  }

  navi.value = new NaviCustomizer();
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program: RegisteredNaviCustomizerProgram) => {
    navi.value.addProgram(program);
  });
};

const loadFolder = () => {
  if (!selectedBuild.value) {
    return;
  }

  chipFolder.value.chips = selectedBuild.value.folderChips.map((chip: FolderChip, index: number) => (
    {
      id: index + 1,
      chipId: chip.chipId,
      codeIndex: chip.codeIndex,
    }
  )).filter((folderChip: FolderChip) => folderChip !== null);

  if (selectedBuild.value.regularChipId) {
    regularChipId.value = selectedBuild.value.regularChipId;
  }
  if (selectedBuild.value.tagChipIds) {
    tagChipIds.value = selectedBuild.value.tagChipIds;
  }
};

const setValues = () => {
  if (!selectedBuild.value) {
    return;
  }
  name.value = selectedBuild.value.name;
  versions.value = selectedBuild.value.versions;
  hpMemoryNum.value = selectedBuild.value.hpMemoryNum;
  loadNaviCustomizerPrograms();
  loadFolder();
  loadStatus();
};

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }
  setValues();
}, { deep: true });

watch(patchCards, (value) => {
  megamanStatus.value = new MegamanStatus();
  if (!selectedBuild.value) {
    return;
  }
  megamanStatus.value.hpMemoryNum = selectedBuild.value.hpMemoryNum;

  loadNaviCustomizerPrograms();
  megamanStatusStore.update(selectedBuild.value.hpMemoryNum, navi.value.registeredNaviCustomizerPrograms, navi.value.cells);

  megamanStatusStore.naviCustomizerStatus.megamanStatus.abilities.forEach((ability: AbilityInterface) => {
    megamanStatus.value.abilities.push(ability);
  });

  value.forEach((patchCard: PatchCardInterface) => {
    if (!patchCard.isActive) {
      return;
    }
    patchCard.abilities.forEach((ability) => {
      megamanStatus.value.abilities.push(ability);
    });
  });
  megamanStatus.value.apply();
}, { deep: true });

const decodeBuild = () => {
  const data: ShareableBuild = JSON.parse(Base64.decode(route.query.key as string)) as ShareableBuild;
  let index = 0;

  const decodeName = data[index++] as string;

  const decodeVersions = data[index++] as Array<Version>;

  const decodeHpMemoryNum = data[index++] as number;

  const patchCardNum = data[index++] as number;

  const decodePatchCards: PatchCardInterface[] = [];
  for (let i = 0; i < patchCardNum; i++) {
    const id = String(data[index++] as number);
    const isActive = Boolean(data[index++] as number);
    const patchCard: PatchCardInterface = {
      id,
      isActive,
    };
    decodePatchCards.push(patchCard);
  }

  const folderChipNum = data[index++] as number;
  const decodeFolderChips: FolderChip[] = [];
  for (let i = 0; i < folderChipNum; i++) {
    const id = data[index++] as number;
    const chipId = String(data[index++] as number);
    const codeIndex = data[index++] as number;
    const folderChip: FolderChip = {
      id,
      chipId,
      codeIndex,
    };
    decodeFolderChips.push(folderChip);
  }

  const decodeRegularChipId = (data[index++] as number | null) ?? null;

  const decodeTagChipIds = data[index++] as Array<number>;

  const decodeRegisteredNaviCustomizerPrograms: RegisteredNaviCustomizerProgram[] = [];
  const naviCustomizerProgramNum = data[index++] as number;
  for (let i = 0; i < naviCustomizerProgramNum; i++) {
    const id = data[index++] as number;
    const programId = data[index++] as number;
    const isCompressed = Boolean(data[index++] as number);
    const rotate = data[index++] as number;
    const y = data[index++] as number;
    const x = data[index++] as number;
    const program: RegisteredNaviCustomizerProgram = {
      id,
      programId,
      isCompressed,
      rotate,
      y,
      x,
    };
    decodeRegisteredNaviCustomizerPrograms.push(program);
  }

  const build: Build = {
    name: decodeName,
    versions: decodeVersions,
    hpMemoryNum: decodeHpMemoryNum,
    patchCards: decodePatchCards,
    folderChips: decodeFolderChips,
    regularChipId: decodeRegularChipId,
    tagChipIds: decodeTagChipIds,
    registeredNaviCustomizerPrograms: decodeRegisteredNaviCustomizerPrograms,
  };

  selectedBuild.value = build;
};

onMounted(() => {
  decodeBuild();

  masterPatchCardStore.fetchCards();
  buildManagerStore.setSelectedBuildById(null);
  if (!selectedBuild) {
    router.push({ path: '/' });
  } else {
    setValues();
  }
});
</script>
