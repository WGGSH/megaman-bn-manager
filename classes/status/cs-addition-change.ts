import { StatusBaseString } from '@/classes/status/base/string';

export class StatusCsAdditionChange extends StatusBaseString {
  constructor(value: string) {
    super('cs-addition-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'OFF';

      case 'pull':
        return '左すいよせ';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `CS追加効果: ${this.valueToString()}`;
  }
}
