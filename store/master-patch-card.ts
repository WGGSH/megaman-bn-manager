// @ts-nocheck
import { defineStore, type _GettersTree } from 'pinia';
import { PatchCard } from '@/classes/patch-card';
import { AbilityHpPlus } from '@/classes/ability/hp-plus';
import { AbilityHpMagnify } from '@/classes/ability/hp-magnify';
import { AbilityAttackPlus } from '@/classes/ability/attack-plus';
import { AbilityAttackMagnify } from '@/classes/ability/attack-magnify';
import { AbilityRapidPlus } from '@/classes/ability/rapid-plus';
import { AbilityChargePlus } from '@/classes/ability/charge-plus';
import { AbilityCustomPlus } from '@/classes/ability/custom-plus';
import { AbilityMegaPlus } from '@/classes/ability/mega-plus';
import { AbilityGigaPlus } from '@/classes/ability/giga-plus';
import { AbilityAirShoes } from '@/classes/ability/air-shoes';
import { AbilityChipRecoveryChange } from '@/classes/ability/chip-recovery-change';
import { AbilityCustomDamageBugChange } from '@/classes/ability/custom-damage-bug-change';
import { AbilityPanelBugPlus } from '@/classes/ability/panel-bug-plus';
import { AbilityCustomOpenBugPlus } from '@/classes/ability/custom-open-bug-plus';
import { AbilityBattleHpBugPlus } from '@/classes/ability/battle-hp-bug-plus';
import { AbilityBattleHpBugChange } from '@/classes/ability/battle-hp-bug-change';
import { AbilityStatusBugPlus } from '@/classes/ability/status-bug-plus';
import { AbilityStatusBugChange } from '@/classes/ability/status-bug-change';
import { AbilityBusterBugPlus } from '@/classes/ability/buster-bug-plus';
import { AbilityBusterBugChange } from '@/classes/ability/buster-bug-change';
import { AbilityEncountBugPlus } from '@/classes/ability/encount-bug-plus';

import { AbilityFloatShoes } from '@/classes/ability/float-shoes';
import { AbilitySuperArmor } from '@/classes/ability/super-armor';
import { AbilityUnderShirt } from '@/classes/ability/under-shirt';
import { AbilityStatusGuard } from '@/classes/ability/status-guard';
import { AbilityRushSupport } from '@/classes/ability/rush-support';
import { AbilityBeatSupport } from '@/classes/ability/beat-support';
import { AbilityTangoSupport } from '@/classes/ability/tango-support';
import { AbilitySearchShuffle } from '@/classes/ability/search-shuffle';
import { AbilityMoveBug } from '@/classes/ability/move-bug';
import { AbilityEmotionWindowBug } from '@/classes/ability/emotion-window-bug';
import { AbilityCustomHpBug } from '@/classes/ability/custom-hp-bug';
import { AbilityDamageHpBug } from '@/classes/ability/damage-hp-bug';
import { AbilityDamagePanicBug } from '@/classes/ability/damage-panic-bug';
import { AbilityResultBug } from '@/classes/ability/result-bug';
import { AbilityDamageBugFix } from '@/classes/ability/damage-bug-fix';

import { AbilityFirstBarrierChange } from '@/classes/ability/first-barrier-change';
import { AbilityBusterChange } from '@/classes/ability/buster-change';
import { AbilityBusterAdditionChange } from '@/classes/ability/buster-addition-change';
import { AbilityCsChange } from '@/classes/ability/cs-change';
import { AbilityCsAdditionChange } from '@/classes/ability/cs-addition-change';
import { AbilityLeftBChange } from '@/classes/ability/left-b-change';
import { AbilityMoveChange } from '@/classes/ability/move-change';
import { AbilityGaugeChange } from '@/classes/ability/gauge-change';
import { AbilityBodyChange } from '@/classes/ability/body-change';

import masterPatchCards from '@/assets/master-data/patch-card.json';

interface MasterPatchCardState {
  cards: PatchCard[];
}

interface MasterPatchCardGetters extends _GettersTree<MasterPatchCardState> {
  isFetched: boolean;
}

interface MasterPatchCardActions {
  fetchCards(): void;
  getCardById(id: number): PatchCard | null;
}

const createAbilityInstance = (key: string, value: number | string | boolean | null):
AbilityBase | null => {
  switch (key) {
    case 'hp-plus':
      return new AbilityHpPlus(Number(value));

    case 'hp-magnify':
      return new AbilityHpMagnify(Number(value));

    case 'attack-plus':
      return new AbilityAttackPlus(Number(value));

    case 'attack-magnify':
      return new AbilityAttackMagnify(Number(value));

    case 'rapid-plus':
      return new AbilityRapidPlus(Number(value));

    case 'charge-plus':
      return new AbilityChargePlus(Number(value));

    case 'custom-plus':
      return new AbilityCustomPlus(Number(value));

    case 'mega-plus':
      return new AbilityMegaPlus(Number(value));

    case 'giga-plus':
      return new AbilityGigaPlus(Number(value));

    case 'chip-recovery-change':
      return new AbilityChipRecoveryChange(Number(value));

    case 'custom-damage-bug-change':
      return new AbilityCustomDamageBugChange(Number(value));

    case 'panel-bug-plus':
      return new AbilityPanelBugPlus(Number(value));

    case 'custom-open-bug-plus':
      return new AbilityCustomOpenBugPlus(Number(value));

    case 'battle-hp-bug-plus':
      return new AbilityBattleHpBugPlus(Number(value));

    case 'battle-hp-bug-change':
      return new AbilityBattleHpBugChange(Number(value));

    case 'status-bug-plus':
      return new AbilityStatusBugPlus(Number(value));

    case 'status-bug-change':
      return new AbilityStatusBugChange(Number(value));

    case 'buster-bug-plus':
      return new AbilityBusterBugPlus(Number(value));

    case 'buster-bug-change':
      return new AbilityBusterBugChange(Number(value));

    case 'encount-bug-plus':
      return new AbilityEncountBugPlus(Number(value));

    case 'air-shoes':
      return new AbilityAirShoes(Boolean(value));

    case 'float-shoes':
      return new AbilityFloatShoes(Boolean(value));

    case 'super-armor':
      return new AbilitySuperArmor(Boolean(value));

    case 'under-shirt':
      return new AbilityUnderShirt(Boolean(value));

    case 'status-guard':
      return new AbilityStatusGuard(Boolean(value));

    case 'rush-support':
      return new AbilityRushSupport(Boolean(value));

    case 'beat-support':
      return new AbilityBeatSupport(Boolean(value));

    case 'tango-support':
      return new AbilityTangoSupport(Boolean(value));

    case 'search-shuffle':
      return new AbilitySearchShuffle(Boolean(value));

    case 'move-bug':
      return new AbilityMoveBug(Boolean(value));

    case 'emotion-window-bug':
      return new AbilityEmotionWindowBug(Boolean(value));

    case 'custom-hp-bug':
      return new AbilityCustomHpBug(Boolean(value));

    case 'damage-hp-bug':
      return new AbilityDamageHpBug(Boolean(value));

    case 'damage-panic-bug':
      return new AbilityDamagePanicBug(Boolean(value));

    case 'result-bug':
      return new AbilityResultBug(Boolean(value));

    case 'damage-bug-fix':
      return new AbilityDamageBugFix(Boolean(value));

    case 'first-barrier-change':
      return new AbilityFirstBarrierChange(value as string);

    case 'buster-change':
      return new AbilityBusterChange(value as string);

    case 'buster-addition-change':
      return new AbilityBusterAdditionChange(value as string);

    case 'cs-change':
      return new AbilityCsChange(value as string);

    case 'cs-addition-change':
      return new AbilityCsAdditionChange(value as string);

    case 'left-b-change':
      return new AbilityLeftBChange(value as string);

    case 'move-change':
      return new AbilityMoveChange(value as string);

    case 'gauge-change':
      return new AbilityGaugeChange(value as string);

    case 'body-change':
      return new AbilityBodyChange(value as string);

    default:
      return null;
  }
};

// eslint-disable-next-line vue/max-len
export const useMasterPatchCardStore = defineStore<string, MasterPatchCardState, MasterPatchCardGetters, MasterPatchCardActions>({
  id: 'masterPatchCard',
  state: () => ({
    cards: [],
  }),
  getters: {
    isFetched: (state: MasterPatchCardState) => state.cards.length > 0,
  },
  actions: {
    fetchCards() {
      if (this.isFetched) return;

      this.cards = masterPatchCards.map((card) => {
        const abilities: Array<AbilityBase> = [];
        for (let i = 0; i < 6; i += 1) {
          const { key, value } = card[`ability-${i + 1}`];
          if (key !== null && value !== null) {
            const ability = createAbilityInstance(key, value);
            if (ability !== null) {
              abilities.push(ability);
            }
          }
        }
        return new PatchCard(card.id, card.number, card.name, card.capacity, abilities);
      });
    },
    getCardById(id: number) : PatchCard | null {
      return this.cards.find((card: PatchCard) => card.id === id) ?? null;
    },
  },
});
