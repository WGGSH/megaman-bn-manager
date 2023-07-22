import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySelfRecovery extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('self-recovery', value);
  }

  toString(): string {
    return `セルフリカバリー: ${this.valueToString()}`;
  }
}
