import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityCustomHpBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('custom-hp-bug', value);
  }

  protected get isPositive(): boolean {
    return !this._value;
  }

  toString(): string {
    return `カスタム時HPバグ: ${this.valueToString()}`;
  }
}
