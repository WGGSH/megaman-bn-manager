import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySlipRunner extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('slip-runner', value);
  }

  toString(): string {
    return `スリップランナー: ${this.valueToString()}`;
  }
}
