import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityAirShoes extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('air-shoes', value);
  }

  toString(): string {
    return `エアシューズ: ${this.valueToString()}`;
  }
}
