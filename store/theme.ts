import { defineStore, type _GettersTree } from 'pinia';
import { Theme } from '@/classes/theme';
import { ThemeBright } from '@/types/theme/bright';
import { ThemeVersion } from '@/types/theme/version';

interface ThemeState {
  theme: Theme;
}

interface ThemeGetters extends _GettersTree<ThemeState> {
  bright: ThemeBright;
  version: string;
}

interface ThemeActions {
  toggleBright: () => void;
  setBright: (bright: ThemeBright) => void;
  setVersion: (version: ThemeVersion) => void;
  setLocalStorage: () => void;
}

export const useThemeStore = defineStore<string, ThemeState, ThemeGetters, ThemeActions>('theme-store', {
  state: (): ThemeState => ({
    theme: new Theme('light', 'gregar'),
  }),
  getters: {
    bright() {
      return this.theme.bright;
    },
    version() {
      return this.theme.version;
    },
  },
  actions: {
    initialize() {
      const theme = JSON.parse(localStorage.getItem('theme') || '{}');
      if (theme.bright && theme.version) {
        this.theme = new Theme(theme.bright, theme.version);
      }
    },
    toggleBright() {
      this.theme.toggleBright();
      this.setLocalStorage();
    },
    setBright(bright: ThemeBright) {
      this.theme.bright = bright;
      this.setLocalStorage();
    },
    setVersion(version: ThemeVersion) {
      this.theme.version = version;
      this.setLocalStorage();
    },
    setLocalStorage() {
      localStorage.setItem('theme', JSON.stringify({
        bright: this.bright,
        version: this.version,
      }));
    },
  },
});
