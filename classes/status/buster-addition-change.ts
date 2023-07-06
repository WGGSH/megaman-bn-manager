import { StatusBaseString } from '@/classes/status/base/string';

export class StatusBusterAdditionChange extends StatusBaseString {
  constructor(value: string) {
    super('buster-addition-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'OFF';

      case 'pull':
        return '左に引き寄せ';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `バスター追加効果: ${this.valueToString()}`;
  }
}
