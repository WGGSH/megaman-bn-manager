import { StatusBaseString } from '@/classes/status/base/string';

export class StatusEncountChange extends StatusBaseString {
  constructor(value: string) {
    super('encount-change', value);
  }

  public valueToString() {
    switch (this._value) {
      case 'oil-body':
        return 'オイルボディ: オン';

      case 'iam-fish':
        return 'アイムフィッシュ: オン';

      case 'battery-mode':
        return 'バッテリーモード: オン';

      case 'jungle-land':
        return 'ジャングルランド: オン';

      default:
        return 'エンカウント変更: なし';
    }
  }

  public toString(): string {
    return `エンカウント変更: ${this.valueToString()}`;
  }
}
