import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityGaugeChange extends AbilityBaseString {
  constructor(value: string) {
    super('gauge-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
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

  toString(): string {
    return `ゲージ変更: ${this.valueToString()}`;
  }
}
