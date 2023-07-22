import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySupportBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('support-bug', value);
  }

  toString(): string {
    return `サポートバグ: ${this.valueToString()}`;
  }

  protected get isPositive(): boolean {
    return !this.value;
  }
}
