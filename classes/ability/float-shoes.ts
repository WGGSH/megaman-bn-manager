import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityFloatShoes extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('float-shoes', value);
  }

  toString(): string {
    return `フロートシューズ: ${this.valueToString()}`;
  }
}
