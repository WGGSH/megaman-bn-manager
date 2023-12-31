<template>
  <v-container>
    <v-dialog
      v-model="dialogDelete"
    >
      <v-card>
        <v-card-title>
          本当に削除しますか？
        </v-card-title>

        <v-card-actions>
          <ui-button-accept
            @click="dialogDelete = false"
          >
            キャンセル
          </ui-button-accept>

          <ui-button-danger
            color="red"
            @click="deleteBuild"
          >
            削除する
          </ui-button-danger>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialogShare"
    >
      <v-card>
        <v-card-title>
          共有用URL
        </v-card-title>

        <v-card-text>
          <a
            :href="shareUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ shareUrl }}
          </a>
        </v-card-text>

        <v-card-actions>
          <ui-button-accept
            @click="onClickCopy"
          >
            クリップボードにコピー
          </ui-button-accept>

          <ui-button-accept
            @click="dialogShare = false"
          >
            閉じる
          </ui-button-accept>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ui-text-title>
      ビルド概要
    </ui-text-title>
    <v-row class="ma-0">
      <ui-button-accept
        @click="onClickSave"
      >
        保存する
      </ui-button-accept>

      <ui-button-accept
        class="mr-auto ml-4"
        @click="onClickShare"
      >
        共有する
      </ui-button-accept>

      <ui-button-danger
        @click="onClickDelete"
      >
        削除する
      </ui-button-danger>
    </v-row>
  </v-container>

  <v-container class="pa-8">
    <v-row>
      <ui-text-subtitle>
        ビルド名
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="name" />
    </v-row>

    <v-row class="mt-8">
      <ui-text-subtitle>
        対応バージョン
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col v-for="version in versionList" :key="version.key">
        <v-checkbox v-model="versions" :label="version.name" :value="version.key" />
      </v-col>
    </v-row>

    <v-row>
      <ui-text-subtitle>
        HPメモリ
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="hpMemoryNum" type="number" max="45" min="0" />
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
import { ShareableBuild } from '@/types/shareable-build';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { Version } from '@/types/version';
import { useBuildManagerStore } from '@/store/build-manager';
import { useMasterPatchCardStore } from '@/store/master-patch-card';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useMasterNaviCustomizerProgramStore } from '@/store/master-navi-customizer-program';

const buildManagerStore = useBuildManagerStore();

const router = useRouter();
const route = useRoute();
const selectedBuild = computed(() : Build => buildManagerStore.selectedBuild);

const name = ref<string>();
const versions = ref<Array<Version>>([]);
const hpMemoryNum = ref<number>();

const dialogDelete = ref<boolean>(false);
const dialogShare = ref<boolean>(false);

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
  if (!selectedBuild.value || !selectedBuild.value.id) {
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

onMounted(() => {
  masterPatchCardStore.fetchCards();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  } else {
    setValues();
  }
});

const onClickSave = () => {
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    name: name.value,
    versions: versions.value,
    hpMemoryNum: hpMemoryNum.value,
  });
};

const onClickDelete = () => {
  dialogDelete.value = true;
};

const shareUrl = computed(() : string => {
  if (!selectedBuild.value) {
    return '';
  }
  const { location } = window;
  const runtimeConfig = useRuntimeConfig();
  const origin = `${location.origin}${runtimeConfig.public.baseURL}`;

  const shareableBuild: ShareableBuild = [];
  shareableBuild.push(selectedBuild.value.name);
  shareableBuild.push(selectedBuild.value.versions);
  shareableBuild.push(selectedBuild.value.hpMemoryNum);
  shareableBuild.push(selectedBuild.value.patchCards.length);
  selectedBuild.value.patchCards.forEach((patchCard: PatchCardInterface) => {
    shareableBuild.push(Number(patchCard.id));
    shareableBuild.push(Number(patchCard.isActive));
  });
  shareableBuild.push(selectedBuild.value.folderChips.length);
  selectedBuild.value.folderChips.forEach((folderChip: FolderChip) => {
    shareableBuild.push(folderChip.id);
    shareableBuild.push(Number(folderChip.chipId));
    shareableBuild.push(folderChip.codeIndex);
  });
  shareableBuild.push(selectedBuild.value.regularChipId);
  shareableBuild.push(selectedBuild.value.tagChipIds);
  shareableBuild.push(selectedBuild.value.registeredNaviCustomizerPrograms.length);
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program: RegisteredNaviCustomizerProgram) => {
    shareableBuild.push(program.id);
    shareableBuild.push(program.programId);
    shareableBuild.push(Number(program.isCompressed));
    shareableBuild.push(program.rotate);
    shareableBuild.push(program.y);
    shareableBuild.push(program.x);
  });

  return `${origin}share?key=${Base64.encode(JSON.stringify(shareableBuild))}`;
});

const onClickCopy = () => {
  navigator.clipboard.writeText(shareUrl.value);
};

const onClickShare = () => {
  dialogShare.value = true;
};

const deleteBuild = () => {
  buildManagerStore.deleteBuildById(selectedBuild.value.id);
  router.push({ path: '/' });
};
</script>

<style scoped>
.button {
  display: inline-block;
  word-break: break-all;
  padding: 2px 8px;
  border-radius: 5px;
  text-transform: none !important;
  white-space: normal;
  max-width: calc(100% - 30px);
  height: inherit !important;
}
</style>
