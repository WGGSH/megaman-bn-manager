import { StatusBaseString } from '@/classes/status/base/string';

export class StatusBodyChange extends StatusBaseString {
  constructor(value: string) {
    super('body-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'ノーマル';

      case 'fire':
        return 'ファイア';

      case 'aqua':
        return 'アクア';

      case 'elec':
        return 'エレキ';

      case 'wood':
        return 'ウッド';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `${this.valueToString()}ボディ`;
  }
}
