import { defineStore, type _GettersTree } from 'pinia';
import { BattleChip } from '@/types/battle-chip';

import masterBattleChips from '@/assets/master-data/battle-chip.json';

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
      this.battleChips = masterBattleChips.map((battleChip) => ({
        id: battleChip.id,
        number: battleChip['chip-number'],
        name: battleChip.name,
        class: battleChip.class,
        type: battleChip.type,
        damage: battleChip.damage,
        capacity: battleChip.capacity,
        rare: battleChip.rare,
        codes: [battleChip.code1, battleChip.code2, battleChip.code3, battleChip.code4],
      }));
    },
    findBattleChipById(id: number) {
      return this.battleChips.find((battleChip) => battleChip.id === id);
    },
  },
});
