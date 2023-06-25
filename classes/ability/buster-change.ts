import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityBusterChange extends AbilityBaseString {
  constructor(value: string) {
    super('buster-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return '通常';

      case 'metor-1':
        return 'メテオx1';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `バスター変更: ${this.valueToString()}`;
  }
}
