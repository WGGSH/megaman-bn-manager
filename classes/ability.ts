export class Ability {
  private _key: string;

  private _value: string | number | boolean;

  constructor(key: string, value: string | number | boolean) {
    this._key = key;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  get value(): string | number | boolean {
    return this._value;
  }

  get isPositive(): boolean {
    const defaultValue = true;

    switch (this._key) {
      case 'attack-plus':
      case 'rapid-plus':
      case 'charge-plus':
      case 'hp-plus':
      case 'mega-plus':
        if (typeof this._value === 'number') {
          return this._value > 0;
        }
        return defaultValue;

      default:
        return defaultValue;
    }
  }

  valueWithSign(): string {
    if (typeof this._value === 'number') {
      if (this._value > 0) {
        return `+${this._value}`;
      } if (this._value < 0) {
        return `${this._value}`;
      }
      return '0';
    }
    return this._value.toString();
  }

  valueWithBoolean(): string {
    if (typeof this._value === 'boolean') {
      if (this._value) {
        return 'オン';
      }
      return 'オフ';
    }
    return this._value.toString();
  }

  private toStringAttackPlus(): string {
    return `アタック ${this.valueWithSign()}`;
  }

  private toStringRapidPlus(): string {
    return `ラピッド ${this.valueWithSign()}`;
  }

  private toStringChargePlus(): string {
    return `チャージ ${this.valueWithSign()}`;
  }

  private toStringHpPlus(): string {
    return `HP ${this.valueWithSign()}`;
  }

  private toStringMegaPlus(): string {
    return `メガフォルダ ${this.valueWithSign()}`;
  }

  private toStringFloatShoes(): string {
    return `フロートシューズ ${this.valueWithBoolean()}`;
  }

  private toStringAirShoes(): string {
    return `エアシューズ ${this.valueWithBoolean()}`;
  }

  private toStringSuperArmor(): string {
    return `スーパーアーマー ${this.valueWithBoolean()}`;
  }

  private getBarrierString(): string {
    switch (this._value) {
      case 'barrier-100':
        return 'バリア100';

      default:
        return this._value as string;
    }
  }

  private toStringFirstBarrier(): string {
    return `ファースト${this.getBarrierString()}`;
  }

  private getBusterString(): string {
    switch (this._value) {
      case 'buster-100':
        return 'バスター100';

      default:
        return this._value as string;
    }
  }

  private toStringBusterChange(): string {
    return `バスター:${this.getBusterString()}`;
  }

  private getLeftBString(): string {
    switch (this._value) {
      case 'reflect':
        return 'リフレクト';

      default:
        return this._value as string;
    }
  }

  private toStringLeftBChange(): string {
    return `B+左:${this.getLeftBString()}`;
  }

  private getCsString(): string {
    switch (this._value) {
      case 'ice-cube':
        return 'アイスキューブ';

      default:
        return this._value as string;
    }
  }

  private toStringCsChange(): string {
    return `CS: ${this.getCsString()}`;
  }

  private getBodyString(): string {
    switch (this._value) {
      case 'heat':
        return 'ヒート';

      case 'aqua':
        return 'アクア';

      case 'elec':
        return 'エレキ';

      case 'wood':
        return 'ウッド';

      case 'normal':
        return 'ノーマル';

      default:
        return this._value as string;
    }
  }

  private toStringBodyChange(): string {
    return `${this.getBodyString()}ボディ`;
  }

  private toStringStatusGuard(): string {
    return `ステータスガード ${this.value}`;
  }

  toString(): string {
    switch (this._key) {
      case 'attack-plus':
        return this.toStringAttackPlus();

      case 'rapid-plus':
        return this.toStringRapidPlus();

      case 'charge-plus':
        return this.toStringChargePlus();

      case 'hp-plus':
        return this.toStringHpPlus();

      case 'hp-magnify':
        return `HP${this.valueWithSign()}%`;

      case 'mega-plus':
        return this.toStringMegaPlus();

      case 'giga-plus':
        return `ギガフォルダ ${this.valueWithSign()}`;

      case 'custom-plus':
        return `カスタム ${this.valueWithSign()}`;

      case 'float-shoes':
        return `フロートシューズ ${this.valueWithBoolean()}`;

      case 'air-shoes':
        return this.toStringAirShoes();

      case 'super-armor':
        return this.toStringSuperArmor();

      case 'first-barrier':
        return this.toStringFirstBarrier();

      case 'buster-change':
        return this.toStringBusterChange();

      case 'left-b-change':
        return this.toStringLeftBChange();

      case 'cs-change':
        return this.toStringCsChange();

      case 'body-change':
        return this.toStringBodyChange();

      case 'status-guard':
        return this.toStringStatusGuard();

      default:
        return `${this._key}=${this._value}`;
    }
  }
}
