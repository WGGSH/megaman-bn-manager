import { ThemeBright } from '@/types/theme/bright';
import { ThemeVersion } from '@/types/theme/version';

interface ThemeInterface {
  bright: ThemeBright;
  version: ThemeVersion;

  toggleBright(): void;
  setVersion(version: ThemeVersion): void;
}

class Theme implements ThemeInterface {
  private _bright: ThemeBright;

  private _version: ThemeVersion;

  public get bright(): ThemeBright {
    return this._bright;
  }

  public set bright(bright: ThemeBright) {
    this._bright = bright;
  }

  public get version(): ThemeVersion {
    return this._version;
  }

  public set version(version: ThemeVersion) {
    this._version = version;
  }

  public get theme(): string {
    return `${this._bright}-${this._version}`;
  }

  constructor(bright: ThemeBright, version: ThemeVersion) {
    this._bright = bright;
    this._version = version;
  }

  public toggleBright(): void {
    this._bright = this._bright === 'light' ? 'dark' : 'light';
  }

  public setVersion(version: ThemeVersion): void {
    this._version = version;
  }
}

export { Theme, ThemeInterface };
