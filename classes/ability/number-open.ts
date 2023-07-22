import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityNumberOpen extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('number-open', value);
  }

  toString(): string {
    return `ナンバーオープン: ${this.valueToString()}`;
  }
}
