import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityResultBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('result-bug', value);
  }

  protected get isPositive(): boolean {
    return !this._value;
  }

  toString(): string {
    return `リザルトバグ: ${this.valueToString()}`;
  }
}
