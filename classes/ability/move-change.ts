import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityMoveChange extends AbilityBaseString {
  constructor(value: string) {
    super('move-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'なし';

      case 'ice':
        return '氷パネル';

      default:
        return '不明';
    }
  }

  protected get isPositive(): boolean {
    return this._value === 'none';
  }

  toString(): string {
    return `移動時のパネル変化: ${this.valueToString()}`;
  }
}
