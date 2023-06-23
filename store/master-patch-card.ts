// @ts-nocheck
import { defineStore, type _GettersTree } from 'pinia';
import { PatchCard } from '@/classes/patch-card';
import { Ability } from '@/classes/ability';

import cardData from '@/assets/master-data/patch-card.json';

interface MasterPatchCardState {
  cards: Array<PatchCard>;
}

interface MasterPatchCardGetters extends _GettersTree<MasterPatchCardState> {
  isFetched: boolean;
}

interface MasterPatchCardActions {
  fetchCards(): void;
}

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
        const abilities = card.abilities.map((ability) => new Ability(ability.key, ability.value));
        return new PatchCard(card.id, card.number, card.name, card.capacity, abilities);
      });
    },
  },
});
