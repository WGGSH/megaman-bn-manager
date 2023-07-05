import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityCsAddition extends AbilityBaseString {
  constructor(value: string) {
    super('cs-addition', value);
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

  toString(): string {
    return `CS追加効果: ${this.valueToString()}`;
  }
}
