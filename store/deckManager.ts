import { defineStore } from 'pinia';

export const useDeckManagerStore = defineStore('deck-manager', {
  state: () => ({
    decks: [],
    selectedDeckId: null,
  }),
  getters: {
    deckNums: (state) => Object.keys(state.decks).length,
    deckNames: (state) => Object.values(state.decks).map((deck) => deck.name),
    deckIds: (state) => Object.values(state.decks).map((deck) => deck.id),
    decksWithNameAndId: (state) => Object.values(state.decks)
      .map((deck) => ({ name: deck.name, id: deck.id })),
    selectedDeck: (state) => state.decks[state.selectedDeckId],
  },
  actions: {
    fetch() {
      this.decks = {};
      Object.keys(localStorage).filter((key) => key.startsWith('deck-')).forEach((key) => {
        const deck = JSON.parse(localStorage.getItem(key) || '');
        this.decks[deck.id] = deck;
      });
    },

    setSelectedDeckById(id: number) {
      this.selectedDeckId = id;
    },

    addDeck(name: string = '新しいデッキ') {
      const id = this.getMaxDeckId() + 1;
      const deck = {
        name,
        id,
      };
      localStorage.setItem(`deck-${id}`, JSON.stringify(deck));
      this.decks[id] = deck;
      return deck;
    },

    getMaxDeckId() {
      const ids = Object.values(this.decks).map((deck) => deck.id);
      return ids.length === 0 ? 0 : Math.max(...ids);
    },

    updateDeckNameById({ id, name }: { id: number, name: string }) {
      const deck = this.decks[id];
      deck.name = name;
      localStorage.setItem(`deck-${id}`, JSON.stringify(deck));
    },
  },
});
