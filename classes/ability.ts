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

  toString(): string {
    // return `${this._key}=${this._value}`;

    switch (this._key) {
      case 'attack-plus':
        return `アタック ${this.valueWithSign()}`;

      case 'rapid-plus':
        return `ラピッド ${this.valueWithSign()}`;

      case 'charge-plus':
        return `チャージ ${this.valueWithSign()}`;

      case 'hp-plus':
        return `HP ${this.valueWithSign()}`;

      case 'mega-plus':
        return `メガフォルダ ${this.valueWithSign()}`;

      case 'float-shoes':
        return `フロートシューズ ${this.valueWithBoolean()}`;

      case 'air-shoes':
        return `エアシューズ ${this.valueWithBoolean()}`;

      case 'super-armor':
        return `スーパーアーマー ${this.valueWithBoolean()}`;

      case 'first-barrier':
        return `ファースト ${this.value}`;

      case 'buster-change':
        return `バスター変更 ${this.value}`;

      case 'cs-change':
        return `チャージショット変更 ${this.value}`;

      case 'body-change':
        return `ボディ変更 ${this.value}`;

      case 'status-guard':
        return `ステータスガード ${this.value}`;

      default:
        return `${this._key}=${this._value}`;
    }
  }
}
