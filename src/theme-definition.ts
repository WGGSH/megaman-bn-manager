export class ThemeDefinition {
  public static readonly defaultTheme = 'light-gregar';

  public static readonly commonColors = {
    // secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    positive: '#2196F3',
    negative: '#F44336',
    disabled: '#9E9E9E',
    pink: '#ff99e2',
  };

  public static readonly versionColors = {
    gregar: {
      primary: '#28d4a9',
      secondary: '#e0ab2d',
    },
    falzar: {
      primary: '#e0ab2d',
      secondary: '#28d4a9',
    },
    'proto-man': {
      primary: '#cc3429',
      secondary: '#29aecc',
    },
    colonel: {
      primary: '#29aecc',
      secondary: '#cc3429',
    },
  };

  public static get themes() {
    const themes = {};
    ['light', 'dark'].forEach((bright) => {
      Object.keys(ThemeDefinition.versionColors).forEach((version) => {
        const name = `${bright}-${version}`;
        themes[name] = {
          dark: bright === 'dark',
          colors: {
            ...ThemeDefinition.commonColors,
            ...ThemeDefinition.versionColors[version],
          },
        };
      });
    });
    return themes;
  }
}
