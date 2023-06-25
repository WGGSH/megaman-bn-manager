import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityCsChange extends AbilityBaseString {
  constructor(value: string) {
    super('cs-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return '通常';

      case 'mega-cannon':
        return 'メガキャノン';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `CS変更: ${this.valueToString()}`;
  }
}
