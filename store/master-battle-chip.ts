import { defineStore, type _GettersTree } from 'pinia';
import { BattleChip } from '@/classes/battle-chip';

import battleChipData from '@/assets/master-data/battle-chip.json';

interface MasterBattleChipState {
  battleChips: Array<BattleChip>;
}

interface MasterBattleChipGetters extends _GettersTree<MasterBattleChipState> {
  isFetched: boolean;
}

interface MasterBattleChipActions {
  fetchBattleChips(): void;
  findBattleChipById(id: number): BattleChip | undefined;
}

export const useMasterBattleChipStore = defineStore<
string,
MasterBattleChipState,
MasterBattleChipGetters,
MasterBattleChipActions>({
  id: 'masterBattleChip',
  state: () => ({
    battleChips: [],
  }),
  getters: {
    isFetched: (state) => state.battleChips.length > 0,
  },
  actions: {
    fetchBattleChips() {
      if (this.isFetched) return;
      this.battleChips = battleChipData['battle-chips'].map((battleChip) => new BattleChip(
        battleChip.id,
        battleChip['chip-number'],
        battleChip.name,
        battleChip.class,
        battleChip.type,
        battleChip.damage,
        battleChip.capacity,
        battleChip.rare,
        [battleChip.code1, battleChip.code2, battleChip.code3, battleChip.code4],
        // battleChip.codes,
      ));
    },
    findBattleChipById(id: number) {
      return this.battleChips.find((battleChip) => battleChip.id === id);
    },
  },
});
