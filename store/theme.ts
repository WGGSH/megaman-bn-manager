import { defineStore, type _GettersTree } from 'pinia';
import { Theme } from '@/types/theme';

interface ThemeState {
  value: Theme;
}

interface ThemeGetters extends _GettersTree<ThemeState> {
}

interface ThemeActions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLocalStorage: () => void;
}

export const useThemeStore = defineStore<string, ThemeState, ThemeGetters, ThemeActions>('theme-store', {
  state: (): ThemeState => ({
    value: 'light',
  }),
  actions: {
    toggleTheme() {
      this.value = this.value === 'light' ? 'dark' : 'light';
      this.setLocalStorage();
    },
    setTheme(theme: Theme) {
      this.value = theme;
      this.setLocalStorage();
    },
    setLocalStorage() {
      localStorage.setItem('theme', this.value);
    },
  },
});
