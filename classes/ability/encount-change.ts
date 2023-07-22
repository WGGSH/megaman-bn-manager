import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityEncountChange extends AbilityBaseString {
  constructor(value: string) {
    super('encount-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'oil-body':
        return 'オイルボディ';

      case 'iam-fish':
        return 'アイムフィッシュ';

      case 'battery-mode':
        return 'バッテリーモード';

      case 'jungle-land':
        return 'ジャングルランド';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `エンカウント変更: ${this.valueToString()}`;
  }
}
