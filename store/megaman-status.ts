import { defineStore, type _GettersTree } from 'pinia';
import { NaviCustomizerStatus } from '@/classes/navi-customizer-status';
import { RegisteredNaviCustomizerProgram } from '@/types/registered-navi-customizer-program';
import { NaviCustomizerCellData } from '@/types/navi-customizer-cell-data';
import { NaviCustomizer } from '@/classes/navi-customizer';

interface MegamanStatusState {
  hpMemoryNum: number;
  naviCustomizer: NaviCustomizer;
  naviCustomizerStatus: NaviCustomizerStatus;
}

interface MegamanStatusGetters extends _GettersTree<MegamanStatusState> {
}

interface MegamanStatusActions {
  setHpMemoryNum: (hpMemoryNum: number) => void;
  setNaviCustomizerStatus: (naviCustomizerStatus: NaviCustomizerStatus) => void;
  updateNaviCustomizerStatus: (registeredNaviCustomizerProgram: RegisteredNaviCustomizerProgram, cells: NaviCustomizerCellData[][]) => void;
}

export const useMegamanStatusStore = defineStore<string, MegamanStatusState, MegamanStatusGetters, MegamanStatusActions>('megaman-status-store', {
  state: (): MegamanStatusState => ({
    hpMemoryNum: 45,
    naviCustomizer: new NaviCustomizer(),
    naviCustomizerStatus: new NaviCustomizerStatus(),
  }),

  getters: {
  },

  actions: {
    setHpMemoryNum(hpMemoryNum: number) {
      this.hpMemoryNum = hpMemoryNum;
    },

    setNaviCustomizerStatus(naviCustomizerStatus: NaviCustomizerStatus) {
      this.naviCustomizerStatus = naviCustomizerStatus;
    },

    update(hpMemoryNum: number, registeredNaviCustomizerProgram: RegisteredNaviCustomizerProgram, cells: NaviCustomizerCellData[][]) {
      this.setHpMemoryNum(hpMemoryNum);
      this.updateNaviCustomizerStatus(registeredNaviCustomizerProgram, cells);
    },

    updateNaviCustomizerStatus(registeredNaviCustomizerProgram: RegisteredNaviCustomizerProgram, cells: NaviCustomizerCellData[][]) {
      this.naviCustomizerStatus.updateStatus(registeredNaviCustomizerProgram, cells, this.hpMemoryNum);
    },
  },
});
