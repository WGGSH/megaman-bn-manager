import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusFloatShoes extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('float-shoes', value);
  }

  public toString(): string {
    return `フロートシューズ: ${this.valueToString()}`;
  }
}
