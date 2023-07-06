import { StatusBaseString } from '@/classes/status/base/string';

export class StatusGaugeChange extends StatusBaseString {
  constructor(value: string) {
    super('gauge-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'ノーマルゲージ';

      case 'quick-gauge':
        return 'クイックゲージ';

      case 'heavy-gauge':
        return 'ヘビーゲージ';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `ゲージ変更: ${this.valueToString()}`;
  }
}
