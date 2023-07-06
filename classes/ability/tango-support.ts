import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityTangoSupport extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('tango-support', value);
  }

  toString(): string {
    return `タンゴサポート: ${this.valueToString()}`;
  }
}
