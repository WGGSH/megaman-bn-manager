import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityLeftBChange extends AbilityBaseString {
  constructor(value: string) {
    super('left-b-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'なし';

      case 'shield':
        return 'シールド';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `B+左: ${this.valueToString()}`;
  }
}
