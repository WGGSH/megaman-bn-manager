import { defineStore, type _GettersTree } from 'pinia';
import { NaviCustomizerProgram } from '@/classes/navi-customizer-program';
import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';
import { AbilityBase } from '@/classes/ability/base';

import { AbilityHpPlus } from '@/classes/ability/hp-plus';
import { AbilityHpMagnify } from '@/classes/ability/hp-magnify';
import { AbilityAttackPlus } from '@/classes/ability/attack-plus';
import { AbilityAttackMagnify } from '@/classes/ability/attack-magnify';
import { AbilityRapidPlus } from '@/classes/ability/rapid-plus';
import { AbilityChargePlus } from '@/classes/ability/charge-plus';
import { AbilityCustomPlus } from '@/classes/ability/custom-plus';
import { AbilityMegaPlus } from '@/classes/ability/mega-plus';
import { AbilityGigaPlus } from '@/classes/ability/giga-plus';
import { AbilityBusterBugPlus } from '@/classes/ability/buster-bug-plus';
import { AbilityCustomOpenBugPlus } from '@/classes/ability/custom-open-bug-plus';
import { AbilityEncountBugPlus } from '@/classes/ability/encount-bug-plus';
import { AbilityPanelBugPlus } from '@/classes/ability/panel-bug-plus';
import { AbilityBattleHpBugPlus } from '@/classes/ability/battle-hp-bug-plus';

import { AbilityAirShoes } from '@/classes/ability/air-shoes';
import { AbilityFloatShoes } from '@/classes/ability/float-shoes';
import { AbilitySuperArmor } from '@/classes/ability/super-armor';
import { AbilityUnderShirt } from '@/classes/ability/under-shirt';
import { AbilityRushSupport } from '@/classes/ability/rush-support';
import { AbilityBeatSupport } from '@/classes/ability/beat-support';
import { AbilityTangoSupport } from '@/classes/ability/tango-support';
import { AbilityMoveBug } from '@/classes/ability/move-bug';
import { AbilityEmotionWindowBug } from '@/classes/ability/emotion-window-bug';
import { AbilityResultBug } from '@/classes/ability/result-bug';
import { AbilityDamageHpBug } from '@/classes/ability/damage-hp-bug';
import { AbilityBugStopper } from '@/classes/ability/bug-stopper';

import { AbilityFirstBarrierChange } from '@/classes/ability/first-barrier-change';
import { AbilityLeftBChange } from '@/classes/ability/left-b-change';

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

    case 'buster-bug-plus':
      return new AbilityBusterBugPlus(value as number);

    case 'custom-open-bug-plus':
      return new AbilityCustomOpenBugPlus(value as number);

    case 'encount-bug-plus':
      return new AbilityEncountBugPlus(value as number);

    case 'panel-bug-plus':
      return new AbilityPanelBugPlus(value as number);

    case 'battle-hp-bug-plus':
      return new AbilityBattleHpBugPlus(value as number);

    case 'air-shoes':
      return new AbilityAirShoes(value as boolean);

    case 'float-shoes':
      return new AbilityFloatShoes(value as boolean);

    case 'super-armor':
      return new AbilitySuperArmor(value as boolean);

    case 'under-shirt':
      return new AbilityUnderShirt(value as boolean);

    case 'rush-support':
      return new AbilityRushSupport(value as boolean);

    case 'beat-support':
      return new AbilityBeatSupport(value as boolean);

    case 'tango-support':
      return new AbilityTangoSupport(value as boolean);

    case 'emotion-window-bug':
      return new AbilityEmotionWindowBug(value as boolean);

    case 'result-bug':
      return new AbilityResultBug(value as boolean);

    case 'move-bug':
      return new AbilityMoveBug(value as boolean);

    case 'damage-hp-bug':
      return new AbilityDamageHpBug(value as boolean);

    case 'first-barrier-change':
      return new AbilityFirstBarrierChange(value as string);

    case 'left-b-change':
      return new AbilityLeftBChange(value as string);

    case 'bug-stopper':
      return new AbilityBugStopper(value as boolean);

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
          program['is-program'],
          addAbilities as Array<AbilityBase>,
          bugAbilities as Array<AbilityBase>,
          program.cells,
          program.compressed_cells,
        );
      });
    },
  },
});
