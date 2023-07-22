import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityMillionaire extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('millionaire', value);
  }

  toString(): string {
    return `ミリオネア: ${this.valueToString()}`;
  }
}
