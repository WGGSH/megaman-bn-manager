import { defineStore } from 'pinia';

export const useThemeStore = defineStore('counter', {
  state: () => ({
    value: 'light',
  }),
  actions: {
    toggleTheme() {
      this.value = this.value === 'light' ? 'dark' : 'light';
      this.setLocalStorage();
    },
    setTheme(theme: string) {
      this.value = theme;
      this.setLocalStorage();
    },
    setLocalStorage() {
      localStorage.setItem('theme', this.value);
    },
  },
});
