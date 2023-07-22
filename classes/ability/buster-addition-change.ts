import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityBusterAdditionChange extends AbilityBaseString {
  constructor(value: string) {
    super('buster-addition-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'OFF';

      case 'pull':
        return '左に引き寄せ';

      case 'push':
        return '1マス右押し';

      case 'panel-grass':
        return 'パネルくさむら';

      case 'panel-crack':
        return 'パネルヒビ';

      case 'panel-ice':
        return 'パネルこおり';

      case 'panel-poison':
        return 'パネルどくぬま';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `バスター追加効果: ${this.valueToString()}`;
  }
}
