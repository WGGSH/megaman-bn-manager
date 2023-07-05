import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityBusterAddition extends AbilityBaseString {
  constructor(value: string) {
    super('buster-addition', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'OFF';

      case 'push':
        return '1マス右押し';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `バスター追加効果: ${this.valueToString()}`;
  }
}
