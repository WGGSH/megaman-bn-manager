import { StatusBaseString } from '@/classes/status/base/string';

export class StatusCsChange extends StatusBaseString {
  constructor(value: string) {
    super('cs-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'mega-cannon':
        return 'メガキャノン';

      case 'ice-cube':
        return 'アイスキューブ';

      default:
        return '不明';
    }
  }

  public apply(value: string): void {
    this._value = value;
  }

  public toString(): string {
    return `CS変更: ${this.valueToString()}`;
  }
}
