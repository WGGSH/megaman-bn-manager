import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusAirShoes extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('air-shoes', value);
  }

  public toString(): string {
    return `エアシューズ: ${this.valueToString()}`;
  }
}
