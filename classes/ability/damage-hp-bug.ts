import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityDamageHpBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('damage-hp-bug', value);
  }

  protected get isPositive(): boolean {
    return !this._value;
  }

  toString(): string {
    return `ダメージ時HPバグ: ${this.valueToString()}`;
  }
}
