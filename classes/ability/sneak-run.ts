import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySneakRun extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('sneak-run', value);
  }

  toString(): string {
    return `シノビダッシュ: ${this.valueToString()}`;
  }
}
