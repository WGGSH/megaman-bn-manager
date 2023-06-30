// @ts-nocheck
import { defineStore, type _GettersTree } from 'pinia';
import { PatchCard } from '@/classes/patch-card';
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
import { AbilityFirstBarrier } from '@/classes/ability/first-barrier';
import { AbilityBusterChange } from '@/classes/ability/buster-change';
import { AbilityCsChange } from '@/classes/ability/cs-change';
import { AbilityLeftBChange } from '@/classes/ability/left-b-change';
import { AbilityMoveChange } from '@/classes/ability/move-change';

import cardData from '@/assets/master-data/patch-card.json';

interface MasterPatchCardState {
  cards: Array<PatchCard>;
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

    case 'first-barrier':
      return new AbilityFirstBarrier(value as boolean);

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
      this.cards = cardData.cards.map((card) => {
        const abilities = card.abilities.map(
          (ability) => createAbilityInstance(ability.key, ability.value),
        ).filter(
          (ability) => ability !== null,
        );
        return new PatchCard(card.id, card.number, card.name, card.capacity, abilities);
      });
    },
    getCardById(id: number) {
      return this.cards.find((card) => card.id === id) ?? null;
    },
  },
});
