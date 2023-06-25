import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySuperArmor extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('super-armor', value);
  }

  toString(): string {
    return `スーパーアーマー: ${this.valueToString()}`;
  }
}
