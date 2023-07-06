import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityDamagePanicBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('damage-panic-bug', value);
  }

  protected get isPositive(): boolean {
    return !this._value;
  }

  toString(): string {
    return `ダメージ時混乱バグ: ${this.valueToString()}`;
  }
}
