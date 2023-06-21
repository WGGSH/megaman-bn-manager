import { defineStore } from 'pinia';

export const useBuildManagerStore = defineStore('build-manager', {
  state: () => ({
    builds: [],
    selectedBuildId: null,
  }),
  getters: {
    buildNums: (state) => Object.keys(state.builds).length,
    buildNames: (state) => Object.values(state.builds).map((build) => build.name),
    buildIds: (state) => Object.values(state.builds).map((build) => build.id),
    buildsWithNameAndId: (state) => Object.values(state.builds)
      .map((build) => ({ name: build.name, id: build.id })),
    selectedBuild: (state) => state.builds[state.selectedBuildId],
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

    addBuild(name: string = '新しいビルド') {
      const id = this.getMaxBuildId() + 1;
      const build = {
        name,
        id,
      };
      localStorage.setItem(`build-${id}`, JSON.stringify(build));
      this.builds[id] = build;
      return build;
    },

    getMaxBuildId() {
      const ids = Object.values(this.builds).map((build) => build.id);
      return ids.length === 0 ? 0 : Math.max(...ids);
    },

    updateBuildNameById({ id, name }: { id: number, name: string }) {
      const build = this.builds[id];
      build.name = name;
      localStorage.setItem(`build-${id}`, JSON.stringify(build));
    },
  },
});
