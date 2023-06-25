import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityUnderShirt extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('under-shirt', value);
  }

  toString(): string {
    return `アンダーシャツ: ${this.valueToString()}`;
  }
}
