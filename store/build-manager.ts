// @ts-nocheck
import { defineStore } from 'pinia';
import { Build } from '@/types/build';
import { Version } from '@/types/version';
import { FolderChip } from '@/types/folder-chip';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { StoragePatchCard } from '@/types/storage-patch-card';

export interface BuildManagerState {
  builds: { [key: number]: Build };
  selectedBuildId: number | null;
}

interface BuildManagerGetters {
  buildNums: number;
  buildIds: Array<number>;
  buildNames: Array<string>;
  buildsWithNameAndId: Array<{ name: string, id: number }>;
  selectedBuild: Build | null;
}

interface BuildManagerActions {
  fetch: () => void;
  setSelectedBuildById: (id: number) => void;
  addBuild: (name?: string) => Build;
  generateDefaultBuild: () => Build;
  getMaxBuildId: () => number;
  updateBuildById: (
    {
      id, name, versions, hpMemoryNum, patchCards, folderChips, regularChipId, tagChipIds, registeredNaviCustomizerPrograms,
    }: {
      id: number,
      name?: string
      versions?: Array<Version>
      hpMemoryNum?: number
      patchCards?: Array<StoragePatchCard>
      folderChips?: Array<FolderChip>
      regularChipId?: number
      tagChipIds?: Array<number>
      registeredNaviCustomizerPrograms?: Array<RegisteredNaviCustomizerProgram>
    },
  ) => void;
}

export const useBuildManagerStore = defineStore<string, BuildManagerState, BuildManagerGetters, BuildManagerActions>('build-manager', {
  state: () => ({
    builds: {},
    selectedBuildId: null,
  }),
  getters: {
    buildNums: (state: BuildManagerState) => Object.keys(state.builds).length,

    buildIds: (state: BuildManagerState) => Object.values(state.builds)
      .map((build) => build.id),

    buildNames: (state: BuildManagerState) => Object.values(state.builds)
      .map((build) => build.name),

    buildsWithNameAndId: (state: BuildManagerState) => Object.values(state.builds)
      .map((build) => ({ name: build.name, id: build.id })),

    selectedBuild: (state: BuildManagerState) => (
      state.selectedBuildId === null
        ? null
        : state.builds[state.selectedBuildId]
    ),
  },
  actions: {
    fetch() {
      this.builds = {};
      Object.keys(localStorage).filter((key) => key.startsWith('build-')).forEach((key) => {
        const build = JSON.parse(localStorage.getItem(key) || '');
        this.builds[build.id] = build;
      });
    },

    setSelectedBuildById(id: number) {
      this.selectedBuildId = id;
    },

    addBuild(name: string = '新しいビルド'): Build {
      const id = this.getMaxBuildId() + 1;

      const build = this.generateDefaultBuild();
      build.name = name;
      build.id = id;
      build.patchCards = [];
      build.folderChips = [];
      build.regularChipId = null;
      build.tagChipIds = [];
      build.registeredNaviCustomizerPrograms = [
        {
          programId: 1,
          isCompressed: false,
          rotate: 0,
          y: 3,
          x: 3,
        },
      ];

      localStorage.setItem(`build-${id}`, JSON.stringify(build));
      this.builds[id] = build;
      return build;
    },

    generateDefaultBuild(): Build {
      const build: Build = {
        name: '新しいビルド',
        versions: [],
        hpMemoryNum: 45,
      };

      return build;
    },

    getMaxBuildId(): number {
      const ids = Object.values(this.builds).map((build) => build.id);
      return ids.length === 0 ? 0 : Math.max(...ids);
    },

    updateBuildById({
      id, name, versions, hpMemoryNum, patchCards, folderChips, regularChipId, tagChipIds, registeredNaviCustomizerPrograms,
    }) {
      const build = this.builds[id];
      if (build === undefined) return;
      if (name !== undefined) build.name = name;
      if (versions !== undefined) build.versions = versions;
      if (hpMemoryNum !== undefined) build.hpMemoryNum = hpMemoryNum;
      if (patchCards !== undefined) build.patchCards = patchCards;
      if (folderChips !== undefined) build.folderChips = folderChips;
      if (regularChipId !== undefined) build.regularChipId = regularChipId;
      if (tagChipIds !== undefined) build.tagChipIds = tagChipIds;
      if (registeredNaviCustomizerPrograms !== undefined) build.registeredNaviCustomizerPrograms = registeredNaviCustomizerPrograms;
      console.log('build');
      console.log(build);
      localStorage.setItem(`build-${id}`, JSON.stringify(build));
    },
  },
});
