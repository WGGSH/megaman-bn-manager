// @ts-nocheck
import { defineStore } from 'pinia';
import { Build } from '@/types/build';
import { Version } from '@/types/version';

export interface BuildManagerState {
  builds: { [key: number]: Build };
  selectedBuildId: number | null;
}

export const useBuildManagerStore = defineStore('build-manager', {
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
      const build = {
        name,
        id,
      };
      localStorage.setItem(`build-${id}`, JSON.stringify(build));
      this.builds[id] = build;
      return build;
    },

    getMaxBuildId(): number {
      const ids = Object.values(this.builds).map((build) => build.id);
      return ids.length === 0 ? 0 : Math.max(...ids);
    },

    updateBuildById({
      id, name, versions, hpMemoryNum,
    }: {
      id: number,
      name: string | null,
      versions: Array<Version> | null,
      hpMemoryNum: number | null,
    }) {
      const build = this.builds[id];
      if (build === undefined) return;
      if (name !== null) build.name = name;
      if (versions !== null) build.versions = versions;
      if (hpMemoryNum !== null) build.hpMemoryNum = hpMemoryNum;
      localStorage.setItem(`build-${id}`, JSON.stringify(build));
    },

    // updateBuildNameById({ id, name }: { id: number, name: string }) {
    //   const build = this.builds[id];
    //   build.name = name;
    //   localStorage.setItem(`build-${id}`, JSON.stringify(build));
    // },
  },
});
