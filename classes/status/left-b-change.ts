import { StatusBaseString } from '@/classes/status/base/string';

export class StatusLeftBChange extends StatusBaseString {
  constructor(value: string) {
    super('left-b-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'shield':
        return 'シールド';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `B+左: ${this.valueToString()}`;
  }
}
