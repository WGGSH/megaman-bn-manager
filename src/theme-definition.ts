export class ThemeDefinition {
  public static readonly defaultTheme = 'light-gregar';

  // public static readonly variations: {
  //   colors: ['primary'],
  //   lighten: 3,
  //   darken: 3,
  // };

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
  };

  public static get themes() {
    const themes = {};
    ['light', 'dark'].forEach((bright) => {
      ['gregar', 'falzar'].forEach((version) => {
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
