// @ts-nocheck
import { defineStore, type _GettersTree } from 'pinia';
import { PatchCard } from '@/types/patchCard';

import cardData from '@/assets/masterData/card.json';

interface MasterPatchCardState {
  cards: Array<PatchCard>;
}

interface MasterPatchCardGetters extends _GettersTree<MasterPatchCardState> {
  isFetched: boolean;
  // cards: Array<PatchCard>;
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
    // cards: (state: MasterPatchCardState) => state.cards,
  },
  actions: {
    fetchCards() {
      this.cards = cardData.cards;
    },
  },
});
