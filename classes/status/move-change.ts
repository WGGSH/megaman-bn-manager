import { StatusBaseString } from '@/classes/status/base/string';

export class StatusMoveChange extends StatusBaseString {
  constructor(value: string) {
    super('move-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return '通常';

      case 'ice':
        return '氷パネル';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `移動: ${this.valueToString()}`;
  }
}
