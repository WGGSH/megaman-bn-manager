import { defineStore } from 'pinia';

export const useDeckManagerStore = defineStore('deck-manager', {
  state: () => ({
    selectedDeckIndex: null, // 選択されているデッキのインデックス
    deckNums: 0, // デッキの総数
    deckNames: [], // デッキの名前一覧
    deckIds: [], // デッキのID一覧
    decksWithNameAndId: [], // デッキの名前とIDの一覧
  }),
  actions: {
    // 指定したデッキを選択する
    setSelectedDeckIndex(index: number) {
      this.selectedDeckIndex = index;
    },

    // デッキの総数を設定する
    setDeckNums(nums: number) {
      this.deckNums = nums;
      localStorage.setItem('deck-length', nums.toString());
    },

    // デッキの名前一覧を更新する
    updateDeckNames() {
      const names = JSON.parse(localStorage.getItem('deck-names') || '[]');
      this.deckNames = names;
    },

    updateDeckIds() {
      const ids = JSON.parse(localStorage.getItem('deck-ids') || '[]');
      this.deckIds = ids;
    },

    updateDecksWithNameAndId() {
      this.decksWithNameAndId = this.getDecksWithNameAndId();
    },

    getMaxDeckId() {
      const ids = JSON.parse(localStorage.getItem('deck-ids') || '[]');
      return ids.length === 0 ? 0 : Math.max(...ids);
    },

    getDecksWithNameAndId() {
      const names = JSON.parse(localStorage.getItem('deck-names') || '[]');
      const ids = JSON.parse(localStorage.getItem('deck-ids') || '[]');
      const decks = [];
      for (let i = 0; i < names.length; i += 1) {
        decks.push({ name: names[i], id: ids[i] });
      }
      return decks;
    },

    // 初期化処理
    initialize() {
      this.setDeckNums(Number(localStorage.getItem('deck-length') || 0));
      this.update();
      if (!this.verify()) {
        this.setup();
      }
    },

    update() {
      this.updateDeckNames();
      this.updateDeckIds();
      this.updateDecksWithNameAndId();
    },

    // デッキ一覧をリセットする
    setup() {
      this.setDeckNums(0);
      this.deckNames = [];
      this.addDeck('新しいデッキ');
    },

    // デッキ一覧の整合性を確認する
    verify() {
      if (this.deckNums === 0) return false;
      if (this.deckNames.length !== this.deckNums) return false;
      if (this.deckIds.length !== this.deckNums) return false;
      return true;
    },

    // デッキを追加する
    addDeck(name: string = '新しいデッキ') {
      this.deckNames.push(name);
      localStorage.setItem('deck-names', JSON.stringify(this.deckNames));

      // const id = this.getMaxDeckId() + 1;
      // this.deckIds.push(id);
      this.deckIds.push(this.getMaxDeckId() + 1);
      localStorage.setItem('deck-ids', JSON.stringify(this.deckIds));
      this.setDeckNums(this.deckNames.length);
      this.update();
    },
  },
});
