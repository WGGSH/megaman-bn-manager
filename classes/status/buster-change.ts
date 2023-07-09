import { StatusBaseString } from '@/classes/status/base/string';

export class StatusBusterChange extends StatusBaseString {
  constructor(value: string) {
    super('buster-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'meteor-1':
        return 'メテオx1';

      case 'mini-bomb':
        return 'ミニボム';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `バスター変更: ${this.valueToString()}`;
  }
}
