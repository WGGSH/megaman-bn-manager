import { defineStore, type _GettersTree } from 'pinia';
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';
import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { AbilityBase } from '@/classes/ability/base';
import { AbilityAttackPlus } from '@/classes/ability/attack-plus';
import { AbilityAttackMagnify } from '@/classes/ability/attack-magnify';
import { AbilityHpPlus } from '@/classes/ability/hp-plus';
import { AbilityHpMagnify } from '@/classes/ability/hp-magnify';
import { AbilityRapidPlus } from '@/classes/ability/rapid-plus';
import { AbilityChargePlus } from '@/classes/ability/charge-plus';
import { AbilityCustomPlus } from '@/classes/ability/custom-plus';
import { AbilityMegaPlus } from '@/classes/ability/mega-plus';
import { AbilityGigaPlus } from '@/classes/ability/giga-plus';
import { AbilityAirShoes } from '@/classes/ability/air-shoes';
import { AbilityFloatShoes } from '@/classes/ability/float-shoes';
import { AbilitySuperArmor } from '@/classes/ability/super-armor';
import { AbilityUnderShirt } from '@/classes/ability/under-shirt';
import { AbilityStatusGuard } from '@/classes/ability/status-guard';
import { AbilityFirstBarrierChange } from '@/classes/ability/first-barrier-change';
import { AbilityBusterChange } from '@/classes/ability/buster-change';
import { AbilityCsChange } from '@/classes/ability/cs-change';
import { AbilityLeftBChange } from '@/classes/ability/left-b-change';
import { AbilityMoveChange } from '@/classes/ability/move-change';

import programData from '@/assets/master-data/navi-customizer-program.json';

interface MasterNaviCustomizerProgramState {
  programs: Array<NaviCustomizerProgram>;
}

interface MasterNaviCustomizerProgramGetters extends
  _GettersTree<MasterNaviCustomizerProgramState> {
  isFetched: boolean;
}

interface MasterNaviCustomizerProgramActions {
  fetchPrograms(): void;
}

const createAbilityInstance = (key: string, value: number | string | boolean | null):
AbilityBase | null => {
  switch (key) {
    case 'attack-plus':
      return new AbilityAttackPlus(value as number);

    case 'attack-magnify':
      return new AbilityAttackMagnify(value as number);

    case 'hp-plus':
      return new AbilityHpPlus(value as number);

    case 'hp-magnify':
      return new AbilityHpMagnify(value as number);

    case 'rapid-plus':
      return new AbilityRapidPlus(value as number);

    case 'charge-plus':
      return new AbilityChargePlus(value as number);

    case 'custom-plus':
      return new AbilityCustomPlus(value as number);

    case 'mega-plus':
      return new AbilityMegaPlus(value as number);

    case 'giga-plus':
      return new AbilityGigaPlus(value as number);

    case 'air-shoes':
      return new AbilityAirShoes(value as boolean);

    case 'float-shoes':
      return new AbilityFloatShoes(value as boolean);

    case 'super-armor':
      return new AbilitySuperArmor(value as boolean);

    case 'under-shirt':
      return new AbilityUnderShirt(value as boolean);

    case 'status-guard':
      return new AbilityStatusGuard(value as boolean);

    case 'first-barrier-change':
      return new AbilityFirstBarrierChange(value as string);

    case 'buster-change':
      return new AbilityBusterChange(value as string);

    case 'cs-change':
      return new AbilityCsChange(value as string);

    case 'left-b-change':
      return new AbilityLeftBChange(value as string);

    case 'move-change':
      return new AbilityMoveChange(value as string);

    default:
      return null;
  }
};
export const useMasterNaviCustomizerProgramStore = defineStore<
string,
MasterNaviCustomizerProgramState,
MasterNaviCustomizerProgramGetters,
MasterNaviCustomizerProgramActions>({
  id: 'masterNaviCustomizerProgram',
  state: () => ({
    programs: [],
  }),
  getters: {
    isFetched: (state: MasterNaviCustomizerProgramState) => state.programs.length > 0,
  },
  actions: {
    fetchPrograms() {
      console.log(programData);
      this.programs = programData.programs.map((program) => {
        const addAbilities = program['add-abilities'].map(
          (ability) => createAbilityInstance(ability.key, ability.value),
        ).filter(
          (ability) => ability !== null,
        );
        const bugAbilities = program['bug-abilities'].map(
          (ability) => createAbilityInstance(ability.key, ability.value),
        ).filter(
          (ability) => ability !== null,
        );
        return new NaviCustomizerProgram(
          program.id,
          program.name,
          program.color as NaviCustomizerProgramColor,
          0,
          0,
          addAbilities as Array<AbilityBase>,
          bugAbilities as Array<AbilityBase>,
          program.compressed_cells,
        );
      });
    },
  },
});
