import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityMoveBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('move-bug', value);
  }

  toString(): string {
    return `移動バグ: ${this.valueToString()}`;
  }

  protected get isPositive(): boolean {
    return !this.value;
  }
}
