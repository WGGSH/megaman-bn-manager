import { StatusBaseString } from '@/classes/status/base/string';

export class StatusMoveChange extends StatusBaseString {
  constructor(value: string) {
    super('move-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'ice':
        return '氷パネル';

      case 'grass':
        return 'くさむら';

      case 'crack':
        return 'ヒビ';

      case 'hole':
        return 'あな';

      default:
        return '不明';
    }
  }

  public isPositive(): boolean {
    return this._value === 'none';
  }

  public toString(): string {
    return `移動時のパネル変化: ${this.valueToString()}`;
  }
}
